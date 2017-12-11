import * as React from 'react';
import ButtonProps from './ButtonProps';
import ButtonState from './ButtonState';

export default class Button extends React.PureComponent<ButtonProps, ButtonState>{
    constructor(props: ButtonProps){
        super(props);
        this.state = new ButtonState();
    }
    render(){
        return (<button>{this.props.title}</button>)
    }
}