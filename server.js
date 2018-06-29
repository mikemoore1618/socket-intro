const
  express = require('express'),
  app = express()
  PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})