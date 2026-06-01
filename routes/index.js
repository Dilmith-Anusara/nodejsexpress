const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Contoso!',   
  });
});

router.get('/health', function(req, res) {
  res.json({ status: 'OK', uptime: process.uptime() });
});

module.exports = router;