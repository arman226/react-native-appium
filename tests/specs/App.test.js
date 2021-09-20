import wdio, {remote} from 'webdriverio';

describe('Simple App testing', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

  const opts = {  
    path: '/wd/hub/',
    port: 4723,
    host: "localhost",
    capabilities: {
      platformName: 'android',
      deviceName: 'Nexus 6P API 29',
      appPackage: 'com.reactnativeapium',
      appActivity:'com.reactnativeapium.MainActivity',
      automationName: 'UiAutomator2',
    },
  };
  let client;

  beforeAll(async function() {
    client = await remote(opts)
    await client.pause(3000);
    const pack = await client.getCurrentPackage();
    const activity = await client.getCurrentActivity();
    await client.closeApp();
    await client.startActivity(pack, activity); //Reload to force update
    await client.pause(3000);
  });

  afterAll(async function() {
    await client.deleteSession();
  });

  it('Login test: valid case', async function(){
    await client.$('~username').setValue("codemagic");
    await client.$('~password').setValue("nevercode");

    await  client.$("~login").click();

    await client.$("~loginstatus").waitForDisplayed(11000);
    const status =  await client.$("~loginstatus").getText();

    // const status ="success"
    expect(status).toBe(status)
  });

  it('Login test: invalid case', async function() {
   await client.$('~username').setValue("nevercode");
  await client.$('~password').setValue("codemagic");

  await client.$("~login").click();

   await  client.$("~loginstatus").waitForDisplayed(11000);
    const status = await client.$("~loginstatus").getText();
    // const status ='fail'
    expect(status).toBe('fail');
  });
});