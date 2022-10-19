import * as chatbot from 'aws-cdk-lib/aws-chatbot';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export interface CdkSlackChatBotProps {
  readonly topicName: string;
  readonly slackChannelConfigName: string;
  readonly slackWorkSpaceId: string;
  readonly slackChannelId: string;
}
export class CdkSlackChatBot extends Construct {
  public readonly topic: sns.Topic;

  constructor(
    scope: Construct,
    id: string,
    props: CdkSlackChatBotProps,
  ) {
    super(scope, id);

    const topic = new sns.Topic(this, 'Topic', {
      displayName: props.topicName,
    });

    this.topic = topic;

    new chatbot.SlackChannelConfiguration(this, 'MySlackChannel', {
      slackChannelConfigurationName: props.slackChannelConfigName,
      slackWorkspaceId: props.slackWorkSpaceId,
      slackChannelId: props.slackChannelId,
      notificationTopics: [topic],
    });
  }
}
