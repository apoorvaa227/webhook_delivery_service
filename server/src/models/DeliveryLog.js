const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  attemptNumber: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['success', 'failed'],
    required: true
  },
  responseCode: Number,
  error: String
});

const deliveryLogSchema = new mongoose.Schema({
  subscriptionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscription',
    required: true
  },
  payload: {
    type: Object,
    required: true
  },
  attempts: [attemptSchema],
  status: {
    type: String,
    enum: ['pending', 'delivered', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '72h' // Auto-delete after 72 hours
  }
});

module.exports = mongoose.model('DeliveryLog', deliveryLogSchema);