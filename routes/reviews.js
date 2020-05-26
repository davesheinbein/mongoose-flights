const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/flights/:id/reviews', reviewsCtrl.create);

// new
router.delete('/reviews/:id', reviewsCtrl.deleteReview);
// ^^^^

module.exports = router;