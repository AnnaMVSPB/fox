const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    static associate({ User, Favorites, Category, Order, Order_details }) {
      Ad.belongsTo(User, { foreignKey: 'user_id' });
      Ad.belongsToMany(User, { through: Favorites, foreignKey: 'ad_id', otherKey: 'id_user' });
      Ad.belongsTo(Category, { foreignKey: 'category_id' });
      Ad.belongsToMany(Order, {
        through: Order_details,
        foreignKey: 'ad_id',
        otherKey: 'order_id',
      });
    }
  }
  Ad.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      img: { type: DataTypes.TEXT, allowNull: false },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Categorys', key: 'id' },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
      },
    },
    {
      sequelize,
      modelName: 'Ad',
    }
  );
  return Ad;
};
