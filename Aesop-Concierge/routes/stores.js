const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Aesop');
let store = require('../models/storeModel.js');

// POST Create a new consultant
router.post('/db', function(req, res, next) {
    let aStore = new store(
        req.body
    );
    aStore.save(function(err) {
        if (err) {res.send(err);}
        //send back the new consultant
        else {res.send (aStore)}
    })
});

//GET Fetch all consultants
router.get('/db', function (req, res, next) {
    store.find({}, function (err, results) {
        res.json(results);
    })

});

//PUT Update the specified consultant's information
router.put('/db/:_name', function (req, res, next) {
    store.findByIdAndUpdate(req.params._name, req.body, {'upsert': 'true'}, function (err, result) {
        if (err) {res.json({message: 'Error updating'});}
        else {console.log('updated'); res.json({message: 'success'})}
    })

});


//DELETE Delete the specified consultant
router.delete('/db/:_name', function (req, res, next) {
    store.findByIdAndRemove(req.params._name, function (err, result) {
        if(err) {res.json({message: 'Error deleting'});}
        else {res.json({message: 'success'});}
    })
});

module.exports = router;
