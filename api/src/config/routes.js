const express = require('express');
const  healthController = require('../controller/health')
const  userController = require('../controller/user-controller')
const router = express.Router();

router.get('/health', async (req, res) => {
    await healthController.get(req, res);
});

router.post('/users', async (req, res) => {
    await userController.createUser(req, res);
});

router.put('/users/:id', async (req, res) => {
    await userController.updateUser(req, res);
});

router.delete('/users/:id', async (req, res) => {
    await userController.deleteUser(req, res);
});

router.get('/users', async (req, res) => {
    await userController.getUsers(req, res);
});

router.get('/users/:id', async (req, res) => {
    await userController.getUser(req, res);
});

router.get('/search', async (req, res) => {
    await userController.searchUser(req, res);
});

  module.exports = router;