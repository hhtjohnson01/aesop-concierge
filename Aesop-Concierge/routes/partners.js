const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
let db = mongoose.connection;
mongoose.connect('mongodb://localhost/Aesop');
let partner = require('../models/partnerModel.js');

// POST Create a new partner
router.post('/db', function (req, res, next) {
    let aPartner = new partner(
        req.body
    );
    aPartner.save(function (err) {
        if (err) {
            res.send(err);
        }
        //send back the new partner
        else {
            res.send(aPartner)
        }
    })
});

//GET Fetch all partners
router.get('/db', function (req, res, next) {
    partner.find({}, function (err, results) {
        res.json(results);
    })

});


//PUT Update the specified partner's information
router.put('/db/:name', function (req, res, next) {
    partner.findByIdAndUpdate(req.params._name, req.body, {'upsert': 'true'}, function (err, result) {
        if (err) {
            res.json({message: 'Error updating'});
        }
        else {
            console.log('updated');
            res.json({message: 'success'})
        }
    })

});

//DELETE Delete the specified partner
router.delete('/db/:name', function (req, res, next) {
    partner.findByIdAndRemove(req.params._name, function (err, result) {
        if (err) {
            res.json({message: 'Error deleting'});
        }
        else {
            res.json({message: 'success'});
        }
    })
});

module.exports = router;
