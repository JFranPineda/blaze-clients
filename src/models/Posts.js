const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Posts', PostSchema);