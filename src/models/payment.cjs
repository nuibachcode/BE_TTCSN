"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Booking, { foreignKey: "bookingId" });
    }
  }
  Payment.init(
    {
      amount: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
      },
      method: {
        type: DataTypes.ENUM("cash", "credit_card", "banking"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "success", "failed"),
        allowNull: false,
        defaultValue: "pending",
      },
      transactionCode: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      note: {
        type: DataTypes.TEXT,
      },
      bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
