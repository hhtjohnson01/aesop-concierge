let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/', function (req, res, next) {

    let options = { method: 'GET',
        url: 'https://opentable.herokuapp.com/api/restaurants',
        qs:
        {   city: 'Chicago',
            state: 'IL',
            per_page: 15,
            page: pageCounter
        },
        headers:
        { 'content-type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);

        console.log(body);
    });

});

/*
//Calls the mma API to get fighter stats and details, parsing this data and sending it to the front end when it's called for.
router.get('/:name', function (req, res, next) {
    let fighterName = req.params.name;
    mma.fighter(fighterName, function (data) {
        let response = res.json(data)
    });
});
router.get('/db/:_id', function (req, res, next) {
    people.find({_id: req.param('_id')}, function (err, results) {
        res.json(results);
    });
});

Test ID = 7267
*/

router.get('/search/:name', function (req, res, next) {
    let searchName = req.param('name');
    console.log(req.param('name'));

    let options = { method: 'GET',
        url: 'https://opentable.herokuapp.com/api/restaurants/:name',
        qs:
            {
                name: searchName
            },
        headers:
            { 'content-type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);

        console.log(body);
    });

});

module.exports = router;