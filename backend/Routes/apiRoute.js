const router = require('express').Router();
const { Ad, User, Profile } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const card = await Ad.findAll({
      include: {
        model: User,
        attributes: ['email'],
        include: { model: Profile, attributes: ['name', 'avatar', 'telephone'] },
      },
      raw: true,
    });
    res.json(card);
  } catch (e) {
    console.log(e.message);
  }
});

router.post('/', async (req, res) => {
  const {
    title, description, img, price,
  } = req.body;
  const result = await Ad.create({
    title,
    description,
    img,
    price,
    category_id: 1,
    user_id: 1,
  });
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const ad = await Ad.findOne({ where: { id } });
  if (req.session.userId === ad.id) {
    const data = await Ad.destroy({ where: { id } });
    res.json(data);
  }
  res.json(0);
});

module.exports = router;
