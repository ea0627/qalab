const { loginUser, getUserById } = require("../services/auth.service");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const result = await loginUser({
      email,
      password,
    });

    res.json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message || "Authentication failed.",
    });
  }
}

async function getMe(req, res) {
  try {
    const user = await getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving authenticated user.",
      error: error.message,
    });
  }
}

module.exports = {
  login,
  getMe,
};