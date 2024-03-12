const express = require('express');
const { execFile } = require('child_process');
const app = express();

app.use(express.json());  // Middleware to parse JSON bodies

app.post('/run-python', (req, res) => {
  const input = req.body.input;  // Assume input is sent in the request body

  execFile('python', ['scripts/script.py', input], (error, stdout, stderr) => {
    if (error) {
      console.error('stderr', stderr);
      res.status(500).send(stderr);
    } else {
      console.log('stdout', stdout);
      res.status(200).send(JSON.parse(stdout));
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
