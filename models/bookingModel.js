const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
});

const bookingModel = mongoose.model("Booking", bookingSchema);

module.exports = bookingModel;
