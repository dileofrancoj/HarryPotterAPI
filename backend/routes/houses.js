const { Router } = require("express");
const router = new Router(); // Detectar verbos http a un endpoint

const { all, single, create } = require("./../controllers/houses");

router.get("/", all);
router.get("/single/:id", single);
router.post("/", create);

module.exports = router;
