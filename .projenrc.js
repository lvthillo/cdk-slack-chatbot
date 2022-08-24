const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lorenz Vanthillo',
  authorAddress: 'lorenz.vanthillo@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-cloudwatch-alarm-chatbot',
  repositoryUrl: 'https://github.com/lvthillo/cdk-cloudwatch-alarm-chatbot.git',

  deps: [
    'aws-cdk-lib',
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();