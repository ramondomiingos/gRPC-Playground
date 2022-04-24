import express, { Express } from 'express';
import router from './routes';
const app: Express = express();
import morganMiddleware from './config/morgan';
const port = process.env.PORT || 8080;

// start the express server
app.use(express.json());
app.use(router);
app.use(morganMiddleware);
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
