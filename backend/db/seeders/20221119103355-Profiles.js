/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Profiles', [
      {
        user_id: 1,
        avatar: 'https://static.wikia.nocookie.net/rpg/images/d/d9/Wallpaper_Giant_Hill.jpg/revision/latest/scale-to-width-down/250?cb=20160519144020&path-prefix=ru',
        name: 'Фёдор',
        telephone: '88007553535',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        avatar: 'https://audiobaza.com/content/photo/full/201702280121121.jpg',
        name: 'Равшан',
        telephone: '88008800800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        avatar: 'https://basetop.ru/wp-content/uploads/2017/11/t1wptn4r.jpg',
        name: 'Евдокия',
        telephone: '88005556565',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Profiles');
  },
};
