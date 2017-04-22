import faker from 'faker';

export default {
  privateDoc: {
    title: 'seed document test',
    docContent: faker.lorem.paragraph(),
    viewAccess: 'private',
    userId: 1,
    role: 1,
  },
  publicDoc: {
    title: 'public seed document test',
    docContent: faker.lorem.paragraph(),
    viewAccess: 'public',
    userId: 1,
    role: 1,
  },
};
