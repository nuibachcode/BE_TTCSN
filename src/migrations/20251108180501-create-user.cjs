"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      account: {
        type: Sequelize.STRING,
        allowNull: false, // account không nên rỗng
        unique: true, // account phải là duy nhất
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // Email không nên rỗng
        unique: true, // Email phải là duy nhất
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false, // phone không nên rỗng
        unique: true, // phone phải là duy nhất
      },
      passWord: {
        type: Sequelize.STRING,
        allowNull: false, // Email không nên rỗng
      },
      address: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false, // Mọi user phải có 1 role
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
