var readlineSync = require('readline-sync');
//wait for user's response
var userName = readlineSync.question('May I know your name?');
console.log('Hi' + ' ' + userName + '!');

 //handle the secret text(ex:password)
 var favFood=readlineSync.question('What is your favourite Food?', {
     hideEchoBack:true, // the typed text on screen is hidden by '* (default)
 });
 console.log('Oh, ' + userName + ' loves ' + favFood + '!');

 console.log('After');