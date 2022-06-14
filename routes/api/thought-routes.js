const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/')
  .post(addThought)
  .get(getThoughtById)


// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:id')
  .put(addReaction)
  .delete(removeThought)
  .get(getThoughtById)

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
//TODO update routes by _id
//complete bonus routes
