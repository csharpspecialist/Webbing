var http = require('http')
fs = require('fs'),
path = require('path'),
host = '127.0.0.1',
port = '9000';

var mimes =
{
".htm" : "text/htm",
".css" : "text/css",
".js" : "text/javascript",
".gif" : "text/gif",
".jpg" : "text/jpeg",
".png" : "text/png"

}

var server = http.createServer(function (req, res) {
  var filepath = (req.url === '/') ? ('./index.htm') : ('.' + req.url);
  var contentType = mimes[path.extname(filepath)];
  //check to see if the file exists or not
  fs.exists(filepath, function(file_exists)
{
  if(file_exists){
    //read and serve file
    // fs.readFile(filepath, function(error, content){
    //   if(error) { res.writeHead(500);
    //     res.end();
    //   } else{
    //     res.writeHead(200, { 'Content-Type' : contentType  });
    //     res.end(content, 'utf-8');
    //   }
    // })
res.writeHead(200, {'Content-Type' : contentType});
var streamFile = fs.createReadStream(filepath).pipe(res);

    streamFile.on('error', function(){
      res.writeHead(500);
      res.end();
    })
  } else {
    res.writeHead(404);
    res.end("Sorry file is not found")
  }

})
// res.writeHead(200, {'Content-Type'  :  'text/html' });
// res.end('<h2>Hello Party People </h2> ');



}).listen(port, host, function()
{console.log('Server running on http://' + host + ':' + port); })
