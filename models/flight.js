const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

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
  }
});
  

module.exports = mongoose.model('Flight', flightSchema);
