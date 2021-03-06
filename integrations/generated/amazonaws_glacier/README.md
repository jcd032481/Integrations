# @datafire/amazonaws_glacier

Client library for Amazon Glacier

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_glacier
```

```js
let datafire = require('datafire');
let amazonaws_glacier = require('@datafire/amazonaws_glacier').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_glacier.SetDataRetrievalPolicy({}).then(data => {
  console.log(data);
})
```

## Description
<p>Amazon Glacier is a storage solution for "cold data."</p> <p>Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and easy-to-use storage for data backup and archival. With Amazon Glacier, customers can store their data cost effectively for months, years, or decades. Amazon Glacier also enables customers to offload the administrative burdens of operating and scaling storage to AWS, so they don't have to worry about capacity planning, hardware provisioning, data replication, hardware failure and recovery, or time-consuming hardware migrations.</p> <p>Amazon Glacier is a great storage choice when low storage cost is paramount, your data is rarely retrieved, and retrieval latency of several hours is acceptable. If your application requires fast or frequent access to your data, consider using Amazon S3. For more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service (Amazon S3)</a>.</p> <p>You can store any kind of data in any format. There is no maximum limit on the total amount of data you can store in Amazon Glacier.</p> <p>If you are a first-time user of Amazon Glacier, we recommend that you begin by reading the following sections in the <i>Amazon Glacier Developer Guide</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is Amazon Glacier</a> - This section of the Developer Guide describes the underlying data model, the operations it supports, and the AWS SDKs that you can use to interact with the service.</p> </li> <li> <p> <a href="http://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started with Amazon Glacier</a> - The Getting Started section walks you through the process of creating a vault, uploading archives, creating jobs to download archives, retrieving the job output, and deleting archives.</p> </li> </ul>

## Actions
### SetDataRetrievalPolicy



```js
amazonaws_glacier.SetDataRetrievalPolicy({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* Policy (object) - Data retrieval policy.

### PurchaseProvisionedCapacity



```js
amazonaws_glacier.PurchaseProvisionedCapacity({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required**

### ListVaults



```js
amazonaws_glacier.ListVaults({
  "accountId": ""
}, context)
```

#### Parameters
* limit (string)
* marker (string)
* accountId (string) **required**

### DescribeVault



```js
amazonaws_glacier.DescribeVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**

### SetVaultAccessPolicy



```js
amazonaws_glacier.SetVaultAccessPolicy({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* policy (object) - Contains the vault access policy.

### UploadArchive



```js
amazonaws_glacier.UploadArchive({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* body (string)

### DeleteArchive



```js
amazonaws_glacier.DeleteArchive({
  "accountId": "",
  "vaultName": "",
  "archiveId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* archiveId (string) **required**

### ListJobs



```js
amazonaws_glacier.ListJobs({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* limit (string)
* marker (string)
* accountId (string) **required**
* vaultName (string) **required**

### DescribeJob



```js
amazonaws_glacier.DescribeJob({
  "accountId": "",
  "vaultName": "",
  "jobId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* jobId (string) **required**

### GetJobOutput



```js
amazonaws_glacier.GetJobOutput({
  "accountId": "",
  "vaultName": "",
  "jobId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* jobId (string) **required**

### InitiateVaultLock



```js
amazonaws_glacier.InitiateVaultLock({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* policy (object) - Contains the vault lock policy.

### CompleteVaultLock



```js
amazonaws_glacier.CompleteVaultLock({
  "accountId": "",
  "vaultName": "",
  "lockId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* lockId (string) **required**

### ListMultipartUploads



```js
amazonaws_glacier.ListMultipartUploads({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* limit (string)
* marker (string)
* accountId (string) **required**
* vaultName (string) **required**

### UploadMultipartPart



```js
amazonaws_glacier.UploadMultipartPart({
  "accountId": "",
  "vaultName": "",
  "uploadId": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* uploadId (string) **required**
* body (string)

### SetVaultNotifications



```js
amazonaws_glacier.SetVaultNotifications({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* vaultNotificationConfig (object) - Represents a vault's notification configuration.

### ListTagsForVault



```js
amazonaws_glacier.ListTagsForVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**

### AddTagsToVault



```js
amazonaws_glacier.AddTagsToVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* Tags (array)

### RemoveTagsFromVault



```js
amazonaws_glacier.RemoveTagsFromVault({
  "accountId": "",
  "vaultName": ""
}, context)
```

#### Parameters
* accountId (string) **required**
* vaultName (string) **required**
* TagKeys (array)

