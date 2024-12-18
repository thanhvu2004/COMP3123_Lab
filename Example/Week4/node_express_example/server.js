var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/index.htm', (req, res) => {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', (req, res) => {
   //Prepare output in JSON format
   let response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };

   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
