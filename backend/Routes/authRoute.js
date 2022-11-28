const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Profile } = require('../db/models');

router.post('/registration', async (req, res) => {
  const { password, email } = req.body;
  if (password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'такой чел уже есть' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ password: hash, email });
      req.session.userId = newUser.id;
      res.status(200).json({ message: 'все ок', user: newUser.email });
    }
  }
});

router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  if (password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.userId = user.id;
        res.json({ message: 'успех', user });
      }
    } else {
      res.json({ message: 'Ваш login или password указаны не верно' });
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

router.post('/profile', async (req, res) => {
  const { avatar, name, telephone } = req.body;
  const id = req.session.userId;
  if (avatar && avatar && avatar) {
    const user = await Profile.findOne({ where: { id } });
    if (user) {
      res.json({ message: 'профиль у такого пользователя уже есть' });
    } else {
      const newProfile = await Profile.create({
        avatar, name, telephone, user_id: id,
      });
      res.status(200).json({ message: 'все ок', newProfile });
    }
  }
});

module.exports = router;
