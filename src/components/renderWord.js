import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';
import RenderSpaces from './renderSpaces';

//send all the state here into redux store?
//then do the checking in the action creator...maybe
//in the fetchWord() function, call the action creator to store the new array
//pass in two arrays as objects

class RenderWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialWord: '',
        displayArray: [],
        renderArray: [],
        correctArray: [],
        show: true
    }
  };

  componentWillMount() {
      
      this.fetchWord();
      
  }
    
    
  fetchWord() {
      
      axios.get('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
        .then(response => {
          
          this.setState({initialWord: response.data[0].word})
          var splitWord = this.state.initialWord

          var testHold = [];
          var emptyHold = [];
          testHold = splitWord.split('');
 
          
          for(var i = 0; i < testHold.length; i++){
            emptyHold.push('_');
          }
          
          this.setState({correctArray: testHold});
          
          for(var j = 0; j < testHold.length; j++){
              if(testHold[j] === '-'){
                  emptyHold[j] = '-';
              }
          }
          
          this.setState({displayArray: emptyHold});
          
          var holdList = [];
          holdList = this.state.displayArray;
          var arrWithSpace = holdList.map(function(el){
             return el + " "; 
          });
          
          this.setState({renderArray: arrWithSpace});
          console.log(this.state.renderArray);
          console.log(this.state.correctArray);
      })
          
  }
    

  render() {
    return (
      <div className = 'container3'>
        <h1>{this.state.initialWord}</h1>
        <RenderSpaces emptyArr = {this.state.renderArray} correctArr = {this.state.correctArray} />
        <div className  = "spaceOut">
         <Button style = {{width:140}} onClick = {this.fetchWord.bind(this)}>Play again?</Button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    
    const {currentLetter} = state.word;
    return {currentLetter};

};


export default connect(mapStateToProps, {})(RenderWord);
