/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Categorys', [
      {
        title: 'Авто',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Недвижимость',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Животные',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Работа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categorys');
  },
};
