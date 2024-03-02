const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
  res.send("Get for users");
});

//show
router.get("/:id", (req, res) => {
  res.send("Get for user id");
});

//post
router.get("/", (req, res) => {
  res.send("post for users");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
