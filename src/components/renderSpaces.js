import React, {Component} from 'react';
import {connect} from 'react-redux';

//make this a dumb component and do the state rerendering in renderWord?

// 6/8/17 yeah, probably make this a dumb component lolll



class RenderSpaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div className = 'container3'>
        <h1>{this.props.emptyArr}</h1>
        {console.log("why does this update " + this.props.emptyArr)}
        {console.log(this.props.correctArr)}
      </div>
    );
  }
}




export default RenderSpaces;