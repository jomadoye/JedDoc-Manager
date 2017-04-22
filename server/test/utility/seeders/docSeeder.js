import faker from 'faker';

export default [{
  title: faker.lorem.words(),
  body: faker.lorem.sentence(),
  access: 'private',
  userId: 1,
}, {
  title: faker.lorem.words(),
  body: faker.lorem.sentence(),
  access: 'public',
  userId: 1,
}];
