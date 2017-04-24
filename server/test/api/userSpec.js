import chai from 'chai';
import chaiHttp from 'chai-http';
import helperUsers from '../utility/helpers/api/helperUsers';

import server from '../../app';

process.env.NODE_ENV = 'test';
const newUser = helperUsers.newUser;
const fakeUser = helperUsers.fakeUser;
const noUsername = helperUsers.noUsername;
const noEmail = helperUsers.noEmail;
const noPassword = helperUsers.noPassword;
const unUniqueUsername = helperUsers.unUniqueUsername;
const updateUsername = helperUsers.updateUsername;
const updateUsername1 = helperUsers.updateUsername1;
const unUniqueEmail = helperUsers.unUniqueEmail;
const invalidUserId = helperUsers.invalidUserId;
const invalidToken = 'aassccfftteteteteteet';

const should = chai.should();
chai.use(chaiHttp);

describe('User API', () => {
  let userData;
  let basicUser;
  before((done) => {
    chai.request(server)
      .post('/users')
      .send(newUser)
      .end((err, res) => {
        userData = res.body;
        done();
      });
  });

  describe('Create User', () => {
    it('should not create a user without username field', (done) => {
      chai.request(server)
        .post('/users')
        .send(noUsername)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.have.property('path');
          res.body.errors[0].should.have.property('path')
            .eql('username');
          res.body.errors[0].should.have.property('type')
            .eql('notNull Violation');
          res.body.errors[0].should.have.property('message')
            .eql('username cannot be null');
          done();
        });
    });

    it('should not create a user without email field', (done) => {
      chai.request(server)
        .post('/users')
        .send(noEmail)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.have.property('path');
          res.body.errors[0].should.have.property('path')
            .eql('email');
          res.body.errors[0].should.have.property('type')
            .eql('notNull Violation');
          res.body.errors[0].should.have.property('message')
            .eql('email cannot be null');
          done();
        });
    });

    it('should not create a user without password field', (done) => {
      chai.request(server)
        .post('/users')
        .send(noPassword)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.have.property('path');
          res.body.errors[0].should.have.property('path')
            .eql('password');
          res.body.errors[0].should.have.property('type')
            .eql('notNull Violation');
          res.body.errors[0].should.have.property('message')
            .eql('password cannot be null');
          done();
        });
    });

    it('should not create a user with an unUnique username', (done) => {
      chai.request(server)
        .post('/users')
        .send(unUniqueUsername)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.have.property('path');
          res.body.errors[0].should.have.property('path')
            .eql('username');
          res.body.errors[0].should.have.property('type')
            .eql('unique violation');
          res.body.errors[0].should.have.property('message')
            .eql('username must be unique');
          done();
        });
    });

    it('should not create a user with an unUnique email', (done) => {
      chai.request(server)
        .post('/users')
        .send(unUniqueEmail)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors[0].should.have.property('path');
          res.body.errors[0].should.have.property('path')
            .eql('email');
          res.body.errors[0].should.have.property('type')
            .eql('unique violation');
          res.body.errors[0].should.have.property('message')
            .eql('email must be unique');
          done();
        });
    });

    it('should create a new user ', (done) => {
      chai.request(server)
        .post('/users')
        .send(fakeUser)
        .end((err, res) => {
          basicUser = res.body;
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message')
            .eql('User successfully created');
          done();
        });
    });
  });

  describe('Search User by username', () => {
    it('should search for a user by username', (done) => {
      chai.request(server)
        .get(`/api/search/users/${userData.user.username}`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.eql('This is your user.');
          res.body.success.should.eql(true);
          done();
        });
    });

    it('should not find user if username does not exist', (done) => {
      chai.request(server)
        .get(`/api/search/users/${userData.user.username}notExist`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.eql('User not found.');
          res.body.success.should.eql(false);
          done();
        });
    });

    it('should not find user if not admin', (done) => {
      chai.request(server)
        .get(`/api/search/users/${userData.user.username}`)
        .set('x-access-token', basicUser.token)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.message.should.eql('Admin access is required');
          res.body.success.should.eql(false);
          done();
        });
    });
  });

  describe('/GET User', () => {
    it('should not GET all the users if no token provided', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.a('Object');
          res.body.should.have.property('success');
          res.body.should.have.property('message');
          res.body.should.have.property('success')
            .eql(false);
          res.body.should.have.property('message')
            .eql('No token provided.');
          done();
        });
    });

    it('should not GET all the users if the token provided is invalid',
      (done) => {
        chai.request(server)
          .get('/api/users')
          .set('x-access-token', invalidToken)
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('Object');
            res.body.should.have.property('success');
            res.body.should.have.property('message');
            res.body.should.have.property('success')
              .eql(false);
            res.body.should.have.property('message')
              .eql('Incorrect token.');
            done();
          });
      });

    it('should not GET a user by Id if no token provided', (done) => {
      chai.request(server)
        .get(`/api/users/${userData.id}`)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.a('Object');
          res.body.should.have.property('success');
          res.body.should.have.property('message');
          res.body.should.have.property('success')
            .eql(false);
          res.body.should.have.property('message')
            .eql('No token provided.');
          done();
        });
    });

    it('should not GET a user by Id if the token provided is invalid',
      (done) => {
        chai.request(server)
          .get(`/api/users/${userData.id}`)
          .set('x-access-token', invalidToken)
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('Object');
            res.body.should.have.property('success');
            res.body.should.have.property('message');
            res.body.should.have.property('success')
              .eql(false);
            res.body.should.have.property('message')
              .eql('Incorrect token.');
            done();
          });
      });

    it('should GET users when limit and offset are set', (done) => {
      chai.request(server)
        .get('/api/users/?limit=10&offset=2')
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Array');
          done();
        });
    });

    it('should GET users when limit and offset are not set', (done) => {
      chai.request(server)
        .get('/api/users/')
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Array');
          done();
        });
    });

    it('should GET user by Id if Id exist', (done) => {
      chai.request(server)
        .get(`/api/users/${userData.user.id}`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          done();
        });
    });

    it('should not GET user by Id if Id does not exist', (done) => {
      chai.request(server)
        .get(`/api/users/${invalidUserId}`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('Object');
          res.body.should.have.property('message')
            .eql('User not found');
          done();
        });
    });
  });

  describe('/PUT User', () => {
    it('should update a user', (done) => {
      chai.request(server)
        .put(`/api/users/${userData.user.id}`)
        .set('x-access-token', userData.token)
        .send(updateUsername)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          res.body.message.should.eql('User updated successfully.');
          res.body.success.should.eql(true);
          done();
        });
    });

    it('should not update user if user does not exist ', (done) => {
      chai.request(server)
        .put(`/api/users/${invalidUserId}`)
        .set('x-access-token', userData.token)
        .send(updateUsername)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('Object');
          res.body.message.should.eql('User not found');
          res.body.success.should.eql(false);
          done();
        });
    });

    it('should not update user data with invalid id', (done) => {
      chai.request(server)
        .put('/api/users/jedidiah')
        .set('x-access-token', userData.token)
        .send(updateUsername)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('Error updating user.');
          done();
        });
    });

    it('should not update user data with invalid data', (done) => {
      chai.request(server)
        .put(`/api/users/${userData.id}`)
        .set('x-access-token', userData.token)
        .send(updateUsername)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('Error updating user.');
          done();
        });
    });

    it('user should update another user if having admin rights', (done) => {
      chai.request(server)
        .put('/api/users/20')
        .set('x-access-token', userData.token)
        .send(updateUsername1)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          res.body.success.should.eql(true);
          res.body.message.should.eql('User updated successfully.');
          done();
        });
    });

    it('user should not update another user if not an admin', (done) => {
      chai.request(server)
        .put('/api/users/20')
        .set('x-access-token', basicUser.token)
        .send({
          username: 'Omadoye ewo',
        })
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('unauthorized to perform this request');
          done();
        });
    });
  });

  describe('/DELETE delete user', () => {
    it('should delete any user if admin', (done) => {
      chai.request(server)
        .delete('/api/users/20')
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          res.body.success.should.eql(true);
          res.body.message.should.eql('User deleted successfully.');
          done();
        });
    });

    it('should return error if userId is invalid', (done) => {
      chai.request(server)
        .delete(`/api/users/${userData.id}`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('Error encountered when deleting user');
          done();
        });
    });

    it('should not delete non-existent users', (done) => {
      chai.request(server)
        .delete(`/api/users/${invalidUserId + 1}`)
        .set('x-access-token', userData.token)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('User not found');
          done();
        });
    });

    it('should not delete any user if not admin', (done) => {
      chai.request(server)
        .delete('/api/users/21')
        .set('x-access-token', basicUser.token)
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.a('Object');
          res.body.success.should.eql(false);
          res.body.message.should.eql('unauthorized to perform this request');
          done();
        });
    });

    it('should delete user if he owns the account', (done) => {
      chai.request(server)
        .delete(`/api/users/${basicUser.user.id}`)
        .set('x-access-token', basicUser.token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Object');
          res.body.success.should.eql(true);
          res.body.message.should.eql('User deleted successfully.');
          done();
        });
    });
  });
});
