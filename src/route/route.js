const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
const mid = require("../middleware/auth")

router.post("/register", userController.createUser)
router.post("/login", userController.userLogin)

router.get("/user/:userId/profile",mid.Authentication,mid.Authorization, userController.getUser)

router.put("/user/:userId/profile", mid.Authentication,mid.Authorization,userController.updateUser)

module.exports = router