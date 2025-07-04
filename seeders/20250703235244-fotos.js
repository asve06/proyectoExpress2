"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 1; i <= 10; i++) {
      await queryInterface.bulkInsert(
        "fotos",
        [
          {
            titulo: `Foto ${i}`,
            descripcion: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Foto número`,
            calificacion: (Math.random() * 10).toFixed(2),
            ruta: `public/images/fotos/foto${i}.jpg`,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fotos", null, {});
  },
};
