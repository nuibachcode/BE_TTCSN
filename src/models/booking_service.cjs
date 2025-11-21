"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookingService.belongsTo(models.Booking, { foreignKey: "bookingId" });
      BookingService.belongsTo(models.Service, { foreignKey: "serviceId" });
    }
  }
  BookingService.init(
    {
      bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceAtBooking: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BookingService",
    }
  );
  return BookingService;
};
