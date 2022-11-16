const express = require('express');
const port = 9000;
const app = express();

app.get('/profile', (peticion, respuesta) => {
    respuesta.json({
        name: 'Evertz Francisco',
        lastName: 'Hamilton Isaac',
        age: 19,
        country: 'Dominican Republic'
    })
})

app.post('/jobs', (peticion, respuesta) => {
    respuesta.json({
        jobs: ["Facebook", "Google", "NASA"]
    })
})

app.patch('/hobbies', (peticion, respuesta) => {
    respuesta.json({
        hobbies: ["Play VideoGames", "Programming", "Watch Movies and Animes"]
    })
})

app.listen(port, () => {
    console.log(`Server open at ${port}`);
})