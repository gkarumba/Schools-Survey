const profilesController = require('../controllers').profiles;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the profiles API!',
  }));

  app.post('/api/profiles', profilesController.create);
  app.get('/api/profiles', profilesController.list);
};
