const express = require('express');
const app = express();
app.use(express.json());
app.listen(3001, () => console.log('App ouvindo na porta 3001'));