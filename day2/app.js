const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Home page");
});
app.get('/hello', (req, res) => {
    res.send("hellow there");
});

app.get('/user',(req, res) =>{
    res.send("Get req received here");
});
app.post('/user', (req, res) =>{
    const user = req.body;
    res.send(`User's data: ${JSON.stringify(user)} `)
});
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`server is running: ${PORT}`)
});

