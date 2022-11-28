const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate() {
    }
  }
  Favorites.init({
    id_user: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
    ad_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Ads', key: 'id' } },
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};
