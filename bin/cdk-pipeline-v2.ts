#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineV2AppStack } from '../lib/cdk-pipeline-v2-app-stack';
import { CdkPipelineV2PipelineStack } from '../lib/cdk-pipeline-v2-pipeline-stack';

const app = new cdk.App();
new CdkPipelineV2AppStack(app, 'CdkPipelineV2Stack', {
  env: { account: '857739166276', region: 'eu-west-1' },
});

new CdkPipelineV2PipelineStack(app, 'CdkPipelineV2Stack', {
  env: { account: '857739166276', region: 'eu-west-1' },
});