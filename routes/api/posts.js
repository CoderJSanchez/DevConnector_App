const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@esc Tests posts route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

module.exports = router;
