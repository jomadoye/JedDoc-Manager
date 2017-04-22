import faker from 'faker';

export default {
  adminUser: {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1,
  },

  administrator: {
    username: faker.internet.userName(),
    email: 'administrator@gmail.com',
    password: 'admin',
    roleId: 1,
  },

  fakeUser: {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },

  fakeUser1: {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },

  fakeUser2: {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },

  newUser: {
    username: 'jerry',
    email: 'jerry@andela.com',
    password: 'password',
    roleId: 1,
  },
  noUsername: {
    email: 'jed@andela.com',
    password: 'jedidiah',
  },
  noEmail: {
    username: 'jed',
    password: 'jedidiah',
  },
  noPassword: {
    email: 'jed@andela.com',
    username: 'jed',
  },
  unUniqueUsername: {
    email: 'jerry@andelab.com',
    username: 'jerry',
    password: 'password',
  },
  badEmail: {
    email: 'badEmail',
    username: 'jerry',
    password: 'password',
  },
  emptyEmail: {
    email: '',
    username: 'jerry',
    password: 'password',
  },
  emptyPassword: {
    email: 'jerry@andelab.com',
    username: 'jerry',
    password: '',
  },
  emptyUsername: {
    email: 'jerry@andelab.com',
    username: '',
    password: 'jedidiah',
  },
  unUniqueUsername1: {
    email: 'jerry@andelab.com',
    username: 'john doe',
    password: 'password',
  },
  unUniqueEmail: {
    email: 'jerry@andela.com',
    username: 'jerry1',
    password: 'password',
  },
  updateUsername: {
    username: 'Omadoye jedidiah',
  },
  updateUsername1: {
    username: 'Omadoye dede',
  },
  invalidUserId: '9999',
};
