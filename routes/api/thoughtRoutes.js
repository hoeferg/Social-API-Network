const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:thoughtId/tags
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thought/:thoughtId/tags/:tagId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
