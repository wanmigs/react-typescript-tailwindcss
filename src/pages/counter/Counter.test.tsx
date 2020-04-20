import puppeteer from 'puppeteer';

let browser: { newPage: () => any; close: () => void };
let page: {
  goto: (arg0: string) => any;
  waitForSelector: (arg0: string) => any;
  $eval: (
    arg0: string,
    arg1: { (e: any): any; (e: any): any; (e: any): any; (e: any): any }
  ) => any;
  click: (arg0: string) => any;
};

beforeAll(async () => {
  jest.setTimeout(10000);
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/counter');
});

// 1
test('renders counter', async () => {
  await page.waitForSelector('.header');

  const header = await page.$eval(
    '.header',
    (e: { innerHTML: any }) => e.innerHTML
  );
  expect(header).toBe('Counter');
});

// 2
test('sets initial state to zero', async () => {
  await page.waitForSelector('.counter-app');

  const count = await page.$eval(
    '.count',
    (e: { innerHTML: any }) => e.innerHTML
  );
  expect(count).toBe('0');
});

// 3
test('increments counter by 1', async () => {
  await page.waitForSelector('.counter-app');

  await page.click('.increment');
  const count = await page.$eval(
    '.count',
    (e: { innerHTML: any }) => e.innerHTML
  );
  expect(count).toBe('1');
});

// 4
test('decrements counter by 1', async () => {
  await page.waitForSelector('.counter-app');

  await page.click('.decrement');
  const count = await page.$eval(
    '.count',
    (e: { innerHTML: any }) => e.innerHTML
  );
  expect(count).toBe('0');
});

afterAll(() => {
  browser.close();
});
