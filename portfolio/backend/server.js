const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    developer: 'Jeniffer Carvalho',
    stack: 'Node.js + Express'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});