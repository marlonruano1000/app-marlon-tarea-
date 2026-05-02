const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
    <div style="text-align: center; font-family: Arial; margin-top: 50px;">
    <h1>Evaluación de Despliegue en la Nube</h1>
    <h2>Estudiante: Marlon Guillermo Ruano Marroquín</h2>
    <p>Versión 1.0 - Despliegue inicial exitoso</p>
    </div>
`);
});

app.listen(port, () => {
console.log(`App ejecutándose en el puerto ${port}`);
});