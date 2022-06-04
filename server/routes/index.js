const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_, res) => {
  res.render('index', {
    title: 'SAV',
    author: 'Oaxacarlos',
  });
});

module.exports = router;
