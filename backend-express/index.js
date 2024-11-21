const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server can started on http://localhost:${port}`);
});
