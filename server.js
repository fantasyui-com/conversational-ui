const cui = require('./index.js');

const express = require('express');
const app = express();

const user = {name:"Anonymous",mood:"Nominal"};

cui.register(`my name is (?<name>[a-z ]+)`, 'i', function({name}){
  user.name = name;
  return `Hello ${user.name} how are you!`;
});

cui.register(`I am (?<mood>[a-z ]+)`, 'i', function({mood}){
  user.mood = mood;
  return `Oh, ${user.name} I am glad you are ${user.mood};`;
});

app.get('*', async function (req, res) {
  const question = req.url.replace(/%20|\+/g,' ');
  res.send( await cui.request(question) )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
