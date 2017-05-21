module.exports = {
  'Creates a new User and log him/her in': function (browser) {
    browser
      .url('http://localhost:8000')
      .assert.title('Jed-Doc Manager')
      .assert.urlEquals('http://localhost:8000/')
      .waitForElementVisible('nav', 1000)
      .click('#signup')
      .url('http://localhost:8000/signup')
      .assert.urlEquals('http://localhost:8000/signup')
      .assert.title('Jed-Doc Manager')
      .setValue('input#fullname', 'jedidiah omadoye')
      .setValue('input#username', 'jedidiah')
      .setValue('input#email', 'jedidiah@gmail.com')
      .setValue('input#password', 'jedidiah')
      .click('button[type="submit"]')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/login')
      .setValue('input#query', 'jedidiah')
      .setValue('input#password', 'jedidiah')
      .click('button[type="submit"]')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/dashboard')
      // .click('#logoutDropDownBtn')
      // .pause(2000)
      // .assert.urlEquals('http://localhost:8000/')
      // .pause(20000)
      .end();
  },
};
