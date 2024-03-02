const { log } = require('console');
const {createReadStream} = require('fs');
const { chunk } = require('lodash');
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt',{highWaterMark : 500000,
encoding: 'utf8'});

stream.on('data', (chunk) => {
  console.log(chunk);
})

stream.on('data', (err) => console.log(err))