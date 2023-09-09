const auth = require("../middleware/verifyToken");

module.exports = (app) => {
  const userController = require("../controllers/user");
  app.get("/user", auth, userController.getUser);
  app.post("/user/login", userController.login);
  app.post("/user/register", userController.register);
};
