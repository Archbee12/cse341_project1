// 1 We require express and routes
const express = require('express');
const app = express();
const mongodb = require('./data/database');
const route = require('./routes');

// 2 We call the port to view the page
const port = process.env.PORT || 3000;

// We make use of required routes
app.use('/', route);

// 4 Wrap mongodb database
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  }
  else {
    // 3 Then we listen to the port using
    app.listen(port, () => (
      console.log(`Running on port ${port}`)
    ))
  }
})
