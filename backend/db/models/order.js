const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Ad, Order_details }) {
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.belongsToMany(Ad, { through: Order_details, foreignKey: 'order_id', otherKey: 'ad_id' });
    }
  }
  Order.init({
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
    status: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
