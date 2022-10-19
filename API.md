# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdkCloudWatchAlarmChatBot <a name="CdkCloudWatchAlarmChatBot" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot"></a>

#### Initializers <a name="Initializers" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer"></a>

```typescript
import { CdkCloudWatchAlarmChatBot } from 'cdk-cloudwatch-alarm-chatbot'

new CdkCloudWatchAlarmChatBot(scope: Construct, id: string, props: CdkCloudWatchAlarmChatBotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps">CdkCloudWatchAlarmChatBotProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps">CdkCloudWatchAlarmChatBotProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.isConstruct"></a>

```typescript
import { CdkCloudWatchAlarmChatBot } from 'cdk-cloudwatch-alarm-chatbot'

CdkCloudWatchAlarmChatBot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `topic`<sup>Required</sup> <a name="topic" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBot.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---


## Structs <a name="Structs" id="Structs"></a>

### CdkCloudWatchAlarmChatBotProps <a name="CdkCloudWatchAlarmChatBotProps" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps"></a>

#### Initializer <a name="Initializer" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.Initializer"></a>

```typescript
import { CdkCloudWatchAlarmChatBotProps } from 'cdk-cloudwatch-alarm-chatbot'

const cdkCloudWatchAlarmChatBotProps: CdkCloudWatchAlarmChatBotProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.slackChannelId">slackChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.slackWorkSpaceId">slackWorkSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.slackChannelId"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* string

---

##### `slackWorkSpaceId`<sup>Required</sup> <a name="slackWorkSpaceId" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.slackWorkSpaceId"></a>

```typescript
public readonly slackWorkSpaceId: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="cdk-cloudwatch-alarm-chatbot.CdkCloudWatchAlarmChatBotProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---



