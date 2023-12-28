const Data = require("../models/survey");

module.exports.createSurvey = async (req, res) => {
  try {
    let survey = await Data.findOne({ name: req.body.name });
    if (!survey) {
      let survey = await Data.create(req.body);
      return res
        .status(200)
        .json({ message: "Survey Submitted Successfully", survey: survey });
    } else {
      return res.status(402).json({
        message: "Internal Server Error : Only One Submission Allowed per user",
        survey: survey,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.viewSurvey = async (req, res) => {
  try {
    const surveys = await Data.find();

    if (!surveys || surveys.length === 0) {
      return res.status(404).json({ message: "No Surveys found" });
    }
    return res.status(200).json({ surveys: surveys });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error", err });
  }
};
