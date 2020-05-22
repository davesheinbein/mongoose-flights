const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index,
  show
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

// Test 
// function create(req, res) {
//   Flight.create(req.body);
//   flight.save(function(err) {
//     if (err) return res.render('flights');
//     res.redirect('/flights');;
// }

// Ryan shared but doesn't work how i want it to
// function create(req,res) {
//     req.body.flightNo = req.body.flightNo.replace(/\s*,\s*/g);
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//         if (err) return res.render('flights');
//         res.redirect('/flights');
//     });
// };

function newFlight(req, res) {
  res.render('flights/new');
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Details', flight });
    });
  }