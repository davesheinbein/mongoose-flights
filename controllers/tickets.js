const Ticket = require('../models/ticket');
// new
const Flight = require('../models/flight'); // make sure this has been require

module.exports = {
  new: newTicket,
  create,
  addToFlight // new
};

function create(req, res) {
    const newTicket = {
        ...req.body,
        flight: req.params.id
    }
  Ticket.create(newTicket, function (err, tickets) {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      tickets,
      flightId: req.params.id
    });
  })
}

// new
function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) { // make sure Movie has been require up top
        Ticket.findByIdAndUpdate(req.body.ticketId, {flight: flight}, function(ticket) {
            res.redirect(`/flights/${req.params.id}`)
        })
    });
}
// ^^^^