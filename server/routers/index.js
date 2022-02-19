const router = require("express").Router();
const controllers = require("../controllers/index.js");

router.get("/title", controllers.getTitle);

module.exports = router;