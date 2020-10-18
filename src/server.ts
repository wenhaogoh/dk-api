import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import {testAuthenticate} from './db/dbUtil';

testAuthenticate();

const app = express();
const PORT = process.env.PORT || '3000';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
