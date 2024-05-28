const express = require('express');
const app = express();
const PORT = 3000;
const usersRouter =  require('./routes/users.js');
const goodsRouter = require('./routes/goods.js');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

//register the template engine
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// goods page
app.get('/', function(req, res) {
  res.render('goods.js');
});

// users page
app.get('/users', function(req, res) {
  res.render('users.js');
});


// User Route
app.use('/api/users', usersRouter);
//Goods Route
app.use('/api/goods', goodsRouter);


//error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})