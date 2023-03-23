const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// A simple Todo List array
let todos = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Call John', completed: true },
    { id: 3, title: 'Finish report', completed: false }
];

app.use(bodyParser.json());

// A GET endpoint to retrieve all Todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// A POST endpoint to add a new Todo
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    newTodo.id = todos.length + 1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// A PUT endpoint to update a Todo's title and completed status
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = req.body.title || todo.title;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

// A DELETE endpoint to delete a Todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.sendStatus(204);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
