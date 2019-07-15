var express = require('express')
let router = express.Router()

var db = require('../dbconfig/db-connect')

router.get('/', function(req, res) {
    var collection = db.get().collection('products')

    collection.find().toArray(function(err, docs) {
        res.render('producs', {comments: docs})
    })
})
