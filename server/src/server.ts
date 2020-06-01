import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de Usuários')

  res.json([
    {'Message': 'Its Alive!'},
    {
      'User': 'Thiago',
      'email': 'panchiniak@gmail.com'
    }
  ]);
});

app.listen(3333);