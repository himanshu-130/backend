const express = require('express');
const app = express();
app.use(express.json());
let users = [
    { id: 1, name: "kenobi" },
    { id: 2, name: "stark" },
    { id: 3, name: "jane" }];
app.get('/users', (req, res) => {
    console.log("users");
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'user not found' });
    res.json(user);
});
app.post('/user', (req, res) => {
    const name = req.body.name;
    if (!name) return res.status(400).json({ error: "name is req" });
    const newUser = {
        id: users.length + 1, name
    }
    users.push(newUser);
    res.status(201).json(newUser);
});
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const name = req.body.name;
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(400).json({ Error: "user not found" });
    if (!userId) return res.status(400).json({ Error: "id not found" });
    user.name = name;
    res.json(user)
});
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    const deleted = users.splice(index, 1)[0];
    res.json(deleted);
});
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`server is running: http://localhost:${PORT}/users`)
});