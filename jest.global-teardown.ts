const {teardown} = require('jest-environment-puppeteer');
/**
 * Sets up the environment for running tests with Jest
 */
module.exports = async function globalTeardown(globalConfig: any) {
    // do stuff which needs to be done after all tests are executed
    await teardown(globalConfig);
};
