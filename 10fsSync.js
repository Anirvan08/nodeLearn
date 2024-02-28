const {readFileSync, writeFileSync} = require('fs');
/*
fs.mkdir('./myFolder', (err) => {
    if(err){
    	console.log(err);
    } else{
    	console.log('Folder Created Successfully');
    }
})
*/
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/resultSync.txt',
`Here's the result of addition of two files: ${first + second}`, { flag: 'a' });
/* In fs.writeFileSync, the flag: 'a' option instructs the function to append the provided data to an existing file. This means:

If the file doesn't exist, writeFileSync will create the file and then write the data to it.
If the file already exists, writeFileSync will move the file pointer to the end of the existing content and append the new data without overwriting the previous content.
*/

