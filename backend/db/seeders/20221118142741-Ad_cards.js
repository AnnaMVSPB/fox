/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Ads', [
      {
        title: 'Продаю машину',
        description: 'продаю машину в хорошем состоянии,не битая не крашенная',
        price: 50000,
        img: 'https://autogear.ru/misc/i/gallery/81924/2510019.jpg',
        category_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Продаю дом',
        description: 'строил сам , отрываю от сердца',
        price: 600000,
        img: 'https://pro-dachnikov.com/uploads/posts/2021-10/1633312572_26-p-foto-strashnikh-domov-foto-28.jpg',
        category_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'отдам кота',
        description: 'это ско**на все обоссал',
        price: 0,
        img: 'https://krasivosti.pro/uploads/posts/2021-03/1616453260_23-p-strannii-kot-foto-koshka-24.jpg',
        category_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'мастер мейкапа',
        description: 'записывайтесь на мейк,свадебный,повседневный,на праздник',
        price: 2000,
        img: 'https://krot.info/uploads/posts/2022-03/1647166462_12-krot-info-p-smeshnoi-meikap-smeshnie-foto-14.jpg',
        category_id: 4,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ads');
  },
};
