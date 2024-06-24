const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()
const PORT = 8001

// Middleware
app.use(express.urlencoded({extended:false}))

// Routes

app.get('/users', (req,res) => {
    const html =
    `
        <ul>
            ${users.map( (users) => `<li> ${users.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html)
})

// Rest api 
app.get('/api/users', (req, res) => {
    res.send(users)
})

app.route('/api/users/:id').get((req,res) =>{
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    // 500 server error
    // const user = users.find(user => user[0].id === id);
    if(!user){
        return res.status(404).json({response : "User not exist!"})
    } 
    return res.json(user)
}
).patch((req,res) => {
    res.send("Under Development")
}).delete((req,res) => {
    res.send("Under Development")
})

app.post('/api/users', (req,res) =>{
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address){
        return res.status(400).json({respose : "All fields are mandatory!"})
    }
    users.push({id:users.length+1, ...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
        res.json("Pending")
    })
    return res.status(201).json({status: 200, id: users.length})
})

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`))