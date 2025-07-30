const express = require("express");
const app = express();
app.use(express.json());

function logger(req, res, next){
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get('/',(req, res)=>{
    console.log("Home page");
    res.send("HOME PAGE");
});
app.get('/about',(req, res)=>{
    console.log("about page");
    res.send("ABOUT PAGE");
});
app.get('/contact',(req, res)=>{
    console.log("contact page");
    res.send("CONTACT PAGE");
});

app.post('/contact',(req, res)=>{
    const contact = req.body;
    res.send(`REQ IS ACCEPTED HERE: ${JSON.stringify(contact)} `)
    console.log(`user's data: ${JSON.stringify(contact)}`);
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running! : ${PORT}`)
});
