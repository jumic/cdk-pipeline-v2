import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { CdkPipelineV2AppStack } from './cdk-pipeline-v2-app-stack';

export class CdkPipelineV2PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('jumic/cdk-pipeline-v2', 'main', {
          connectionArn: 'arn:aws:codestar-connections:eu-west-1:857739166276:connection/fa150468-a35d-4b7c-a9e5-bf510e60f0d0',
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });

    pipeline.addStage(new MyApplication(this, 'Prod', {
      env: {
        account: '857739166276',
        region: 'eu-west-1',
      },
    }));

  }
}

class MyApplication extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    new CdkPipelineV2AppStack(this, 'CdkPipelineV2AppStack');
  }
}