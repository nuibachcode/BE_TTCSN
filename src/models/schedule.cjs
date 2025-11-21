"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.User, { foreignKey: "doctorId" });
      Schedule.hasMany(models.Booking, { foreignKey: "scheduleId" });
    }
  }
  Schedule.init(
    {
      dateWork: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      timeStart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeEnd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxPatient: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
