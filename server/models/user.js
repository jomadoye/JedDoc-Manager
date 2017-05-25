import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        User.hasMany(models.Documents, {
          foreignKey: 'userId',
          as: 'documents',
          onDelete: 'CASCADE',
        });

        User.belongsTo(models.Roles, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE',
        });
      },
    },
    instanceMethods: {
      checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },

      hashPassword() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
      },
    },

    hooks: {
      beforeCreate(user) {
        user.hashPassword();
      },

      beforeUpdate(user) {
        if (user.password) {
          user.hashPassword();
        }
      },
    },
  });
  return User;
};
