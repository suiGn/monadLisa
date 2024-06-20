import express from 'express';

const app = express();
const port = 3432;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
