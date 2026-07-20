const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello! GitHub Actions is working!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
