export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Roles', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        Role.hasMany(models.Users, {
          foreignKey: 'roleId',
          as: 'users',
          onDelete: 'SET NULL',
        });
      },
    },
  });
  return Role;
};
