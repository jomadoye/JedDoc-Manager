module.exports = {
  beforeEach(browser, done) {
    browser.resizeWindow(1280, 800, done);
  },
  'Creates a new User and log him/her in and logout': function (browser) {
    browser
      .url('http://localhost:8000')
      .assert.title('Jed-Doc Manager')
      .assert.urlEquals('http://localhost:8000/')
      .waitForElementVisible('nav', 1000)
      .waitForElementVisible('#signup', 100000)
      .click('#signup')
      .assert.urlEquals('http://localhost:8000/signup')
      .assert.title('Jed-Doc Manager')
      .setValue('input#fullname', 'jedidiah omadoye')
      .setValue('input#username', 'jedidiah')
      .setValue('input#email', 'jedidiah@gmail.com')
      .setValue('input#password', 'jedidiah')
      .click('button[type="submit"]')
      .waitForElementVisible('input#query', 100000)
      .assert.urlEquals('http://localhost:8000/login')
      .setValue('input#query', 'jedidiah')
      .setValue('input#password', 'jedidiah')
      .click('div button[type="submit"]')
      .waitForElementVisible('div#test1', 10000)
      .assert.urlEquals('http://localhost:8000/dashboard')
      .waitForElementVisible('.dropdown-button', 1000000)
      .click('.dropdown-button')
      .waitForElementVisible('#logoutDropDownBtn', 1000000)
      .click('#logoutDropDownBtn')
      .url('http://localhost:8000')
      .assert.urlEquals('http://localhost:8000/')
      .end();
  },
  'an already registed user can login and logout': function (browser) {
    browser
      .url('http://localhost:8000')
      .assert.title('Jed-Doc Manager')
      .assert.urlEquals('http://localhost:8000/')
      .waitForElementVisible('nav', 1000)
      .waitForElementVisible('#login', 100000)
      .click('#login')
      .assert.urlEquals('http://localhost:8000/login')
      .setValue('input#query', 'jedidiah')
      .setValue('input#password', 'jedidiah')
      .click('div button[type="submit"]')
      .waitForElementVisible('div#test1', 10000)
      .assert.urlEquals('http://localhost:8000/dashboard')
      .waitForElementVisible('.dropdown-button', 1000000)
      .click('.dropdown-button')
      .waitForElementVisible('#logoutDropDownBtn', 1000000)
      .click('#logoutDropDownBtn')
      .url('http://localhost:8000')
      .assert.urlEquals('http://localhost:8000/')
      .end();
  },
};
