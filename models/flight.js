const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
});


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
        default: 'n/a'
    }
});


const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
      default: 'n/a'
  },
  airport: {
      type: String, 
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
  },
  flightNo: {
      type: Number,
      required: Number,
      default: Number,
      min: 10,
      max: 9999
  },
  departs: {
      type: Date,
      default: function() {
        return new Date().getFullYear();
      }, 
      min: 2020
  },
  reviews: {
      type: [reviewSchema]
  },
  destinations: {
      type: [destinationSchema]
  },
});
  
module.exports = mongoose.model('Flights', flightSchema);
