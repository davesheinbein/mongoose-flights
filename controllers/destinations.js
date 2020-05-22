const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.reviews.push(req.body); // Add the review to the reviews array
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}