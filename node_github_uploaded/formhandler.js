var express = require('express');
var app = express();
app.use(express.static('public'));
  app.get('/', function (req, res) 
  { 
    res.sendFile( __dirname + "/" + "form.html" );
  })
app.get('/process_get', function (req, res)
 {
   // Prepare output in JSON format
   
   response =
   {
      first_name:req.query.id,  
      last_name:req.query.name 
   };   
   console.log(response);
   res.send('<p>Username: ' + req.query['id']+'</p><p>Lastname: '+req.query['name']+'</p>');
   
   
   res.end(JSON.stringify(response)); })
var server = app.listen(8081, function () 
{
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})