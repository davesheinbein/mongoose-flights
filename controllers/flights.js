const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  deleteFlight
//   deleteReview 
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

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Details', flight });
    });
}

// To delete
function deleteFlight(req, res) {
    // The model is responsible for deleting the todo
    Flight.deleteOne({'_id' : req.params.id}, function(err, deleteF){
        res.redirect('/flights');
    });
}
