const express = require('express');

const router = express.Router();

const Client = require('../models/Client');

// Get a Thousand (1000) clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find().limit(1000);
        res.json(clients);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all the Clients
router.get('/all', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.json({ message: err });
    }
});

// Submit a client
router.post('/', async (req, res) => {
    const client = new Client({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    });

    try {
        const savedClient = await client.save();
        res.json(savedClient);

    } catch (err) {
        res.json({ message: err });
    }
});

// Specific client
router.get('/:clientId', async (req, res) => {
    try {
        const client = await Client.findById(req.params.clientId);
        res.json(client);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete client
router.delete('/:clientId', async (req, res) => {
    try {
        const removedClient = await Client.remove({ _id: req.params.clientId });
        res.json(removedClient);
    } catch (err) {
        res.json({ message: err })
    }
});

// Update a client
router.patch('/:clientId', async (req, res) => {
    try {
        const updatedClient = await Client.updateOne({ _id: req.params.clientId },
            {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone: req.body.phone
                }
            });
        res.json(updatedClient);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;