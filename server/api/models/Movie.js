const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'movies';

const Movie = sequelize.define('Movie', {
  title: {
    type: Sequelize.STRING,
  },
  tagline: {
    type: Sequelize.STRING,
  },
  vote_average: {
    type: Sequelize.DOUBLE,
  },
  vote_count: {
    type: Sequelize.INTEGER,
  },
  release_date: {
    type: Sequelize.DATE,
  },
  poster_path: {
    type: Sequelize.STRING,
  },
  overview: {
    type: Sequelize.STRING(1500),
  },
  budget: {
    type: Sequelize.BIGINT,
  },
  revenue: {
    type: Sequelize.BIGINT,
  },
  genres: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  runtime: {
    type: Sequelize.INTEGER,
  },
}, { tableName });

// eslint-disable-next-line
Movie.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = Movie;
