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
console.log('Q:',question)
const response = await cui.request(question);
console.log("A:", response);

```

    Q: what is the answer to the ultimate question of life
    A: Um, but what is the question?


# Execute (Example 2)

```JavaScript

const question = 'My name is Slim Shady !!!!';
console.log('Q:',question)
const response = await cui.request(question);
console.log("A:", response);

```

    Q: My name is Slim Shady !!!!
    A: Hello Slim Shady how are you

# Execute (Example 3)

Note use of spread operator in handler.

```JavaScript

cui.register(`My name is (?<name>[a-z ]+)`, 'i', function({name}){
  return `Hello ${name} how are you!`;
});

```


```JavaScript

const question = 'My name is Slim Shady !!!!';
console.log('Q:',question)
const response = await cui.request(question);
console.log("A:", response);

```

    Q: My name is Slim Shady !!!!
    A: Hello Slim Shady how are you
