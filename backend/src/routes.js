import { Router } from 'express';
import { OngController } from './controllers/OngController.js';
import { IncidentController } from './controllers/IncidentController.js';
import { profileController } from './controllers/profileController.js';
import { sessionController } from './controllers/sessionController.js';

const routes = Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;