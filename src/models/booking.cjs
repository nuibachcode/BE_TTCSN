"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsToMany(models.Service, {
        foreignKey: "bookingId",
        through: models.BookingService,
        as: "services",
      });
      Booking.belongsTo(models.User, { foreignKey: "patientId" });
      Booking.belongsTo(models.Schedule, { foreignKey: "scheduleId" });

      Booking.hasMany(models.Payment, { foreignKey: "bookingId" });
    }
  }
  Booking.init(
    {
      dateBooking: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "confirmed", "cancelled", "completed"),
        allowNull: false,
        defaultValue: "pending", // Tự động đặt là 'pending' khi mới tạo
      },
      description: {
        type: DataTypes.TEXT,
      },
      timeStart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeEnd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      scheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
