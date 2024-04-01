const itemsRoute = require('../src/items/routes');

module.exports = (app) => {
  app.use('/api/items', itemsRoute);

  app.use('*', (req, res) => {
    res.send('Not found');
  });
};
