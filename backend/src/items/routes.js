const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getItems(res, req);
});

router.get('/:id', (req, res) => {
  controller.getItem(res, req);
});

module.exports = router;
