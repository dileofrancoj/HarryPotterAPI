const { Router } = require("express");
const router = new Router(); // Detectar verbos http a un endpoint

const { all, single } = require("./../controllers/houses");

router.get("/", all);
router.get("/single/:id", single);

module.exports = router;
