import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3CdkDemoStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'ApplicationBucket', {
      versioned: true,

      encryption: s3.BucketEncryption.S3_MANAGED,

      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

      enforceSSL: true,

      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName,
      description: 'Name of the S3 bucket',
    });
  }
}