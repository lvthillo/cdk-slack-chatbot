import { aws_sns as sns, aws_chatbot as chatbot } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CdkCloudWatchAlarmChatBotProps {
  readonly topicName: string;
  readonly slackWorkSpaceId: string;
  readonly slackChannelId: string;
}
export class CdkCloudWatchAlarmChatBot extends Construct {
  public readonly topic: sns.ITopic;
  constructor(
    scope: Construct,
    id: string,
    props: CdkCloudWatchAlarmChatBotProps,
  ) {
    super(scope, id);

    this.topic = new sns.Topic(this, 'Topic', {
      displayName: props.topicName,
    });

    new chatbot.SlackChannelConfiguration(this, 'MySlackChannel', {
      slackChannelConfigurationName: 'cw-alarm-slack',
      slackWorkspaceId: props.slackWorkSpaceId,
      slackChannelId: props.slackChannelId,
      notificationTopics: [this.topic],
    });
  }
}
