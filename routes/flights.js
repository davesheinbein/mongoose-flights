var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

// To delete
router.delete('/:id', flightsCtrl.deleteFlight);

router.post('/', flightsCtrl.create);

module.exports = router;
