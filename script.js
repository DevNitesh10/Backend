const express = require('express')
const app = express()

// configure ejs.
app.set("view engine", "ejs");
// Using public folder as the static directory to serve files from.
app.use(express.static('public'));

// Routes
app.get('/', function (req, res) {
    res.render('index', {age:12})
})

app.get('/error', function (req, res) {
    // throw new Error('Error')
    throw Error("Something Went Wrong");
})

app.get('/contact', function (req, res) {
    res.render('contact', {name: "Nitesh"})
})

app.get('/aboutus', function (req, res) {
  res.render('aboutus')
})

app.use(
    function errorHandler (err, req, res, next) {
        if (res.headersSent) {
          return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
      }
)

app.listen(3000)


// middleware
// app.use(function (req, res, next) {
//     console.log("Middleware Working.")
//     next();
// });
// app.get('/profile', function (req, res) {
//     res.send('Hello from Profile')
//   })
  //   app.get('/profile/:username', function (req, res) {
  //     res.send(`Hello from ${req.params.username}`)
  //   })

/**
 * const express = require('express')
 * const app = express()
 * 
 * app.get('/', function (req, res) => {
 * res.send("Hello from Server")
 * })
 * app.listen(3000);
 */