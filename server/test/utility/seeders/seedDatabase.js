import models from '../../../models';
import roleSeeder from './roleSeeder';
import userSeeder from './userSeeder';
import documentSeeder from './docSeeder';

const seeds = () => {
  models.sequelize.sync({ force: true }).then(() => {
    // Table created
    models.Role.bulkCreate(roleSeeder);
    models.User.bulkCreate(userSeeder, { individualHooks: true }).then(() => {
      models.Document.bulkCreate(documentSeeder);
    });
  });
};

export default seeds();
