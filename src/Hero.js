import React from 'react';
import { ImageCounter } from './ImageCounter';

export class Hero extends React.Component {

  constructor(props) {

    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick.bind(this)} />
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}
;
