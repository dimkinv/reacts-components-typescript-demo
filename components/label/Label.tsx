import * as React from 'react';
import LabelProps from './LabelProps';
import LabelState from './LabelState';
import './Label.scss';

export default class Label extends React.Component<LabelProps, LabelState>{
    constructor(props: LabelProps) {
        super(props);

        this.state = new LabelState();
    }
    render() {
        return (<span className="my-class">{this.props.text}</span>)
    }
}
