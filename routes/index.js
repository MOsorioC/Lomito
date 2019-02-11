const express = require('express');
const router  = express.Router();
const estados = require('../models/estados')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('Login/signup_step_2', {estados});
});

module.exports = router;
