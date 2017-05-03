export default (sequelize, DataTypes) => {
  const Document = sequelize.define('Documents', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    access: {
      type: DataTypes.ENUM('public', 'private', 'role'),
      allowNull: false,
      defaultValue: 'public',
      required: true,
    },
    ownerRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        Document.belongsTo(models.Users, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Document;
};
