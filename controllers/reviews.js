const Flight = require('../models/flight');

module.exports = {
    create,
    deleteReview
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.reviews.push(req.body); // Add the review to the reviews array
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}


// neww
function deleteReview(req, res) {
    Flight.findOne({'reviews._id': req.params.id}, function(err, flight) {
        // The embedding lesson has this in the further study section
        // Find the review subdoc
        const review = flight.reviews.id(req.params.id);
        // Remove the review subdoc from the array
        review.remove();
        // Save the flight doc
        flight.save(function(err) {
          // Redirect back to show page of flight
        res.redirect(`/flights/${flight._id}`);
        });
    });
}
// ^^^^^^
