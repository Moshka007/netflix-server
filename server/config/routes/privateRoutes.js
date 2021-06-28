const userController = require('../../api/controllers/user');

module.exports = (app) => {
  app.use('/user', userController);
};
