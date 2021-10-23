import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors'

import { router } from './routes';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/v1', router); // Insert the routes in the express

app.listen(3000, () => console.log('Server is running on port 3000'));