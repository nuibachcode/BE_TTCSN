"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Xóa tất cả token hết hạn
     */
    static async removeExpired() {
      try {
        const deleted = await Token.destroy({
          where: {
            expiresAt: {
              [Op.lt]: new Date(), // token < thời điểm hiện tại
            },
          },
        });
        console.log(`Đã xóa ${deleted} token hết hạn`);
        return deleted;
      } catch (err) {
        console.error("Lỗi khi xóa token hết hạn:", err);
        return 0;
      }
    }

    static associate(models) {
      Token.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }

  Token.init(
    {
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Token",
      timestamps: true,
    }
  );

  return Token;
};
