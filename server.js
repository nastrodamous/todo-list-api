var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];

// GET /api/todos
app.get('/api/todos', (req,res) => {
    res.send(todoList)

})

// GET /api/todos/:id
app.get('/api/todos/:id', (req,res) => {
    const id = req.params.id;
})


// POST /api/todos
app.post('/api/todos', (req,res) => {
    todoList.push({
        id: Math.floor(Math.random() * 100),
        todo: req.body.todo
    })

    res.status(200).json({
        message: "todolist was added"
    })
})

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})