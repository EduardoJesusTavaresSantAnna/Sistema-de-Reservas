const express = require('express');
const router = express.Router();

// Rota de teste para verificar se o servidor está funcionando
router.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Aqui você pode importar e usar outras rotas, por exemplo:
// const tarefasRoutes = require('./tarefas');
// router.use('/tarefas', tarefasRoutes);

module.exports = router;
