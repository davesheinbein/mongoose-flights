const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {flights});
  });
}

function create(req, res) {
  Flight.create(req.body);
    res.redirect('/flights');
}

function newFlight(req, res) {
  res.render('flights/new');
}