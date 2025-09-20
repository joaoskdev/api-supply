const express = require("express");
const authMiddleware = require("./authMiddleware");

const router = express.Router();

router.get("/private", authMiddleware, (req, res) => {
  res.json({ message: "Acesso autorizado!", userId: req.userId });
});

module.exports = router;
