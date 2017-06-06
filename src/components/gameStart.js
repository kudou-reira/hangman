import React, {Component} from 'react';
import {connect} from 'react-redux';
import ButtonLayout from './buttonLayout';
import RenderWord from './renderWord';

class GameStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }

  };

 

  render() {
    return (
      <div>
        <ButtonLayout />
        <RenderWord />
      </div>

    );
  }
}



export default GameStart;
