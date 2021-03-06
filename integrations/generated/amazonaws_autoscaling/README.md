# @datafire/amazonaws_autoscaling

Client library for Application Auto Scaling

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_autoscaling
```

```js
let datafire = require('datafire');
let amazonaws_autoscaling = require('@datafire/amazonaws_autoscaling').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_autoscaling.DeleteScalingPolicy({}).then(data => {
  console.log(data);
})
```

## Description
<p>With Application Auto Scaling, you can automatically scale your AWS resources. The experience similar to that of <a href="https://aws.amazon.com/autoscaling/">Auto Scaling</a>. You can use Application Auto Scaling to accomplish the following tasks:</p> <ul> <li> <p>Define scaling policies to automatically scale your AWS resources</p> </li> <li> <p>Scale your resources in response to CloudWatch alarms</p> </li> <li> <p>View the history of your scaling events</p> </li> </ul> <p>Application Auto Scaling can scale the following AWS resources:</p> <ul> <li> <p>Amazon ECS services. For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Auto Scaling</a> in the <i>Amazon EC2 Container Service Developer Guide</i>.</p> </li> <li> <p>Amazon EC2 Spot fleets. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-auto-scaling.html">Automatic Scaling for Spot Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p>Amazon EMR clusters. For more information, see <a href="http://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-automatic-scaling.html">Using Automatic Scaling in Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p> </li> <li> <p>AppStream 2.0 fleets. For more information, see <a href="http://docs.aws.amazon.com/appstream2/latest/developerguide/autoscaling.html">Fleet Auto Scaling for Amazon AppStream 2.0</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p> </li> <li> <p>Provisioned read and write capacity for Amazon DynamoDB tables and global secondary indexes. For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TargetTracking.html">Auto Scaling for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> </ul> <p>For a list of supported regions, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#as-app_region">AWS Regions and Endpoints: Application Auto Scaling</a> in the <i>AWS General Reference</i>.</p>

## Actions
### DeleteScalingPolicy



```js
amazonaws_autoscaling.DeleteScalingPolicy({
  "PolicyName": "",
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* ResourceId (string) **required**
* ScalableDimension (string) **required**
* ServiceNamespace (string) **required**

### DeregisterScalableTarget



```js
amazonaws_autoscaling.DeregisterScalableTarget({
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Parameters
* ResourceId (string) **required**
* ScalableDimension (string) **required**
* ServiceNamespace (string) **required**

### DescribeScalableTargets



```js
amazonaws_autoscaling.DescribeScalableTargets({
  "ServiceNamespace": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ResourceIds (array)
* ScalableDimension (string)
* ServiceNamespace (string) **required**

### DescribeScalingActivities



```js
amazonaws_autoscaling.DescribeScalingActivities({
  "ServiceNamespace": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* ResourceId (string)
* ScalableDimension (string)
* ServiceNamespace (string) **required**

### DescribeScalingPolicies



```js
amazonaws_autoscaling.DescribeScalingPolicies({
  "ServiceNamespace": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* MaxResults (integer)
* NextToken (string)
* PolicyNames (array)
* ResourceId (string)
* ScalableDimension (string)
* ServiceNamespace (string) **required**

### PutScalingPolicy



```js
amazonaws_autoscaling.PutScalingPolicy({
  "PolicyName": "",
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Parameters
* PolicyName (string) **required**
* PolicyType (string)
* ResourceId (string) **required**
* ScalableDimension (string) **required**
* ServiceNamespace (string) **required**
* StepScalingPolicyConfiguration (object) - Represents a step scaling policy configuration.

### RegisterScalableTarget



```js
amazonaws_autoscaling.RegisterScalableTarget({
  "ServiceNamespace": "",
  "ResourceId": "",
  "ScalableDimension": ""
}, context)
```

#### Parameters
* MaxCapacity (integer)
* MinCapacity (integer)
* ResourceId (string) **required**
* RoleARN (string)
* ScalableDimension (string) **required**
* ServiceNamespace (string) **required**

