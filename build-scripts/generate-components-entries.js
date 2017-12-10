const path = require('path');
const fs = require('fs');

const targetPath = './lib';
const filenames = fs.readdirSync(targetPath);
var libsNames = [];
filenames.forEach(function (name) {
    if (name === '.' || name === '..') {
        return;
    }
    if (fs.lstatSync(targetPath + '/' + name).isDirectory()) {
        libsNames.push(name);
    }

});

console.log('Generating entry files for the following components: ' + libsNames.join(','));

fs.writeFile('./lib/index.ts', getIndexContent(libsNames), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('index.ts : Generated successfully..');
});

libsNames.forEach(name => {
    fs.writeFile('./lib/'+dashedToUpperCamel(name)+'.ts', getContent(name), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(dashedToUpperCamel(name) + '.ts : Generated successfully..');
    }); 
});

function dashedToUpperCamel(name){
    let res = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return res[0].toUpperCase() + res.slice(1,res.length);
}

function getIndexContent(libsNames){
    return libsNames.reduce((content, name) => content += `export { default as ${dashedToUpperCamel(name)} } from './${name}/${dashedToUpperCamel(name)}';
`, '');
}

function getContent(name){
    const upperName = dashedToUpperCamel(name);
    return `import { ${upperName} } from './index';
export default ${upperName};`
}