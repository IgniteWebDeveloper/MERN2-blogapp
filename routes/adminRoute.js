var router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");

// POST /admin/register
router.post("/register", (req, res, next) => {
  let { email, name, password } = req.body;
  password = bcrypt.hashSync(password, 10);

  User.create({ email, name, password })
    .then(() => res.redirect("/login"))
    .catch((err) => res.send(err));
});

// POST /admin/login
router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.send("Please provide email and password");
  }

  const usercomp = await User.findOne({ email }).select("+password");

  const user = await User.findOne({ email });

  if (!user) {
    res.send("User not found");
  }

  const isPasswordMatch = await bcrypt.compareSync(password, usercomp.password);

  if (!isPasswordMatch) {
    res.send("Incorrect Email or Password!");
  }

  res.redirect("/profile");
});

module.exports = router;
