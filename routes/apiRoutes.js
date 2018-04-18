const axios = require("axios");
const router = require("express").Router();
const Products = require("../models/products");
// read all
router.get("/", (req, res) => Products.find({}).then(dbProducts => res.json(dbProducts)));
// read one
router.get("/:id", (req, res) => Products.find({_id: req.params.id}).then(dbProducts => res.json(dbProducts)));
router.post("/", (req, res) => Products.create(req.body).then(dbProducts => res.json(dbProducts)));
router.put("/:id", (req, res) => Products.updateOne({ _id: req.params.id }, req.body).then(dbProducts => res.json(dbProducts)));
router.delete("/:id", (req, res) => Products.deleteOne({_id: req.params.id}).then(dbProducts=>res.json(dbProducts)));

module.exports = router;
