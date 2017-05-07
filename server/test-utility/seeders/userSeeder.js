import faker from 'faker';

export default [{
  id: 20,
  fullname: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 1,
}, {
  id: 21,
  fullname: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 2,
}, {
  fullname: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 3,
},
{
  username: 'john doe',
  fullname: 'jonathan doe',
  email: faker.internet.email(),
  password: 'password',
  roleId: 3,
},

];
