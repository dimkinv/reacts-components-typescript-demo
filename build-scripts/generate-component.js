const fs = require('fs');
const componentName = process.argv[2];

if(componentName === undefined) {
    console.warn('You need to give a name to your component');
    return;
}

if(!(/^\w+$/.test(componentName))){
    console.log('Component name cannot contain invalid chars ');
    return;
}
const upperName = upperFirst(componentName);
const pathName = `./components/${camelToDash(componentName)}`;

console.log('Generating Component Named: ' + upperName + '...');

if (!fs.existsSync(pathName)){
    fs.mkdirSync(pathName);
}

[   getComponentContent,
    getCSSContect,
    getPropsContect,
    getStateContect,
    getComponentTest,
].forEach(functionRef => {
    const file = functionRef(upperName);
    fs.writeFile(`${pathName}/${file.name}`, file.content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(file.name  + ' : Generated successfully..');
    });
})

function getComponentContent(upperName){
    return {
        name: `${upperName}.tsx`,
        content: `import * as React from 'react';
import ${upperName}Props from './${upperName}Props';
import ${upperName}State from './${upperName}State';
import './${upperName}.css';
        
export default class ${upperName} extends React.Component<${upperName}Props, ${upperName}State>{
    render(){
        return (<div>${upperName} Component</div>)
    }
}
` 
    }
}

function getComponentTest() {
    return {
        name: `${upperName}.test.tsx`,
        content: `import * as React from "react";
import { render } from "enzyme";
        
import ${upperName} from "./${upperName}";
        
describe("${upperName}", () => {
    it("renders correctly ", () => {
        const instance = render(<${upperName} />);
        expect(instance).toMatchSnapshot();
    });
});
`
    }
}

function getCSSContect(upperName){
    return {
        name: `${upperName}.css`,
        content: ``
    }
}

function getPropsContect(upperName){
    return {
        name: `${upperName}Props.ts`,
        content: `export default interface ${upperName}Props{}`
    }
}

function getStateContect(upperName){
    return {
        name: `${upperName}State.ts`,
        content: `export default class ${upperName}State{}`
    }
}


function upperFirst(name){
    return name[0].toUpperCase() + name.slice(1,name.length);
}

function camelToDash(name){
    let res = name[0].toLowerCase() + name.slice(1,name.length);
    return res.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}