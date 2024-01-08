const express = require('express');

const app = express();

app.use(express.static('client-dist', { fallthrough: false }));

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
