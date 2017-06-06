import React, {Component} from 'react';
import {connect} from 'react-redux';
//make this a dumb component and do the state rerendering in renderWord?



class RenderSpaces extends Component {
  constructor(props) {
    super();
    this.state = {
        
    }
  };

  checkLetter(){
      
      var temp = this.state.renderArray;
      
      for(var i = 0; i < this.state.correctArray.length; i++){
          if(this.state.correctArray[i] === props.currentLetter){
              temp[i] === props.currentLetter;
              
          }
      }
      
      this.setState({renderArray: temp})
      
      return(
        <h1>{this.props.emptyArr}</h1>
      )
  }
  

  render() {
    return (
      <div className = 'container3'>
        <h1>{this.props.emptyArr}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    
    const {currentLetter} = state.word;
    return {currentLetter};

};


export default connect(mapStateToProps, {})(RenderSpaces);