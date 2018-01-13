const express = require('express');
const app = express();
const port = 5000;
const users = require('./users');

app.get('/api/customers', (req, res) => {
  const customers = users; // Hardcoded mock data from https://www.mockaroo.com/

  res.json(customers);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})