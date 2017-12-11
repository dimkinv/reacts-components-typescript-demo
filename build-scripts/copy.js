const fs = require('fs');
 
fs.copyFileSync('package.json', 'lib/package.json');
console.log('Package.json copied successfully! 👾🦄👾');