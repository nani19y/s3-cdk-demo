#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3CdkDemoStack } from '../lib/s3-cdk-demo-stack';

const app = new cdk.App();

new S3CdkDemoStack(app, 'S3CdkDemoStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
});