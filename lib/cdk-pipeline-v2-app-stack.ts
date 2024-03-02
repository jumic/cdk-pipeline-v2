import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPipelineV2AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // example resource
    const queue = new sqs.Queue(this, 'CdkPipelineV2Queue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const queue2 = new sqs.Queue(this, 'CdkPipelineV2Queu2e', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });
  }
}
