/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'test@test.ru',
        password: await bcrypt.hash('123456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'test2@test.ru',
        password: await bcrypt.hash('123456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'test3@test.ru',
        password: await bcrypt.hash('123456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
