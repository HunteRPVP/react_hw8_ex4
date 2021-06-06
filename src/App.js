import React from 'react';
import { Hero } from './Hero';
import './App.css';

export default class App extends React.Component {
  render() {
      return (
          <div className="App">
              {this.props.heroes.map( (item, index) =>
                   <Hero key={index} title={item.title} subtitle={item.subtitle} imageUrl={item.imageUrl} />
              )};
          </div>
      );
  }
};
