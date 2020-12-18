const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: '-'
    },
    phone: {
        type: String,
        default: '-'
    }
});

module.exports = mongoose.model('Client', ClientSchema);