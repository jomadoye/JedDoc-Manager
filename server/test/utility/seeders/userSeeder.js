import faker from 'faker';

export default [{
  id: 20,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 1,
}, {
  id: 21,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 2,
}, {
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 3,
},
{
  username: 'john doe',
  email: faker.internet.email(),
  password: 'password',
  roleId: 3,
},

];
