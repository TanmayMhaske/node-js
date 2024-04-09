const { log } = require('console');
const os = require('os')


// info about current user

const user = os.userInfo();

//console.log(user);

// method returns the system uptime in seconds

console.log(`System uptime is ${os.uptime()}`)


const current = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    platform: os.platform(),
    cpus:os.cpus(),
    freeMem: os.freemem(),
}

console.log(current);