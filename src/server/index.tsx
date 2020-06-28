import express from 'express';

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Hello from './Hello';

const app: express.Application = express();

// app.use('/', (req: Request, res: Response) => {
//   res.send(renderToString(<Hello />));
// });

app.use('/', express.static('dist/client'));

app.listen(3000, () => {
  console.log('Hello world! --> http://localhost:3000/');
});
