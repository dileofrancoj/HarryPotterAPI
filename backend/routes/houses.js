const { Router } = require("express");
const router = new Router(); // Detectar verbos http a un endpoint

const { all, single, create } = require("./../controllers/houses");

router.get("/all", all);
router.post("/", create);
router.get("/single/:id", single);

module.exports = router;
