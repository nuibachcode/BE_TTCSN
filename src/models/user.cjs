"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: "roleId" });
      User.hasMany(models.Token, { foreignKey: "userId" });
      User.hasOne(models.DoctorInfo, { foreignKey: "doctorId" });
      User.hasMany(models.Booking, { foreignKey: "patientId" });
      User.hasMany(models.Schedule, { foreignKey: "doctorId" });
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false, // ko được để trống
      },
      account: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // <-- Thêm validate cho email
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passWord: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false, // <-- Thêm vào
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
