const os = require('os');

console.log(os.userInfo());
const uptime = os.uptime();
// Convert the uptime to a human-readable format
const uptimeHours = Math.floor(uptime / 3600);
const uptimeMinutes = Math.floor((uptime % 3600) / 60);
const uptimeSeconds = Math.floor(uptime % 60);


// Print the uptime in a human-readable format
console.log(`System uptime: ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`);


const data = {
    name : os.type(),
    release : os.release(),
    freeMemory : os.freemem(),
    totalMemory : os.totalmem()

};

console.log(data);