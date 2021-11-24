//in-built packages

const os =require("os");
console.log("version:",os.version());
console.log("free memory",os.freemem());  
console.log("total memory",os.totalmem());
console.log("CPUs",os.cpus());