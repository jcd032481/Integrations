# @datafire/amazonaws_mobileanalytics

Client library for Amazon Mobile Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mobileanalytics
```

```js
let datafire = require('datafire');
let amazonaws_mobileanalytics = require('@datafire/amazonaws_mobileanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_mobileanalytics.PutEvents({}).then(data => {
  console.log(data);
})
```

## Description
Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

## Actions
### PutEvents



```js
amazonaws_mobileanalytics.PutEvents({
  "events": []
}, context)
```

#### Parameters
* events (array) **required**

