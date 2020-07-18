import express, { Response, Request } from 'express';
import path from 'path';
import passport from './passport';
//= require('passport');
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Hello from './Hello';

const app: express.Application = express();
// const passport: passport.
// app.use('/', (req: Request, res: Response) => {
//   res.send(renderToString(<Hello />));
// });
// './dist/client'
const pathStatic = path.resolve('./', 'dist/client');
console.log('pathStatic ->', pathStatic);
app.use('/', express.static(pathStatic));

// app.post('/login', passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {

// });

app.listen(3000, () => {
  console.log('Hello world! --> http://localhost:3000/');
});
