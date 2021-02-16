import * as policies from 'aws-policies';
import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';


export class VpcStack extends cdk.Stack {

  constructor(construct: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(construct, id, props);

    const bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: 'MyBucket'
    });

    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: [
        policies.s3.ListJobs // s3:ListJobs
      ]
    }));
  }
}
