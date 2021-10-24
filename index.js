const express = require('express')
const cors = require('cors');
const port = 4000;
const app = express();
app.use(cors());
app.use(express.json())

const users = [
    {id: "0", name: "Boniamin", email: "Boniamin@gmail.com"},
    {id: "1", name: "Bijoy", email: "Boniamin2@gmail.com"},
    {id: "2", name: "Amin", email: "Boniamin121@gmail.com"}
]


app.get('/', (req , res ) =>{
    // res.send('hellow worlod. this is my fast node code. ok . ok ok');
    // res.send({id: "1", name: "boniamin"});
    res.send(users);
});
// Dynamiv 
app.get('/users/:id', (req, res) =>{
    console.log(req.params.id);
    const id = (req.params.id);
    const user = users[id];
    res.send(user)
})
// App post methhod
app.post('/users', (req , res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})
// Quary paramitar 
app.get('/users', (req , res) =>{
    // console.log(req.quary.search)
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
