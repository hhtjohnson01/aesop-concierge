const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Aesop');
let consultant = require('../models/consultantModel.js');

// POST Create a new consultant
router.post('/db', function(req, res, next) {
  let aConsultant = new consultant(
      req.body
  );
  aConsultant.save(function(err) {
    if (err) {res.send(err);}
        //send back the new consultant
    else {res.send (aConsultant)}
  })
});

//GET Fetch all consultants
router.get('/db', function (req, res, next) {
    consultant.find({}, function (err, results) {
    res.json(results);
  })

});

//PUT Update the specified consultant's information
router.put('/db/:_name', function (req, res, next) {
    consultant.findByIdAndUpdate(req.params._name, req.body, {'upsert': 'true'}, function (err, result) {
    if (err) {res.json({message: 'Error updating'});}
    else {console.log('updated'); res.json({message: 'success'})}
  })

});


//DELETE Delete the specified consultant
router.delete('/db/:_name', function (req, res, next) {
    consultant.findByIdAndRemove(req.params._name, function (err, result) {
    if(err) {res.json({message: 'Error deleting'});}
    else {res.json({message: 'success'});}
  })
});

module.exports = router;
