import express, { Express } from 'express';
import router from './routes';
const app: Express = express();
const port = process.env.PORT || 3333;

// start the express server
app.use(express.json());
app.use(router);
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
