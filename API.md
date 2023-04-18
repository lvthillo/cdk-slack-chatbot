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



# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdkSlackChatBot <a name="CdkSlackChatBot" id="cdk-slack-chatbot.CdkSlackChatBot"></a>

#### Initializers <a name="Initializers" id="cdk-slack-chatbot.CdkSlackChatBot.Initializer"></a>

```typescript
import { CdkSlackChatBot } from 'cdk-slack-chatbot'

new CdkSlackChatBot(scope: Construct, id: string, props: CdkSlackChatBotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-slack-chatbot.CdkSlackChatBotProps">CdkSlackChatBotProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-slack-chatbot.CdkSlackChatBot.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-slack-chatbot.CdkSlackChatBotProps">CdkSlackChatBotProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-slack-chatbot.CdkSlackChatBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-slack-chatbot.CdkSlackChatBot.isConstruct"></a>

```typescript
import { CdkSlackChatBot } from 'cdk-slack-chatbot'

CdkSlackChatBot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-slack-chatbot.CdkSlackChatBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBot.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-slack-chatbot.CdkSlackChatBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `topic`<sup>Required</sup> <a name="topic" id="cdk-slack-chatbot.CdkSlackChatBot.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---


## Structs <a name="Structs" id="Structs"></a>

### CdkSlackChatBotProps <a name="CdkSlackChatBotProps" id="cdk-slack-chatbot.CdkSlackChatBotProps"></a>

#### Initializer <a name="Initializer" id="cdk-slack-chatbot.CdkSlackChatBotProps.Initializer"></a>

```typescript
import { CdkSlackChatBotProps } from 'cdk-slack-chatbot'

const cdkSlackChatBotProps: CdkSlackChatBotProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBotProps.property.slackChannelConfigName">slackChannelConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBotProps.property.slackChannelId">slackChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBotProps.property.slackWorkSpaceId">slackWorkSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-slack-chatbot.CdkSlackChatBotProps.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `slackChannelConfigName`<sup>Required</sup> <a name="slackChannelConfigName" id="cdk-slack-chatbot.CdkSlackChatBotProps.property.slackChannelConfigName"></a>

```typescript
public readonly slackChannelConfigName: string;
```

- *Type:* string

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="cdk-slack-chatbot.CdkSlackChatBotProps.property.slackChannelId"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* string

---

##### `slackWorkSpaceId`<sup>Required</sup> <a name="slackWorkSpaceId" id="cdk-slack-chatbot.CdkSlackChatBotProps.property.slackWorkSpaceId"></a>

```typescript
public readonly slackWorkSpaceId: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="cdk-slack-chatbot.CdkSlackChatBotProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---



