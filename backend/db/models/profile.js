const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate({ User }) {
      Profile.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Profile.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
      avatar: { type: DataTypes.TEXT, allowNull: false },
      name: { type: DataTypes.TEXT, allowNull: false },
      telephone: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Profile',
    },
  );
  return Profile;
};
