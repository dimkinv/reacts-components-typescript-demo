import * as React from 'react';
import * as glamor from 'glamor';
import glamorous from 'glamorous';
import CardProps from './CardProps';
import CardState from './CardState';
import './Card.css';

export default class Card extends React.Component<CardProps, CardState>{
  constructor(props: CardProps){
    super(props);
  }
    render(){
        const Title = glamorous.h1({
          fontSize: '24px',
          color: 'tomato',
          ':hover': {
            color: 'limegreen'
          }
        });
        // Creating the animation
        const animationStyles = () => {
          const bounce = glamor.keyframes('bounce',{
            '0%': { transform: `scale(1.01)`},
            '100%': { transform: `scale(0.99)`}
          })
          return { animation: `${bounce} 0.5s infinite ease-in-out alternate`};
        }
        // Composing animation with the title
        const AnimatedTitle = glamorous(Title)(animationStyles);

        const Content = glamorous.p({
          fontWeight: 400,
          color: 'lightgrey',
        });

        return (
          <div>
            <AnimatedTitle>{this.props.title}</AnimatedTitle>
            <Content>{this.props.content}</Content>
          </div>
        )
    }
}
