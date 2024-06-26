const express = require("express");
const { getUserById, updateUserById, deleteUserById, getAllUsers, addNewUser } = require("../controllers/user");
const router = express.Router();

router
    .route("/")
    .get(getAllUsers)
    .post(addNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
