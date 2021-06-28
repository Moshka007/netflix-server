const router = require('express').Router();

const user = require('./UserController')();

router.get('/', user.getAll);

module.exports = router;
