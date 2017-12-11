import * as React from 'react';
import MyHeaderProps from './MyHeaderProps';
import MyHeaderState from './MyHeaderState';
import './MyHeader.css';
        
export default class MyHeader extends React.Component<MyHeaderProps, MyHeaderState>{
    render(){
        return (<div>MyHeader Component</div>)
    }
}
