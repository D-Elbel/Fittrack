const register = function (req, res) {
  res.render("register", { title: "Registration" });
};

const login = function (req, res) {
  res.render("login", { title: "Login"});
};

module.exports = {
  register,
  login
};
