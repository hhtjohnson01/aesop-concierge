const mongoose = require('mongoose');

let StoreSchema = new mongoose.Schema({
    name: String,
    City: String,
    State: String,
    email: String
});

module.exports = mongoose.model('Store', StoreSchema);