const express       = require('express');

const OngController = require('./controlers/OngController');
const IncidentController = require('./controlers/IncidentController');
const ProfileController = require('./controlers/ProfileController');
const SessionController = require('./controlers/SessionController');

const routes        = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;