const Flight = require('../models/flight');

const Ticket = require('../models/ticket'); // make sure this has been require

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  deleteFlight
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
      Ticket.find({flight : flight._id}, function(err, tickets) {
        res.render('flights/show', { title: 'Flight Details', flight, tickets});
      });
    });
}

// To delete
function deleteFlight(req, res) {
    Flight.deleteOne({'_id' : req.params.id}, function(err, deleteF){
        res.redirect('/flights');
    });
}
