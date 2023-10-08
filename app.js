// app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Configuración de MongoDB (cambia la URL por la de tu base de datos)
mongoose.connect('mongodb://localhost/nodepop', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración de rutas
const anunciosRouter = require('./routes/anuncios');
const tagsRouter = require('./routes/tags');

app.use('/api/anuncios', anunciosRouter);
app.use('/api/tags', tagsRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
