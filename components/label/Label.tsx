import * as React from 'react';
import LabelProps from './LabelProps';
import LabelState from './LabelState';
import './Label.css';
        
export default class Label extends React.Component<LabelProps, LabelState>{
    render(){
        return (<span>{this.props.text}</span>)
    }
}
