const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const date = new Date;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userCreated: {
        type: Object,
        default: {
            month: date.getMonth() + 1,
            day: date.getDate(),
            year: date.getFullYear()
        }
    },

});

module.exports = Item = mongoose.model('item', ItemSchema);