const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

// @route GET api/users
// @desc Gets all users 
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(item => res.json(item));

});

// @route POST api/users
// @desc Creates new user 
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/users/:id
// @desc Delete a user
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;