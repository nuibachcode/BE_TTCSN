"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorInfo.belongsTo(models.User, { foreignKey: "doctorId" });
      DoctorInfo.belongsTo(models.Specialty, { foreignKey: "specialtyId" });
    }
  }
  DoctorInfo.init(
    {
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lever: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      specialtyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DoctorInfo",
    }
  );
  return DoctorInfo;
};
