const validator = require('validator');
const request = require('request');
const config = require('../../config');

function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
}

module.exports = {
    login: (req, res, next) => {
        const validationResult = validateLoginForm(req.body);
        if (!validationResult.success) {
            return res.status(400).json({
                message: validationResult.message,
                errors: validationResult.errors
            });
        }

        const authData = new Buffer(`${req.body.email}:${req.body.password}`).toString('base64');

        request({
            method: 'POST',
            url: config.url + 'authorization',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authData}`
            },
            body: "tokenDescription=test&tokenRegenerate=true"
        }, (error, response, body) => {
            if (error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error
                });
            }

            if (response.statusCode === 201) {
                let jsonBody = JSON.parse(body);
                return res.json({
                    token: jsonBody.token
                });
            }

            if (response.statusCode === 401) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            if (response.statusCode === 403) {
                return res.status(403).json({
                    message: 'Transport Layer Security Required'
                });
            }

            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
    }
}