const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const HandleBadRequest = require("../middlewares/HandleBadRequestMiddleware");
const AuthRoutesValidations = require("./validators/AuthRoutes.validators");
const protect = require("../middlewares/AuthMiddleware");

router.post(
  "/register",
  AuthRoutesValidations.registerValidation,
  HandleBadRequest,
  AuthController.register
);

router.post(
  "/login",
  AuthRoutesValidations.loginValidation,
  HandleBadRequest,
  AuthController.login
);

router.get("/me", protect, AuthController.getCurrentUser);
module.exports = router;
