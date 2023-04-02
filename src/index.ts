import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './app/router';
dotenv.config();

//Calling the Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@lhenriquedev.lt16a5w.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {

    const app = express();
    const port = 3001;

    //using json to parse the body of the request
    app.use(express.json());

    //calling my routes
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Database connected🚀`);
    })
  })
  .catch((err) => {
    console.log(err);
  });