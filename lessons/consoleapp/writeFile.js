// load the filesystem(fs) module
var fs = require('fs');
var content = 'Tom and Jerry are very good friends';
var writeStream = fs.createWriteStream('movies.txt');
writeStream.write(content, 'UTF-8');
writeStream .end();
// handle finish event
writeStream.on('finish', function () {
    console.log ('Content written to the file');
});
//handle error event
writeStream.on('error', function(err) {
   console.log(`ERROR!!! ${err.stack}`);
});
console.log('End..')
