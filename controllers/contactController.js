// @desc Get all contacts
// @route Get /contacts

const getAllContacts = async (req, res) => {
  res.status(200).send("Contacts Page");
};

module.exports = getAllContacts;
