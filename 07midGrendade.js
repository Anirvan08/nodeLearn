const a = 10;
const b = 5;

const sum = () => {
    console.log(`The sum is ${a + b}`);
}


sum();

/* Basically when we use require with this file in another file, it will invoke this function there but at the same time we won't be able to use it like we do by using module.exports */