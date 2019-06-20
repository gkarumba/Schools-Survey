const profilesController = require('../controllers').profiles;
const safety_and_securitiesController = require('../controllers').safety_and_securities;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the profiles API!',
  }));

  app.post('/api/profiles', profilesController.create);
  app.get('/api/profiles', profilesController.list);
  app.post('/api/safety_and_securities/:profileId', safety_and_securitiesController.create);
  app.get('/api/safety_and_securities', safety_and_securitiesController.list);
  app.get('/api/safety_and_securities/:profileId', safety_and_securitiesController.retrieve);
  app.put('/api/profiles/:profileId/safety_and_securities', safety_and_securitiesController.update);
  app.delete('/api/profiles/safety_and_securities/:safety_and_securityId', safety_and_securitiesController.destroy);
  app.get('/api/profiles/:profileId', profilesController.retrieve);
  app.put('/api/profiles/:profileId', profilesController.update);
  app.delete('/api/profiles/:profileId', profilesController.destroy);
};
