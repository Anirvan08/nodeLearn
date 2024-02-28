const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','another','test.txt');

console.log(filePath);

const pathInfo = {
    fileName : path.basename(filePath),
    folderName : path.dirname(filePath),
    extensions : path.extname(filePath),
    detialInfo : path.parse(filePath)
};

console.log(pathInfo);

const absolutePath = path.resolve(__dirname, '/content/', 'another', 'test.txt');

console.log(absolutePath); 