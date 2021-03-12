const { Router } = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("THIS WORK");
});

module.exports = router;
