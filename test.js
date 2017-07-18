const cui = require('./index.js');

cui.register(`what is the answer to the ultimate question of life`, '', function(options){
  return "Um, but what is the question?";
});

cui.register(`My name is (?<name>[a-z ]+)`, 'i', function(options){
  return `Hello ${options.name.trim()} how are you`;
});

async function main(){

  { console.log('\n\nEXAMPLE 1\n');
  const question = 'what is the answer to the ultimate question of life';
  console.log('Q:',question)
  const response = await cui.request(question);
  console.log("A:", response);
  }

  { console.log('\n\nEXAMPLE 2\n');
  const question = 'My name is Slim Shady !!!!';
  console.log('Q:',question)
  const response = await cui.request(question);
  console.log("A:", response);
  }

}

main();
