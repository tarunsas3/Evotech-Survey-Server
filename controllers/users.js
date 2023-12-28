const Admin = require("../models/user");

// Registration Disabled to prevent unwanted access in lieu of accidental data leaks.

// module.exports.register = async (req, res) => {
//   try {
//     let user = await Admin.findOne({ username: req.body.username });
//     if (!user) {
//       await Admin.create(req.body);
//       return res.status(200).json({
//         message: "Registration successful",
//       });
//     } else {
//       return res.status(402).json({
//         message: "Internal Server Error : Username already exists",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// };

module.exports.login = async (req, res) => {
  try {
    let user = await Admin.findOne({ username: req.body.username });
    if (!user) {
      return res.status(402).json({
        message: "Bad Credentials",
        auth: false,
      });
    }
    let isValid = await user.isValidPassword(req.body.password);
    if (!isValid) {
      return res.status(402).json({
        message: "Bad Credentials",
        auth: false,
      });
    }

    return res.status(200).json({
      message: "Authentication successful",
      auth: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
