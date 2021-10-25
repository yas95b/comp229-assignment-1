let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    Name: String,
    Number: String,
    Email: String
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', businessModel);