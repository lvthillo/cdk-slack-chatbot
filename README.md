[![NPM version](https://badge.fury.io/js/cdk-cloudwatch-alarm-chatbot.svg)](https://badge.fury.io/js/cdk-cloudwatch-alarm-chatbot)
[![PyPI version](https://badge.fury.io/py/cdk-cloudwatch-alarm-chatbot.svg)](https://badge.fury.io/py/cdk-cloudwatch-alarm-chatbot)
![Release](https://github.com/lvthillo/cdk-cloudwatch-alarm-chatbot/workflows/release/badge.svg)

# cdk-cloudwatch-alarm-chatbot
A CDK construct which creates an SNS AWS ChatBot (Slack) integration for CloudWatch alarms.

# Example
Example use of construct
```ts
import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as cloudwatch_actions from 'aws-cdk-lib/aws-cloudwatch-actions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CdkCloudWatchAlarmChatBot } from 'cdk-cloudwatch-alarm-chatbot';
import { Construct } from 'constructs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'HelloCdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const qMetric = queue.metric('ApproximateNumberOfMessagesVisible');

    const alarm = new cloudwatch.Alarm(this, 'Alarm', {
      metric: qMetric,
      threshold: 100,
      evaluationPeriods: 3,
      datapointsToAlarm: 2
    });

    const slackAlarmIntegration = new CdkCloudWatchAlarmChatBot(this, 'SlackIntegration', {
      topicName: 'slack-alarm',
      slackChannelId: 'xxx',
      slackWorkSpaceId: 'yyy',
    });

    alarm.addAlarmAction(new cloudwatch_actions.SnsAction(slackAlarmIntegration.topic));

  }
}
```

Test Alarm:
```
$ aws cloudwatch set-alarm-state --alarm-name "xxx" --state-value ALARM --state-reason "testing purposes"
```

