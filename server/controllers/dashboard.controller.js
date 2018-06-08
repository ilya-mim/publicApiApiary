const request = require('request');
const config = require('../../config');

module.exports = {
    getUserInfo: (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];

        request({
            method: 'GET',
            url: config.url + 'me',
            headers: { 'Authorization': `Bearer ${token}` }
        }, (error, response, body) => {
            if (error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error
                });
            }

            if (response.statusCode === 200) {
                let jsonBody = JSON.parse(body);
                return res.json(jsonBody);
            }

            if (response.statusCode === 401) {
                return res.status(401).json({
                    message: 'Token Invalid'
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
    },

    getUserApiList: (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];

        request({
            method: 'GET',
            url: config.url + 'me/apis',
            headers: { 'Authorization': `Bearer ${token}` }
        }, (error, response, body) => {
            if (error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error
                });
            }

            if (response.statusCode === 200) {
                let jsonBody = JSON.parse(body);
                return res.json(jsonBody.apis);
            }

            if (response.statusCode === 401) {
                return res.status(401).json({
                    message: 'Token Invalid'
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