const userModel = require("../models/user.model");

/**
 * - Controller for user registration
 * - POST /api/auth/register
 */

function userRegisterController(req, res) {
  const { email, name, password } = req.body;
}

module.exports = {
  userRegisterController,
};
