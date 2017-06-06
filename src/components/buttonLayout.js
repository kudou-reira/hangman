import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {enterA, restore} from '../actions';
//use this component to pass in button value
//HOWEVER, IN THIS COMPONENT, ON BUTTON CLICK WILL CHECK THE ARRAY
//use connect to bring in the array type and then return the new array if there are matches
//update array using action creator
//one function for 26 letters, checkLetters() or whatever
//this.props.updateArray(array) with updated array or something

class ButtonLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aDisable: false
        
    }

  };

  onClickA() {
      
      this.props.restore();
      this.props.enterA('a');
      this.setState({aDisable: true});
  }

  render() {
    return (
      <div className = 'container2'>
        <ButtonToolbar>
            <Button bsClass = "btn" onClick = {this.onClickA.bind(this)} disabled =                       {this.state.aDisable}>a</Button>
            <Button bsClass = "btn">b</Button>
            <Button bsClass = "btn">c</Button>
            <Button bsClass = "btn">d</Button>
            <Button bsClass = "btn">e</Button>
            <Button bsClass = "btn">f</Button>
            <Button bsClass = "btn">g</Button>
            <Button bsClass = "btn">h</Button>
            <Button bsClass = "btn">i</Button>
            <Button bsClass = "btn">j</Button>
        </ButtonToolbar>
        
        <ButtonToolbar>
            <Button bsClass = "btn">k</Button>
            <Button bsClass = "btn">l</Button>
            <Button bsClass = "btn">m</Button>
            <Button bsClass = "btn">n</Button>
            <Button bsClass = "btn">o</Button>
            <Button bsClass = "btn">p</Button>
            <Button bsClass = "btn">q</Button>
            <Button bsClass = "btn">r</Button>
            <Button bsClass = "btn">s</Button>
            <Button bsClass = "btn">t</Button>
        </ButtonToolbar>
        
        <ButtonToolbar>
            <Button bsClass = "btn">u</Button>
            <Button bsClass = "btn">v</Button>
            <Button bsClass = "btn">w</Button>
            <Button bsClass = "btn">x</Button>
            <Button bsClass = "btn">y</Button>
            <Button bsClass = "btn">z</Button>
        </ButtonToolbar>
      </div>

    );
  }
}


export default connect (null, {enterA, restore})(ButtonLayout);
