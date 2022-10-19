[![NPM version](https://badge.fury.io/js/cdk-slack-chatbot.svg)](https://badge.fury.io/js/cdk-slack-chatbot)
[![PyPI version](https://badge.fury.io/py/cdk-slack-chatbot.svg)](https://badge.fury.io/py/cdk-slack-chatbot)
![Release](https://github.com/lvthillo/cdk-slack-chatbot/workflows/release/badge.svg)

# cdk-slack-chatbot
A CDK construct which creates an SNS AWS ChatBot (Slack) integration for CloudWatch alarms, AWS Config rules, ...

# Example
Example use of construct
```ts
import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as cloudwatch_actions from 'aws-cdk-lib/aws-cloudwatch-actions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CdkSlackChatBot } from 'cdk-slack-chatbot';
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

    const slackAlarmIntegration = new CdkSlackChatBot(this, 'SlackIntegration', {
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

