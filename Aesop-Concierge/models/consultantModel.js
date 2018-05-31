const mongoose = require('mongoose');

let ConsultantSchema = new mongoose.Schema({
    name: String,
    City: String
});

module.exports = mongoose.model('Consultant', ConsultantSchema);