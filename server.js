const express = require('express');
const app = express();
const port = 3000; // you can choose another port

app.use(express.static('public')); // Serves resources from public folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
