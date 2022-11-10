const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/appController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:thoughtId/tags
router.route('/:thoughtId/tags').post(addReaction);

// /api/thought/:thoughtId/tags/:tagId
router.route('/:thoughtId/tags/:tagId').delete(removeReaction);

module.exports = router;
