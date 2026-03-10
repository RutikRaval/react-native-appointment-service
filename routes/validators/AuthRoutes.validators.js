const { body } = require("express-validator");

const loginValidation = [

  body("email")
    .isEmail()
    .withMessage("Invalid Email address format")
    .normalizeEmail(), // Sanitizes the email

  body("password")
    .notEmpty()
    .withMessage("Password is required")
];

const registerValidation = [
  body("username").notEmpty().withMessage("username is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .trim()
    .toLowerCase(),

  body("password")
    .isLength({ min: 8, max: 100 })
    .withMessage("Password must be at least 8 characters"),
];
module.exports = {
  loginValidation,
  registerValidation,
};
