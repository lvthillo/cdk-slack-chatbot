[![NPM version](https://badge.fury.io/js/cdk-slack-chatbot.svg)](https://badge.fury.io/js/cdk-slack-chatbot)
[![PyPI version](https://badge.fury.io/py/cdk-slack-chatbot.svg)](https://badge.fury.io/py/cdk-slack-chatbot)
![Release](https://github.com/lvthillo/cdk-slack-chatbot/workflows/release/badge.svg)

# cdk-slack-chatbot
A CDK construct which creates an SNS AWS ChatBot (Slack) integration for CloudWatch alarms, AWS Config rules, ...\
More information on how to use this construct can be found [here](https://github.com/lvthillo/cdk-slack-chatbot/blob/main/API.md).

# Architecture
# <img width="987" alt="Screen Shot 2022-10-19 at 16 54 43" src="https://user-images.githubusercontent.com/14105387/196726730-5431564e-c6c1-4521-af4b-1891de709805.png">

# Example
In this example we create a CloudWatch alarm which integrates with our construct.
```ts
import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as cloudwatch_actions from 'aws-cdk-lib/aws-cloudwatch-actions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CdkSlackChatBot } from 'cdk-slack-chatbot';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
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

    const slackIntegration = new CdkSlackChatBot(this, 'SlackIntegration', {
      topicName: 'slack-alarm',
      slackChannelId: 'xxx',
      slackWorkSpaceId: 'yyy',
      slackChannelConfigName: 'slack',
    });

    alarm.addAlarmAction(new cloudwatch_actions.SnsAction(slackIntegration.topic));
  }
}
```

Test Alarm:
```
$ aws cloudwatch set-alarm-state --alarm-name "xxx" --state-value ALARM --state-reason "testing purposes"
```


