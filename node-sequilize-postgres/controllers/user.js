const db = require("../db/models");
const User = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginValidation,
  registerValidation,
} = require("../helpers/validations");

const saltRounds = 10;

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const err = registerValidation.validate(req.body);
  if (err.error)
    return res.status(400).send({
      code: 400,
      message: err?.error?.details[0]?.message,
      error: err,
    });

  await User.findOne({
    where: {
      email,
    },
  })
    .then((response) => {
      const emailExist = response?.dataValues;
      if (!emailExist) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return User.create({
          name,
          email,
          password: hashedPassword,
        });
      }

      res.status(400).send({ code: 400, message: "Email already exist" });
    })
    .then((insertionResponse) => {
      if (insertionResponse?.dataValues)
        res.status(200).send({
          code: 200,
          messsage: "User registered successfully",
          data: insertionResponse?.dataValues?.id,
        });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Error",
        data: err,
      });
    });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const err = loginValidation.validate(req.body);
  if (err.error)
    res.status(400).send({
      code: 400,
      message: err?.error?.details[0]?.message,
      error: err,
    });

  await User.findOne({
    where: {
      email,
    },
  })
    .then((response) => {
      if (response) {
        const user = response?.dataValues;

        const validatePassword = bcrypt.compareSync(password, user?.password);
        if (!validatePassword)
          res.status(400).send({ code: 500, message: "Invalid Password" });

        const token = jwt.sign({ id: user?.id }, process.env.JWT_SECRET);
        res
          .header("auth-token", token)
          .send({ code: 200, message: "Success", data: token });
      }

      res.status(500).send({
        code: 500,
        message: "Email not found",
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Error",
        data: err,
      });
    });
};

exports.getUser = async (req, res) => {
  console.log("inside here");
  await User.findByPk(req.user?.id)
    .then((user) => {
      res.status(200).send({
        code: 200,
        message: "OK",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Error",
        data: err,
      });
    });
};
