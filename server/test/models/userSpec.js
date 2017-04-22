import chai from 'chai';
import model from '../../models';
import helperUsers from '../utility/helpers/api/helperUsers';

process.env.NODE_ENV = 'test';

const User = model.User;
const fakeUser = helperUsers.fakeUser;
const fakeUser1 = helperUsers.fakeUser1;
const unUniqueEmail = helperUsers.unUniqueEmail;
const unUniqueUsername1 = helperUsers.unUniqueUsername1;
const badEmail = helperUsers.badEmail;
const emptyEmail = helperUsers.emptyEmail;
const emptyPassword = helperUsers.emptyPassword;
const emptyUsername = helperUsers.emptyUsername;
const should = chai.should();
const notNullAttrs = [
  'username',
  'email',
  'password',
  'roleId',
];
let userData;

describe('Users Model', () => {
  before((done) => {
    User.create(fakeUser1)
      .then((user) => {
        userData = user;
        done();
      });
  });
  describe('Create User', () => {
    let createdUser;
    it('should create new user', (done) => {
      User.create(fakeUser)
        .then((user) => {
          createdUser = user;
          should.exist(user);
          done();
        });
    });

    it('should create username and email with user', () => {
      createdUser.username.should.eql(fakeUser.username);
      createdUser.email.should.eql(fakeUser.email);
    });

    it('should create a user with hashed password', () => {
      createdUser.password.should.not.eql(fakeUser.password);
    });
  });

  describe('User validations', () => {
    notNullAttrs.forEach((attr) => {
      it(`should requires ${attr} field to create a user`, () => {
        userData[attr] = null;
        return userData.save()
          .then(user => should.not.exist(user))
          .catch(err =>
            (/notNull/.test(err.message))
            .should.eql(true),
          );
      });
    });

    it('should ensures a user can only be created once', () => {
      User.create(fakeUser)
        .catch(error =>
          (/SequelizeUniqueConstraintError/.test(error.name))
          .should.eql(true),
        );
    });

    it('should ensures a username can only be created once', () => {
      User.create(unUniqueUsername1)
        .catch(error =>
          (/SequelizeUniqueConstraintError/.test(error.name))
          .should.eql(true),
        );
    });

    it('should ensures an email can only be created once', () => {
      User.create(unUniqueEmail)
        .catch(error =>
          (/SequelizeUniqueConstraintError/.test(error.name))
          .should.eql(true),
        );
    });
  });

  describe('Email validation', () => {
    it('should ensure email is valid', () => {
      User.create(badEmail)
        .catch(error =>
          (/Validation error: Validation isEmail failed/
            .test(error.message))
          .should.eql(true),
        );
    });

    it('should ensure email cannot be empty', () => {
      User.create(emptyEmail)
        .catch(error =>
          (/Validation error: Validation notEmpty failed/
            .test(error.message))
          .should.eql(true),
        );
    });
  });

  describe('Password Validation', () => {
    it('should be valid if compared', () => {
      User.findById(userData.id)
        .then((user) => {
          user.checkPassword(fakeUser1.password).should.eql(true);
        });
    });

    it('should ensure password can not be empty', () => {
      User.create(emptyPassword)
        .catch(error =>
          (/Validation error: Validation notEmpty failed/
            .test(error.message))
          .should.eql(true),
        );
    });
  });

  describe('Username validation', () => {
    it('should ensure username cannot be empty', () => {
      User.create(emptyUsername)
        .catch(error =>
          (/Validation error: Validation notEmpty failed/
            .test(error.message))
          .should.eql(true),
        );
    });
  });
});
