const express = require("express");
const Router = express.Router();

const Admin = require("../controllers/users");
const Data = require("../controllers/surveys");

Router.post("/users/login", Admin.login);

// Registration Disabled to prevent unwanted access in lieu of accidental data leaks.
// Router.post("/users/register", Admin.register);

Router.post("/surveys/create", Data.createSurvey);
Router.get("/surveys/view", Data.viewSurvey);

module.exports = Router;
