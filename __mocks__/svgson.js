import * as TestUtils from '../utils/TestUtils/TestUtils';

// Mocking specific `node_modules` functions:
// https://stackoverflow.com/a/53022533/9599137
const svgsonMock = jest.genMockFromModule('svgson');

const parsedGitHubCalendar = TestUtils.getFakeContributionsObjectWithDailyCounts([5]);

parsedGitHubCalendar[0].attributes = {
  ...parsedGitHubCalendar[0].attributes,
  width: '669',
};

function parseSync() {
  return parsedGitHubCalendar[0];
}

function parse() {
  return Promise.resolve(parsedGitHubCalendar[0]);
}

svgsonMock.parseSync = parseSync;
svgsonMock.parse = parse;

module.exports = svgsonMock;
