const readline = require('readline-promise').default;

const rlp=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

let bar=null;
rlp.questionAsync('Enter Your Name?').then((answer)=> {
    bar=answer;
    console.log('Welcome:' + bar);
});
console.log('\n After');