const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@esc Tests users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
