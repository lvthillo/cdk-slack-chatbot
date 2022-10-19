const { awscdk } = require('projen');
const PROJECT_NAME = 'cdk-slack-chatbot';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lorenz Vanthillo',
  authorAddress: 'lorenz.vanthillo@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  keywords: ['aws', 'awscdk', 'chatbot', 'cloudwatch', 'alarm', 'slack'],
  license: 'Apache-2.0',
  majorVersion: 1,
  name: PROJECT_NAME,
  publishToPypi: {
    distName: PROJECT_NAME,
    module: 'cdk_cloudwatch_alarm_chatbot',
  },
  deps: [
    'aws-cdk-lib',
  ],
  stability: 'experimental',
  repository: 'https://github.com/lvthillo/cdk-slack-chatbot.git',
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);

project.npmignore.exclude(...common_exclude, 'images');
project.synth();