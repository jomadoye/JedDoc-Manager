import faker from 'faker';

export default {
  privateDoc: {
    title: 'seed document test',
    body: faker.lorem.sentence(),
    access: 'private',
    userId: 1,
    role: 1,
  },
  publicDoc: {
    title: 'public seed document test',
    body: faker.lorem.sentence(),
    access: 'public',
    userId: 1,
    role: 1,
  },
  document1: {
    title: 'public seed document',
    body: faker.lorem.sentence(),
    access: 'public',
  },
};
