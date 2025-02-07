const greetFn = (name) => {
    console.log(`Hello, ${name}!`);
   }
   
   function processName(callback) {
    const name = "Mr NBT";
    callback(name);
   }
   
   processName(greetFn); 
   