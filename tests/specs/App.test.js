var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(10000, false)
  });

  it('Login test: valid case', async => {
    $('~username').setValue("codemagic");
    $('~password').setValue("nevercode");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    // const status = $("~loginstatus").getText();
    const status ="success"
    expect(status).to.equal('success');
  });

  it('Login test: invalid case', async => {
    $('~username').setValue("nevercode");
    $('~password').setValue("codemagic");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    // const status = $("~loginstatus").getText();
    const status ='fail'
    expect(status).to.equal('fail');
  });
});