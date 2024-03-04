const express = require("express");
const router = express.Router();
const getAllContacts = require("../controllers/contactController");

router
  .route("/")
  .get(getAllContacts)
  .post((req, res) => {
    console.log(req.body);
    const { name, number, ccc } = req.body;
    console.log(name, number, ccc);
    if (!name || !number || !ccc) {
      return res.status(400).send("입력 필드를 모두 채워주세요.");
    }
    res.status(201).send(`Create ${name}`);
  });

router
  .route("/:id")
  .get((req, res) => {
    res.status(200).send(`view ${req.params.id}`);
  })
  .put((req, res) => {
    res.status(200).send(`update ${req.params.id}`);
  })
  .delete((req, res) => {
    res.status(200).send(`delete ${req.params.id}`);
  });

module.exports = router;
