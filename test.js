const cui = require('./index.js');

cui.register(`what is the answer to the ultimate question of life`, '', function(options){
  return "Um, but what is the question?";
});

cui.register(`My name is (?<name>[a-z ]+)`, 'i', function({name}){
  return `Hello ${name} how are you!`;
});

async function main(){

  {
  const question = 'what is the answer to the ultimate question of life';
  console.log('Q:',question)
  const response = await cui.request(question);
  console.log("A:", response);
  }

  {
  const question = 'My name is Slim Shady!!!!';
  console.log('Q:',question)
  const response = await cui.request(question);
  console.log("A:", response);
  }

}

main();
