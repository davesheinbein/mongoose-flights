const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    console.log(req.body, 'info on creating the review');
    console.log(req.params.id, 'flight id that we are writing review for');
    // First step is to find the flight we want to add the review to
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight, 'this is the flight doc')
        flight.reviews.push(req.body); // Add the review to the reviews array
        console.log(flight, 'this is the flight doc')
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}