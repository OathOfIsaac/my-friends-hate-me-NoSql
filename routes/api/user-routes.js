const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

//reminder
// // router.get("/", (req, res) {
//     User.find({})
//     .populate({
//       path: 'thoughts',
//       select: '-__v'
//     })
//     .select('-__v')
//     .sort({ _id: -1 })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(400);
//     });
// }, )
// router.post("/", createUser )

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
