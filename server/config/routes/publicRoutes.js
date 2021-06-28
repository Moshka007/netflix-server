const userController = require('../../api/controllers/user');
const movieController = require('../../api/controllers/movie');

module.exports = (app) => {
  app.use('/user', userController);
  app.use('/movie', movieController);
};
