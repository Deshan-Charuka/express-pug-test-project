const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("certificate");
});

app.get("/member/:name/ID/:id", (req, res) => {
  const memberDetails = {
    member: req.params.name,
    id: req.params.id,
  };
  res.render("member", memberDetails);
});

app.get("/certificate/:id", (req, res) => {
	const id = req.params.id;
  const certificateDetails = {
    name: "Deshan Charuka",
    marks: "77",
    date: new Date().toJSON().slice(0, 10).split("-").reverse().join("/"),
    issuedPerson: "Aruna Wijerathna",
    subject: "For  Completing React Redux Course ",
  };
  if (id === "C001") {
    res.render("certificate", certificateDetails);
  } else if (id === "C002") {
    res.render("oldCertificate", certificateDetails);
  }
});

app.get("*", (req, res, next) => {
  res.status(200).send("Sorry, page not found");
  next();
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
