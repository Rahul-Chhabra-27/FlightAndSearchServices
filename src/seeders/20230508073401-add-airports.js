'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Airports", [
      {
        name: "Kempegowda International Airport Bengaluru",
        cityId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bangalore Airport",
        cityId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Airport Bus Service KIAS 9",
        cityId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
