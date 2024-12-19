import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use('/api', routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to DB');
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
