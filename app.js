const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(express.static('files'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor 3000 corriendo correctamente');
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});