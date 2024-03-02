const {readFile,writeFile} = require('fs').promises;
const util = require('util');
//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile)


const start = async() => {
  try {
    const first = await readFile('./content/first.txt','utf8');
    const second = await readFile('./content/second.txt','utf8');
    await writeFile('./content/result_mind_grendade.txt',`This is awesome ${first + second}`,{flag:'a'})
    console.log(first);
    console.log(second);
}
    
   catch (error) {
    console.log(error);
    
  }
}

  

start();
console.log("hii from the bottom");

// const getText = (path => {
//   return new Promise((resolve,reject) => {
//     readFile(path,'utf8',(err,data) => {
//       if(err)
//         reject(err);
//       else 
//         resolve(data);
//     })
//   })
// })

//getText('./content/first.txt').then(result => console.log(result)).catch(error => console.log(error));
