import faker from 'faker';

module.exports = {
  beforeEach(browser, done) {
    browser.resizeWindow(1280, 800, done);
  },
  'create document, edit and delete': function (browser) {
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
      .waitForElementVisible('#mobile-nav', 10000)
      .click('#mobile-nav')
      .waitForElementVisible('#create-document', 10000)
      .click('#create-document')
      .waitForElementVisible('form', 1000)
      .setValue('input#title', faker.lorem.sentence())
      .setValue('textarea#body', faker.lorem.paragraph())
      .waitForElementVisible('.select-dropdown', 10000)
      .click('div button[type="submit"]')
      .waitForElementVisible('#mobile-nav', 10000)
      .click('#mobile-nav')
      .waitForElementVisible('#my-documents', 10000)
      .click('#my-documents')
      .assert.urlEquals('http://localhost:8000/my-documents')
      .waitForElementVisible('#mi-visibility', 10000)
      .click('#mi-visibility')
      .waitForElementVisible('.modal-footer', 1000)
      .waitForElementVisible('#modal-close', 1000)
      .click('#modal-close')
      .waitForElementVisible('#mi-edit', 10000)
      .click('#mi-edit')
      .waitForElementVisible('#editDocumentModal', 10000)
      .setValue('#editDocumentModal input#title', ' edited by nightWatch')
      .setValue('#editDocumentModal textarea#body', ' edited by nightWatch')
      .click('div button[type="submit"]')
      .url('http://localhost:8000/my-documents')
      .waitForElementVisible('#mi-delete', 10000)
      .click('#mi-delete')
      .acceptAlert()
      .end();
  },
};
