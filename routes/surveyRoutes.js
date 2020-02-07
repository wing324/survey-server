const requireLogin = require('../middlewares/requireLogin');
consy requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/survey', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
  });
};
