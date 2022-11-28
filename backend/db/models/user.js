const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Ad, Order, Profile, Favorites,
    }) {
      User.hasMany(Ad, { foreignKey: 'user_id' });
      User.hasMany(Order, { foreignKey: 'user_id' });
      User.hasMany(Profile, { foreignKey: 'user_id' });
      User.belongsToMany(Ad, { through: Favorites, foreignKey: 'id_user', otherKey: 'ad_id' });
    }
  }
  User.init({
    email: { type: DataTypes.TEXT, allowNull: false },
    password: { type: DataTypes.TEXT, allowNull: false },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
