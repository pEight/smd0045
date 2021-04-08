const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.json(`Welcome to my server at ${new Date().toLocaleString('pt-BR')}`);
});

app.get('/users', (req, res) => {
  fs.readFile('./users.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json(err.message);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  })
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});