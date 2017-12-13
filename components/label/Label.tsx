import * as React from 'react';
import LabelProps from './LabelProps';
import LabelState from './LabelState';

export default class Label extends React.Component<LabelProps, LabelState>{
    render(){
        const styles = {
          color: 'green',
          fontSize: '24px'
        };
        return (<span style={styles}>{this.props.text}</span>)
    }
}
