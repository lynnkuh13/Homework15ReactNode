//Server

 //   Create two routes

 // 	-> One Get

 // 	-> One Post 


const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send({ data: 'home' });
})

app.get('/messages', function(req, res) {
    let name = req.query.name;
    let id = req.query.id;
    let messageString =  "My name is " + name + " and my id is " + id;
    console.log(messageString);
    res.send(messageString);

   
})

app.post('/posts', function(req, res) {
    console.log("Req: ", req.body);
    let username = req.body.username;
    let password = req.body.password;
    let makeAString = "Hello, my username is " + username + ", and my password is " + password + "!"; 
    console.log(makeAString);
    res.send(makeAString);

})



app.listen("3402", () => {
    console.log("App listening on port 3402");
})
