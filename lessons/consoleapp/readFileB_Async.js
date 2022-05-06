var fs=require('fs');
console.log('Start reading a file...');
fs.readFile('phonebook.dat', function(err, contactData) {
//if an error occured, throwing it will display the exception and end our app.
    if (err) {
        console.log (`ERROR!!! ${err}`);
        return console.log(err); //throw error
}
//contactData is a Buffer,converted to string.
var text=contactData.toString();

let myfunc=function() {
    console.log('INSIDE readFILE');
};
setTimeout(myfunc, 5000);

//breakup the file into lines.
var lines=text.split('\n');
lines.forEach(function (line) {
    var parts=line.split(' ');
    var name=parts[0];
    var phone=parts[2];
    console.log(name + ' - ' + phone);
});
});
console.log('End of the File');