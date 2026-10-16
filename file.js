//const fs=require("fs");
//synchronous call 
//fs.writeFileSync('./test.txt','Hey There');

//asynchronous call
//fs.writeFile('./test.txt',"hello World",(err)=>{});

// const result=fs.readFileSync('./contacts.txt','utf-8');
// console.log(result);

// fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

//fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());

//fs.appendFileSync('./test.txt',`${Date.now()}Hey Ayush\n`); 
//fs.cpSync("./test.txt","./copy.txt");
//fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));


/**************************** Event Loop  ********************/

const fs=require("fs");
const os =require("os");
console.log(os.cpus().length);

//Synchronous call  Blocking.......
// console.log("1");
const result=fs.readFileSync("./contacts.txt","utf-8");
//  console.log(result);
//  console.log("2");
 // op :---- 1 result 2

//Asynchronous call Non-Blocking.......
//console.log("1");
fs.readFile("./contacts.txt","utf-8", (err,result)=>{
   // console.log(result);
})
//console.log("2");

//op :---- 1 2 result

//Default thread pool size is 4. We can change it by setting UV_THREADPOOL_SIZE=2 in terminal before running the code.