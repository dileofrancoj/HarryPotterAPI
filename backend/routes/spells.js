const { Router } = require("express");
const router = new Router();

const { all, single } = require("./../controllers/spells");

router.get("/", all);
router.get("/single/:id", single);

module.exports = router;