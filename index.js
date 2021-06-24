const app = require('express')();
const middlewares = require('./middlewares');

const PORT = 3001;

const users = [
  {
    id: 2,
    user: 'Antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"],
  },
  {
    id: 3,
    user: "Rodrigo",
    comments: ["Tô aqui também", "Agora não tô"],
  },
];


app.get('/user/:name', (req, res, next) => {
  const { name } = req.params;
  const user = users.find(({ user }) => user === name);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  return res.status(200).json({ commentsUser: user.comments });
});

app.get('/:operacao/:numero1/:numero2', (req, res, next) => { 
  middlewares[req.params.operacao](req, res, next);
});


app.listen(PORT, () => console.log(`Estou rodando na porta ${ PORT }`));