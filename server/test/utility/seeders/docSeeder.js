import faker from 'faker';

export default [{
  title: faker.lorem.words(),
  body: faker.lorem.sentence(),
  access: 'private',
  ownerRoleId: 2,
  userId: 1,
}, {
  title: 'Fake title document',
  body: faker.lorem.sentence(),
  access: 'public',
  ownerRoleId: 2,
  userId: 1,
}];
