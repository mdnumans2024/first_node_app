const express = require('express');
const router = require('./routes/page');

const app = express()
const port = 3000;

// Implementing routes
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



