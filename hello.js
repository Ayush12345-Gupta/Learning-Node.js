
const math=require("./math");

// in the require function we need to
//  pass the path of the file which we want to import. Here 
//  we are importing math.js file which is in the same directory
//   as hello.js file. So we are passing ./math in the require function.

console.log("Math value is",math.add(2, 4),"and" ,math.sub(4,2));  