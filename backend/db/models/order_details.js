const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_details extends Model {
    static associate() {
    }
  }
  Order_details.init({
    order_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Orders', key: 'id' } },
    ad_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Ads', key: 'id' } },
  }, {
    sequelize,
    modelName: 'Order_details',
  });
  return Order_details;
};
