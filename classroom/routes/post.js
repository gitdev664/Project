const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
  res.send("Get for posts");
});

//show
router.get("/:id", (req, res) => {
  res.send("Get for posts id");
});

//post
router.get("/", (req, res) => {
  res.send("post for posts");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE for posts id");
});

module.exports = router;
