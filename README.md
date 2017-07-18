# conversational-ui
Regular expression based natural language interface to functions.

# Installation

npm i conversational-ui

# Initialize

```JavaScript

const cui = require('conversational-ui');

```

# Register Handlers

```JavaScript

cui.register(`what is the answer to the ultimate question of life`, '', function(options){
  return "Um, but what is the question?";
});

cui.register(`My name is (?<name>[a-z ]+)`, 'i', function(options){
  return `Hello ${options.name.trim()} how are you`;
});


```

# Execute (Example 1)

```JavaScript

const question = 'what is the answer to the ultimate question of life';

const response = await cui.request(question);
console.log("A:", response);


```

# Execute (Example 2)

```JavaScript

const response = await cui.request('My name is Slim Shady !!!!');

```
