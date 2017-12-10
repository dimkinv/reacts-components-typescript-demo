import * as React from 'react';
import ButtonProps from './ButtonProps';
import ButtonState from './ButtonState';

export default class Button extends React.PureComponent<ButtonProps, ButtonState>{
    constructor(props: ButtonProps){
        super(props);
        this.state = new ButtonState();
        this.props = {title: 'aa'} as ButtonProps;
    }
    render(){
        return (<button>DEMO</button>)
    }
}