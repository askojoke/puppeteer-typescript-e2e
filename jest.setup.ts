import "expect-puppeteer";
jest.setTimeout(10000);
import { setDefaultOptions } from 'expect-puppeteer'
 
setDefaultOptions({ timeout: 10000 })