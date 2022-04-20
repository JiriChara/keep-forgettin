import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({
    data: 'Hello World',
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
