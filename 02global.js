/*global: This is the global object in Node.js, similar to window in the browser. It contains all the global variables and functions.

process: This is an object that provides information about the current Node.js process, such as command-line arguments, environment variables, and the standard input/output streams.

console: This is an object that provides methods for writing to the standard output (stdout) and standard error (stderr) streams.

Buffer: This is a global object that provides methods for working with binary data.

require: This is a function that is used to import modules in Node.js.

__filename: This is a string that contains the absolute path to the current module's file.

__dirname: This is a string that contains the absolute path to the directory that contains the current module's file.
*/

console.log(__dirname);
console.log(__filename);