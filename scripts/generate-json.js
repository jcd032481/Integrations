const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const toMarkdown = require('to-markdown');
const datafire = require('datafire');
const args = require('yargs').argv;

const iterateIntegs = require('./iterate-integrations');

const MAX_DESCRIPTION_LENGTH = 120;
const LOGO_BASE = 'https://s3-us-west-2.amazonaws.com/datafire-logos';

const maybeMkdirp = (dir) => {
  try {
    mkdirp.sync(dir);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

const truncateDescription = (desc) => {
  if (!desc) return;
  desc = desc || '';
  desc = desc.replace(/<(?:.|\n)*?>/gm, '');
  let newLine = desc.indexOf('\n');
  if (newLine > -1) {
    desc = desc.substring(0, newLine);
  }
  if (desc.length > MAX_DESCRIPTION_LENGTH) {
    desc = desc.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
  }
  return desc;
}

const sanitizeDescription = desc => {
  if (!desc) return desc;
  if (desc.indexOf('</') !== -1) {
    desc = toMarkdown(desc);
    desc = desc.replace(/<(?:.|\n)*?>/gm, '');
  }
  return desc;
}

const BASE_DIR = __dirname + '/../integrations/';
const OUT_DIR = __dirname + '/../json/';

let list = {};
if (args.name) list = require(OUT_DIR + 'list.json');
iterateIntegs((dir, name, integ) => {
    console.log('adding', name);
    let package = require(path.join(dir, 'package.json'));
    let openapiFile = path.join(dir, 'openapi.json');
    let infoFile = path.join(dir, 'info.json');
    let info = {};
    if (fs.existsSync(openapiFile)) {
      let openapi = JSON.parse(fs.readFileSync(openapiFile, 'utf8'));
      info.title = openapi.info.title;
      info.description = openapi.info.description;
      info.logo = openapi.info['x-logo'];
      info.tags = (openapi.info['x-apisguru-categories'] || []).map(t => t.replace(/_/g, ' '));
    }
    if (fs.existsSync(infoFile)) {
      Object.assign(info, require(infoFile));
    }
    if (info.logo) {
      let extname = info.logo.url.match(/\.(\w+)$/)[1];
      info.logo.url = LOGO_BASE + '/' + name + '.' + extname;
    }
    if (list[name] && !args.name) throw new Error("Duplicate name " + name);
    let listDetails = list[name] = Object.assign({}, integ.getDetails(), info);
    listDetails.id = name;
    if (name.indexOf('google_') === 0) listDetails.tags.push('google');
    if (name.indexOf('amazonaws_') === 0) listDetails.tags.push('aws');
    if (name.indexOf('azure_') === 0) listDetails.tags.push('azure');


    listDetails.description = sanitizeDescription(listDetails.description);
    let details = Object.assign({}, integ.getDetails(true), listDetails);
    for (let key in details.definitions || {}) {
      let schema = details.definitions[key];
      schema.title = schema.title || key;
    }
    listDetails.description = truncateDescription(listDetails.description);
    listDetails.latestVersion = package.version;
    details.actions.forEach(action => {
      action.description = sanitizeDescription(action.description);
    })

    let integDir = path.join(OUT_DIR, name, package.version);
    maybeMkdirp(integDir);
    fs.writeFileSync(path.join(integDir, 'index.json'), JSON.stringify(details, null, 2));
}, name => !args.name || name === args.name);

fs.writeFileSync(OUT_DIR + 'list.json', JSON.stringify(list, null, 2));

