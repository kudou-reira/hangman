import React, {Component} from 'react';
import {connect} from 'react-redux';
import ButtonLayout from './buttonLayout';

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
      </div>

    );
  }
}



export default GameStart;
