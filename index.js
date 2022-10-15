const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.json("Hello world")
})
app.get('/users', (req, res) => {
    res.json(['user1','user2','user3'])
})
app.post('/users', (req, res) => {
    res.json('юзер добавлен')
})
app.delete('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id}`)
})
app.patch('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id}`)
})
app.patch('/admin', (req, res) => {
    res.json('не хватает прав доступа')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})











