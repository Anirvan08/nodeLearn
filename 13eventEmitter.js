const event = require('events');

const myEmitter = new event();
myEmitter.emit('userJoined','Eminem',40);

myEmitter.on('userJoined',(name,id) => {
  console.log(`Welcome new user ${name} with id ${id}`);
});

myEmitter.on('userJoined',() => {
  console.log("Some other logic");
});


  

// You first listen to the events and only then emit it as it won't make sense otherwise. Also listening to after emitting doesn't make any sense as well.