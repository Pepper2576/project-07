import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'Admin@123',
  database: 'your_database',
});

app.get('/api/data', async (req, res) => {
  //   const [rows] = pool.query('SELECT * FROM insert_table');
  //   res.json(rows);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
