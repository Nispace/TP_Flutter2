const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'l32cj',
  database: 'gestion_utilisateurs'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base MySQL');
});

app.get('/api/utilisateurs', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/utilisateurs', (req, res) => {
  const { nom, email } = req.body;
  connection.query(
    'INSERT INTO users (nom, email) VALUES (?, ?)',
    [nom, email],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, nom, email });
    }
  );
});

app.listen(port, () => {
    console.log(`Serveur backend opérationnel : http://localhost:${port}`);
  });