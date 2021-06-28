const { Op } = require("sequelize");
const Movie = require('../../models/Movie');
// const authService = require('../../services/auth.service');
// const bcryptService = require('../../services/bcrypt.service');

const MovieController = () => {
  const getAll = async (req, res) => {
    const {titleQ, offset, limit, orderBy, genre} = req.query;
    let movies;
    try {
        if(genre) {
          movies = await Movie.findAndCountAll({
            where: {
              title: {
                [Op.startsWith]: titleQ,
              },
              genres: {[Op.contains]:[genre]}
            },
            order: [[orderBy, 'DESC']],
            offset,
            limit,
    
          });
        } else {
          movies = await Movie.findAndCountAll({
            where: {
              title: {
                [Op.startsWith]: titleQ,
              }
            },
            order: [[orderBy, 'DESC']],
            offset,
            limit,
    
          });
        }
        
      return res.status(200).json({ movies });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getOne = async (req, res) => {
    const {id} = req.params;
    try {
      const movie = await Movie.findOne({
        where: {
          id,
        },
      });
      return res.status(200).json({ movie });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const createMovie = async (req, res) => {
    const {title, release_date, poster_path, genres, overview, runtime} = req.body;
    
      if(title && release_date && poster_path && genres && overview && runtime) {
        const genresMassive = genres.split(' ');
        try {
            const movie = await Movie.create({
              title, 
              release_date, 
              poster_path, 
              genres: genresMassive, 
              overview, 
              runtime
            });

            return res.status(200).json({movie});
        } catch(e) {
          console.log(e);
          return res.status(500).json({ message: 'Internal server error' });
        }
      } else {
        return res.status(400).json({message: 'Incorrect data entered'});
        throw new Error('Incorrect data entered')
      }
  }


  return {
    getAll,
    getOne,
    createMovie,
  };
};

module.exports = MovieController;
