"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync("1q2w3e", salt);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Umais Hassan",
          email: "umaishassan66u@gmail.com",
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
