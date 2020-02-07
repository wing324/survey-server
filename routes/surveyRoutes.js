const requireLogin = require('../middlewares/requireLogin');
consy requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.get('/api/survey', requireLogin, requireCredits, (req, res) => {

  });
};
