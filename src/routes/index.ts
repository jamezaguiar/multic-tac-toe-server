import { Router } from 'express';
import { resolve } from 'path';

const routes = Router();

routes.get('/', (request, response) => {
  return response.sendFile(
    resolve(__dirname, '..', '..', 'public', 'index.html'),
  );
});

export default routes;
