const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 3000;

const { User } = require('./app/models');

var corsMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(corsMiddleware);

app.get('/', (_, response) => {
    response.json({ info: 'Simple CRUD API with PostgreSQL works =D' });
});

app.get('/users', async (_, response) => {
    try {
        const users = await User.findAll();

        response.status(200).json(users);
    } catch (error) {
        response.status(400).json(error.message);
    }
});

app.get('/users/:id', async (request, response) => {
    try {
        const user = await User.findByPk(request.params.id);

        response.status(200).json(user);
    } catch (error) {
        response.status(400).json(error.message);
    }
});

app.post('/users', async (request, response) => {
    try {
        const user = await User.create(request.body);

        response.status(201).json(user);
    } catch (error) {
        response.status(400).json(error.message);
    }
});

app.put('/users/:id', async (request, response) => {
    try {
        await User.update(
            request.body,
            { returning: true, where: { id: request.params.id } }
        );

        response.status(200).json({ message: 'User successfully updated!' });
    } catch (error) {
        response.status(400).json(error.message);
    }
});

app.delete('/users/:id', async (request, response) => {
    try {
        await User.destroy({ where: { id: request.params.id }, truncate: false });

        response.status(200).json({ message: 'User successfully deleted!' });
    } catch (error) {
        response.status(400).json(error.message);
    }
});

app.listen(port, () => {
    console.log(`App running and listen on port ${port}`);
});