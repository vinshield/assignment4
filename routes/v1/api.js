var express = require("express");
var router = express.Router();
const calculate = require("../functions/calculator");

router.get("/add", function (req, res, next) {
	const { a, b } = req.body;
	const result = calculate(a, b, "add");
	res.status(200).send(result);
});

router.get("/subtract", function (req, res, next) {
	const { a, b } = req.body;
	const result = calculate(a, b, "subtract");
	res.status(200).send(result);
});

router.get("/multiply", function (req, res, next) {
	const { a, b } = req.body;
	const result = calculate(a, b, "multiply");
	res.status(200).send(result);
});

router.get("/divide", function (req, res, next) {
	const { a, b } = req.body;
	const result = calculate(a, b, "divide");
	res.status(200).send(result);
});

module.exports = router;
