const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()

promoRouter.use(bodyParser.json())

promoRouter.get('/promotions/:promotionId', (req, res, next) => {
    res.end('Will send all detail of the promotion: ' + req.params.promotionId + ' to you !')
})

promoRouter.post('/promotions/:promotionId', (req, res, next) => {
    res.statusCode = 403
    res.end('POST opereation not supported on /promotions/' + req.params.promotionId)
})

promoRouter.put('/promotions/:promotionId', (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n')
    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description)
})
promoRouter.delete('/promotions/:promotionId', (req, res, next) => {
    res.end('Deleteing promotion: ' + req.params.promotionId)
});

promoRouter.get('/promotions', (req, res, next) => {
    res.end('Will send all the promotions to you!');
});

promoRouter.post('/promotions', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

promoRouter.put('/promotions', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
});

promoRouter.delete('/promotions', (req, res, next) => {
    res.end('Deleting all promotions');
});

module.exports = promoRouter