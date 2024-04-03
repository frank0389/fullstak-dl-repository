const express = require('express');
const  healthController = require('../controller/health')

const router = express.Router();

router.get('/health', async (req, res) => {
    await healthController.get(req, res);
});


  module.exports = router;