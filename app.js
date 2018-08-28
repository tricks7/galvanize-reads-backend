const express = require('express');
const port = (process.env.PORT || 7000);
const app = express();
const queries = require('./queries.js');

app.get('/',(request, response, next) => {
    queries.getAll().then(authors => response.json({ authors }))
})

app.get('/',(request, response, next) => {
    queries.getAll().then(books => response.json({ books }))
})

app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})

