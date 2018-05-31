const mongoose = require('mongoose');

let PartnerSchema = new mongoose.Schema({
    name: String,
    Address: String,
    Neighborhood: String,
    Phone: String
});

module.exports = mongoose.model('partner', PartnerSchema);