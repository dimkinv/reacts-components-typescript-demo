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
    fs.writeFile('./lib/'+upperFirst(name)+'.ts', getContent(name), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(upperFirst(name) + '.ts : Generated successfully..');
    }); 
});

function upperFirst(name){
    return name[0].toUpperCase() + name.slice(1,name.length);
}

function getIndexContent(libsNames){
    return libsNames.reduce((content, name) => content += `export { default as ${upperFirst(name)} } from './${name}/${upperFirst(name)}';
`, '');
}

function getContent(name){
    const upperName = upperFirst(name);
    return `import { ${upperName} } from './index';
export default ${upperName};`
}