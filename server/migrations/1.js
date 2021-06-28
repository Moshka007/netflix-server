const Movie = require("../api/models/Movie");

const data = require("../movie-data/movies");

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Movie.bulkCreate(data);
  },
};
