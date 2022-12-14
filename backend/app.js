require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const apiRoute = require('./Routes/apiRoute');
const authRoute = require('./Routes/authRoute');
const sessionConfig = require('./config/session');

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => res.sendFile(path.resolve('../frontend/build/index.html')));
app.use('/api', apiRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log('Я пытался..., а порт?');
});
