const express = require('express');
const router = express.Router();
const {
  createSubscription,
  getAllSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription
} = require('../controllers/subscriptionController');

router.post('/', createSubscription);
router.get('/', getAllSubscriptions);
router.get('/:id', getSubscription);
router.put('/:id', updateSubscription);
router.delete('/:id', deleteSubscription);

module.exports = router;