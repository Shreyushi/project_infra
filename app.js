import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from your VM 🚀');
});

app.get('/about', (req, res) => {
  res.send('This is your DevOps practice project');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
