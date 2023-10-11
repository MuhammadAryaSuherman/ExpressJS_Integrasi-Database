const express = require('express');
const app = express();
const router = require('./Server/film/route-film');
const category = require('./Server/category/route-category');

app.use(express.json());
app.use('/', router);
app.use('/', category);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
