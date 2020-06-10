const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
});

dishRouter.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

dishRouter.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

dishRouter.delete('/dishes', (req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send all detail of the dish: ' + req.params.dishId + ' to you !')
})

dishRouter.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403
    res.end('POST opereation not supported on /dishes/' + req.params.dishId)
})

dishRouter.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n')
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description)
})
dishRouter.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleteing dish: ' + req.params.dishId)
});

module.exports = dishRouter