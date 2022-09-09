import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/healtcheck', async (req, res) => {
  res.send('ok');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at PORT: ${port}`);
});
