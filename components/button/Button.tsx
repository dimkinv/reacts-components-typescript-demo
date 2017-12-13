import * as React from 'react';
import ButtonProps from './ButtonProps';
import ButtonState from './ButtonState';
import './Button.css';
export default class Button extends React.PureComponent<ButtonProps, ButtonState>{
    constructor(props: ButtonProps){
        super(props);
        this.state = {} as ButtonState;
    }
    render(){
        return (<button onClick={() => {console.log('clicked')}}>{this.props.title}</button>)
    }
}
