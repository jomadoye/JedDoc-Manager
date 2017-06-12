// import sweetAlert from 'sweetalert';
// import expect from 'expect';

module.exports = {
  beforeEach(browser, done) {
    browser.resizeWindow(1280, 800, done);
  },
  'an Admin can edit a user and delete a user': function (browser) {
    browser
      .url('http://localhost:8000')
      .assert.title('Jed-Doc Manager')
      .assert.urlEquals('http://localhost:8000/')
      .waitForElementVisible('nav', 1000)
      .waitForElementVisible('#login', 100000)
      .click('#login')
      .assert.urlEquals('http://localhost:8000/login')
      .setValue('input#query', 'dede')
      .setValue('input#password', 'password')
      .click('div button[type="submit"]')
      .waitForElementVisible('div#test1', 10000)
      .assert.urlEquals('http://localhost:8000/dashboard')
      .waitForElementVisible('#mobile-nav', 10000)
      .click('#mobile-nav')
      .waitForElementVisible('#manage-users', 10000)
      .click('#manage-users')
      .assert.urlEquals('http://localhost:8000/manageusers')
      .waitForElementVisible('.manage-edit-user-btn', 10000)
      .click('.manage-edit-user-btn')
      .waitForElementVisible('input#roleId', 10000)
      .clearValue('input#username')
      .setValue('input#username', 'NightWatchUser')
      .clearValue('input#fullName')
      .setValue('input#fullName', 'NightWatch User')
      .clearValue('input#email')
      .setValue('input#email', 'NightWatchUser@night.com')
      .clearValue('input#roleId')
      .setValue('input#roleId', 1)
      .waitForElementVisible('.manage-edit-user-submit-btn', 1000000)
      .click('.manage-edit-user-submit-btn')
      .url('http://localhost:8000/manageusers')
      .waitForElementVisible('.manage-delete-user-btn', 10000)
      .assert
      .containsText('tbody tr:first-child',
        '1 qwerty qwerty qwerty@email.com 2 Tester EDIT USER')
      .click('.manage-delete-user-btn')
      .waitForElementVisible('.confirm', 10000)
      .click('.confirm');
    browser
      .expect.element('tbody tr:first-child')
      .text.to.not.equal('1 qwerty qwerty qwerty@email.com 2 Tester EDIT USER')
      .click('.dropdown-button')
      .waitForElementVisible('#logoutDropDownBtn', 1000000)
      .click('#logoutDropDownBtn')
      .assert.urlEquals('http://localhost:8000/')
      .end();
  },
  'an Admin can create a role and delete a role': function (browser) {
    browser
      .url('http://localhost:8000')
      .assert.title('Jed-Doc Manager')
      .assert.urlEquals('http://localhost:8000/')
      .waitForElementVisible('nav', 1000)
      .waitForElementVisible('#login', 100000)
      .click('#login')
      .assert.urlEquals('http://localhost:8000/login')
      .setValue('input#query', 'dede')
      .setValue('input#password', 'password')
      .click('div button[type="submit"]')
      .waitForElementVisible('div#test1', 10000)
      .assert.urlEquals('http://localhost:8000/dashboard')
      .waitForElementVisible('#mobile-nav', 10000)
      .click('#mobile-nav')
      .waitForElementVisible('#create-roles', 10000)
      .click('#create-roles')
      .assert.urlEquals('http://localhost:8000/createrole')
      .waitForElementVisible('input#new-role', 10000)
      .clearValue('input#new-role')
      .setValue('input#new-role', 'NightWatch Role')
      .click('#create-role-btn')
      .waitForElementVisible('#mobile-nav', 10000)
      .click('#mobile-nav')
      .waitForElementVisible('#manage-roles', 10000)
      .click('#manage-roles')
      .waitForElementVisible('#delete-role', 10000)
      .waitForElementVisible('tbody:last-child', 10000)
      .assert.containsText('tbody:last-child', 'NightWatch Role');
    browser
      .expect.element('tbody:last-child')
      .text.to.not.equal('NightWatch Role')
      .assert.urlEquals('http://localhost:8000/manageroles')
      .waitForElementVisible('.delete-role:last-child', 10000)
      .click('.delete-role')
      .waitForElementVisible('.confirm', 10000)
      .click('.confirm')
      .waitForElementVisible('.dropdown-button', 1000000)
      .click('.dropdown-button')
      .waitForElementVisible('#logoutDropDownBtn', 1000000)
      .click('#logoutDropDownBtn')
      .assert.urlEquals('http://localhost:8000/')
      .end();
  },
};
