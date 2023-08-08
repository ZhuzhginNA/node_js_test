const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

module.exports = model('Contacts', contactSchema);