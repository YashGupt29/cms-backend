const contact = require("../modals/contact");
const Contact = require("../modals/contact");

//fetching all the contacts...
exports.getContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//now i will create contacts here for code understding

exports.createContact = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

//now i will create api for updating contacts

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  console.log("triggered", req.body);
  try {
    const updatedContact = await contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

//delete contact
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  console.log("triggered", id);
  try {
    const deletedContact = await contact.findByIdAndDelete(id);
    res.json(deletedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
