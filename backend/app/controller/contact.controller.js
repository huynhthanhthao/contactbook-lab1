const createContact = function (req, res, next) {
    res.send("Create contact successfully!");
};

const deleteAllContacts = function (req, res, next) {
    res.send("Delete all contact successfully!");
};

const deleteContactById = function (req, res, next) {
    res.send("Delete contact by id successfully!");
};

const getAllContacts = function (req, res, next) {
    res.send("Get all contact successfully!");
};

const getAllFavorites = function (req, res, next) {
    res.send("Get all contact favorite successfully!");
};

const getContactById = function (req, res, next) {
    res.send("Get contact by Id successfully!");
};

const getContactsByName = function (req, res, next) {
    res.send("Get contact by name successfully!!");
};

const updateContact = function (req, res, next) {
    res.send("Update contact successfully!!");
};

export {
    createContact,
    deleteAllContacts,
    deleteContactById,
    getAllContacts,
    getAllFavorites,
    getContactById,
    updateContact,
    getContactsByName,
};
