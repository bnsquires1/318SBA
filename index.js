const express = require('express');
const app = express();
const PORT = 3000;

//register the template engine
app.set("view engine", "ejs");


app.get('/api/businesses', (req, res) => {


})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})