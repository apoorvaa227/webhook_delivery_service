const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  targetUrl: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /https?:\/\/.+/i.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  secret: {
    type: String,
    default: null
  },
  eventTypes: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

subscriptionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Subscription', subscriptionSchema);