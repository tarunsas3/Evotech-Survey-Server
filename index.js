const express = require("express");
const cors = require("cors");
const PORT = 3000;

require("./config/mongoose").connect();

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use("/", require("./routes"));

app.get("/", (req, res) => {
  res.send(
    '<div style = "font-family: cascadia code;display: flex; flex-direction:column; gap:2rem;align-items:center; justify-content:center; color:black; padding: 30px"><h1 style="font-size: 3rem">  MERN SURVEY API </h1><a href="#" style = "background: orangered; padding: 10px 20px; color:white; text-decoration:none; font-size:1rem; cursor:pointer; border-radius:10px" href="/api-docs"><p style="font-size: 2rem; margin:0">Documentation 📄</p></div>'
  );
});

app.listen(PORT, () => {
  console.log(`Successfully Listening on Port ${PORT}`);
});
