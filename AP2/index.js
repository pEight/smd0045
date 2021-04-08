const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.redirect('/public');
});

app.get('/sum', (req, res) => {
  const number = parseInt(req.query.value, 10);

  if (number) {
    res.status(200).json(number + 2);
  } else {
    res.status(500).json('Value is not valid!');
  }
});

app.get('/me', (req, res) => {
  res.json('Phillipe Queiroz');
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});