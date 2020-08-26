// user press 'b' for immediate beep
//press 1-9 --> output 'setting timer for x seconds' AND beep after x secs
//ctrl+c to exit program and program prints 'Thanks for using me, ciao!'
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  rl.close();
});

rl.on('line', (userInput) => {
  if (userInput === 'b') {
    process.stdout.write('\x07');

  } else if (Number.isInteger(parseInt(userInput))) {
    console.log(`Setting timer for ${userInput} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), userInput * 1000);
  } 
});