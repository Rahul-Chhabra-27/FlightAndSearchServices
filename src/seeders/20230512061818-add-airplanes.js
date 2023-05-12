'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 737",
          capacity: 2700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbux 2720",
          capacity: 2600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A330",
          capacity:160, 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
