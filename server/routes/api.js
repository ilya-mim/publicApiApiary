const express = require('express');
const dashboardController = require('../controllers/dashboard.controller');

const router = new express.Router();

router
    .route('/userInfo')
    .get(dashboardController.getUserInfo);

router
    .route('/userApiList')
    .get(dashboardController.getUserApiList);

module.exports = router;