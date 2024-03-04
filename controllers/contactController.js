const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route Get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).send("Contacts Page");
});

// @desc Create contacts
// @route Post /contacts
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  console.log(name, email, phone);
  if (!name || !email || !phone) {
    return res.status(400).send("입력 필드를 모두 채워주세요.");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).send(`Create ${name}`);
});

// @desc Get a contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  res.status(200).send(`view ${req.params.id}`);
});

// @desc Put a contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`update ${req.params.id}`);
});

// @desc Delete contacts
// @route Delete /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`delete ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
