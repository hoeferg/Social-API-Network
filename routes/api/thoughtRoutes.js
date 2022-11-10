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

// /api/applications
router.route('/').get(getThought).post(createThought);

// /api/applications/:applicationId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughtId/tags').post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtId/tags/:tagId').delete(removeReaction);

module.exports = router;
