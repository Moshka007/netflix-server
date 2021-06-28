const router = require('express').Router();

const movie = require('./MovieController')();

router.get('/', movie.getAll);

router.get('/:id', movie.getOne);

router.post('/', movie.createMovie);


module.exports = router;
