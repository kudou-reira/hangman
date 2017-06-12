import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {enterLetter, emptyArrUpdate, correctArrUpdate} from '../actions';
import axios from 'axios';
import RenderSpaces from './renderSpaces';
//use this component to pass in button value
//HOWEVER, IN THIS COMPONENT, ON BUTTON CLICK WILL CHECK THE ARRAY
//use connect to bring in the array set in renderWord and then return the new array if there are matches
//update array using action creator
//one function for 26 letters in THIS component, checkLetters() or whatever
//also add a function in this component to check if you won
//this.props.updateArray(array) with updated array or something


//change the aDisable etc states of this component using an action creator 

class ButtonLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        aDisable: false,
        bDisable: false,
        cDisable: false,
        dDisable: false,
        eDisable: false,
        fDisable: false,
        gDisable: false,
        hDisable: false,
        iDisable: false,
        jDisable: false,
        kDisable: false,
        lDisable: false,
        mDisable: false,
        nDisable: false,
        oDisable: false,
        pDisable: false,
        qDisable: false,
        rDisable: false,
        sDisable: false,
        tDisable: false,
        uDisable: false,
        vDisable: false,
        wDisable: false,
        xDisable: false,
        yDisable: false,
        zDisable: false,
        initialWord: '',
        displayArray: [],
        renderArray: [],
        correctArray: [],
        show: true,
        counter: 10,
        showSearch: false,
        death: 0,
        partOfSpeech: '',
        definition: '',
        attributionText: ''
        
    }

  };
    
  componentWillMount() {
      
      this.fetchWord();
      
  }
    
    
  fetchWord() {
      
      axios.get('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
        .then(response => {
          
          this.setState({initialWord: response.data[0].word.toLowerCase()})
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
              
              else if(testHold[j] === ' '){
                  emptyHold[j] = ' ';
              }
              
              else if(testHold[j] === '\''){
                  emptyHold[j] = ' ';
              }
          }
          
          this.setState({displayArray: emptyHold});
          
          var holdList = [];
          holdList = this.state.displayArray;
          var arrWithSpace = holdList.map(function(el){
             return el + " "; 
          });
          
          this.setState({renderArray: arrWithSpace});
          
          this.props.emptyArrUpdate(this.state.renderArray);
          this.props.correctArrUpdate(this.state.correctArray);
          
          console.log("this is from reducer word" + this.state.renderArray);
          
          this.setState(
              
              {
                  counter: 10,
                  aDisable: false,
                  bDisable: false,
                  cDisable: false,
                  dDisable: false,
                  eDisable: false,
                  fDisable: false,
                  gDisable: false,
                  hDisable: false,
                  iDisable: false,
                  jDisable: false,
                  kDisable: false,
                  lDisable: false,
                  mDisable: false,
                  nDisable: false,
                  oDisable: false,
                  pDisable: false,
                  qDisable: false,
                  rDisable: false,
                  sDisable: false,
                  tDisable: false,
                  uDisable: false,
                  vDisable: false,
                  wDisable: false,
                  xDisable: false,
                  yDisable: false,
                  zDisable: false,
                  winCon: false
              }
          );
          
          axios.get("http://api.wordnik.com:80/v4/word.json/" + this.state.initialWord + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
          .then(response => {
            this.setState(
                {partOfSpeech: response.data[0].partOfSpeech, 
                definition: response.data[0].text,
                attributionText: response.data[0].attributionText}
                         )
          });
      })     
  }

  onClickA() {
      
      this.props.enterLetter('a');
      this.setState({aDisable: true});
      this.checkLetter('a');
  }
    
  onClickB() {
      
      this.props.enterLetter('b');
      this.setState({bDisable: true});
      this.checkLetter('b');
  }
    
  onClickC() {
      
      this.props.enterLetter('c');
      this.setState({cDisable: true});
      this.checkLetter('c');
  }
    
  onClickD() {
      
      this.props.enterLetter('d');
      this.setState({dDisable: true});
      this.checkLetter('d');
  }
    
  onClickE() {
      
      this.props.enterLetter('e');
      this.setState({eDisable: true});
      this.checkLetter('e');
  }
    
  onClickF() {
      
      this.props.enterLetter('f');
      this.setState({fDisable: true});
      this.checkLetter('f');
  }
    
  onClickG() {
      
      this.props.enterLetter('g');
      this.setState({gDisable: true});
      this.checkLetter('g');
  }
    
  onClickH() {
      
      this.props.enterLetter('h');
      this.setState({hDisable: true});
      this.checkLetter('h');
  }
    
  onClickI() {
      
      this.props.enterLetter('i');
      this.setState({iDisable: true});
      this.checkLetter('i');
  }
    
  onClickJ() {
      
      this.props.enterLetter('j');
      this.setState({jDisable: true});
      this.checkLetter('j');
  }
    
  onClickK() {
      
      this.props.enterLetter('k');
      this.setState({kDisable: true});
      this.checkLetter('k');
  }
    
  onClickL() {
      
      this.props.enterLetter('l');
      this.setState({lDisable: true});
      this.checkLetter('l');
  }
    
  onClickM() {
      
      this.props.enterLetter('m');
      this.setState({mDisable: true});
      this.checkLetter('m');
  }
    
  onClickN() {
      
      this.props.enterLetter('n');
      this.setState({nDisable: true});
      this.checkLetter('n');
  }

  onClickO() {
      
      this.props.enterLetter('o');
      this.setState({oDisable: true});
      this.checkLetter('o');
  }
    
  onClickP() {
      
      this.props.enterLetter('p');
      this.setState({pDisable: true});
      this.checkLetter('p');
  }
    
  onClickQ() {
      
      this.props.enterLetter('q');
      this.setState({qDisable: true});
      this.checkLetter('q');
  }
    
  onClickR() {
      
      this.props.enterLetter('r');
      this.setState({rDisable: true});
      this.checkLetter('r');
  }
    
  onClickS() {
      
      this.props.enterLetter('s');
      this.setState({sDisable: true});
      this.checkLetter('s');
  }
    
  onClickT() {
      
      this.props.enterLetter('t');
      this.setState({tDisable: true});
      this.checkLetter('t');
  }
    
  onClickU() {
      
      this.props.enterLetter('u');
      this.setState({uDisable: true});
      this.checkLetter('u');
  }
    
  onClickV() {
      
      this.props.enterLetter('v');
      this.setState({vDisable: true});
      this.checkLetter('v');
  }
    
  onClickW() {
      
      this.props.enterLetter('w');
      this.setState({wDisable: true});
      this.checkLetter('w');
  }
    
  onClickX() {
      
      this.props.enterLetter('x');
      this.setState({xDisable: true});
      this.checkLetter('x');
  }
    
  onClickY() {
      
      this.props.enterLetter('y');
      this.setState({yDisable: true});
      this.checkLetter('y');
  }
    
  onClickZ() {
      
      this.props.enterLetter('z');
      this.setState({zDisable: true});
      this.checkLetter('z');
  }
    

  checkLetter(letter){
      
      var temp = this.props.emptyArr;
      var temp2 = this.props.correctArr;
      
      for(var i = 0; i < this.props.correctArr.length; i++){
          if(this.props.correctArr[i] === letter){
              temp[i] = letter + " ";
          }
      }
      
      if(this.state.initialWord.indexOf(letter) === -1){
          this.setState({counter: this.state.counter-1, death: this.state.death+1});
      }
      
      console.log(temp2);
      this.props.emptyArrUpdate(temp);
      
      console.log("this is from buttonLayout " + this.props.emptyArr);
  }

    
  renderInitialWord(){

      var getURL = `https://www.google.co.jp/search?q=${this.state.initialWord}`
      if(this.state.counter === 0){
          return(
            <div>
                <h1><a href = {getURL} target = "_blank">{this.state.initialWord}</a></h1>
                <h5 className = "spaceOut">Brief Definition</h5>
                {this.getDefinition()}
            </div>
          )
      }
      
  }

  getDefinition() {
      
      
      return(
      
        <div className = "leftFormat">
          <h7>&nbsp; &nbsp; {this.state.partOfSpeech}</h7>
          <h5>{this.state.definition}</h5>
          <h6>-{this.state.attributionText}</h6>
        </div>
      )
  }
    
  forceInitialWord(){
      this.setState({counter: 0});
  }
    
  render() {
    return (
      <div className = 'container2'>
        <ButtonToolbar>
            <Button bsClass = "btn" onClick = {this.onClickA.bind(this)} disabled =                       {this.state.aDisable}>a</Button>
            <Button bsClass = "btn" onClick = {this.onClickB.bind(this)} disabled =                       {this.state.bDisable}>b</Button>
            <Button bsClass = "btn" onClick = {this.onClickC.bind(this)} disabled =                       {this.state.cDisable}>c</Button>
            <Button bsClass = "btn" onClick = {this.onClickD.bind(this)} disabled =                       {this.state.dDisable}>d</Button>
            <Button bsClass = "btn" onClick = {this.onClickE.bind(this)} disabled =                       {this.state.eDisable}>e</Button>
            <Button bsClass = "btn" onClick = {this.onClickF.bind(this)} disabled =                       {this.state.fDisable}>f</Button>
            <Button bsClass = "btn" onClick = {this.onClickG.bind(this)} disabled =                       {this.state.gDisable}>g</Button>
            <Button bsClass = "btn" onClick = {this.onClickH.bind(this)} disabled =                       {this.state.hDisable}>h</Button>
            <Button bsClass = "btn" onClick = {this.onClickI.bind(this)} disabled =                       {this.state.iDisable}>i</Button>
            <Button bsClass = "btn" onClick = {this.onClickJ.bind(this)} disabled =                       {this.state.jDisable}>j</Button>
        </ButtonToolbar>
        
        <ButtonToolbar>
            <Button bsClass = "btn" onClick = {this.onClickK.bind(this)} disabled =                       {this.state.kDisable}>k</Button>
            <Button bsClass = "btn" onClick = {this.onClickL.bind(this)} disabled =                       {this.state.lDisable}>l</Button>
            <Button bsClass = "btn" onClick = {this.onClickM.bind(this)} disabled =                       {this.state.mDisable}>m</Button>
            <Button bsClass = "btn" onClick = {this.onClickN.bind(this)} disabled =                       {this.state.nDisable}>n</Button>
            <Button bsClass = "btn" onClick = {this.onClickO.bind(this)} disabled =                       {this.state.oDisable}>o</Button>
            <Button bsClass = "btn" onClick = {this.onClickP.bind(this)} disabled =                       {this.state.pDisable}>p</Button>
            <Button bsClass = "btn" onClick = {this.onClickQ.bind(this)} disabled =                       {this.state.qDisable}>q</Button>
            <Button bsClass = "btn" onClick = {this.onClickR.bind(this)} disabled =                       {this.state.rDisable}>r</Button>
            <Button bsClass = "btn" onClick = {this.onClickS.bind(this)} disabled =                       {this.state.sDisable}>s</Button>
            <Button bsClass = "btn" onClick = {this.onClickT.bind(this)} disabled =                       {this.state.tDisable}>t</Button>
        </ButtonToolbar>
        
        <ButtonToolbar>
            <Button bsClass = "btn" onClick = {this.onClickU.bind(this)} disabled =                       {this.state.uDisable}>u</Button>
            <Button bsClass = "btn" onClick = {this.onClickV.bind(this)} disabled =                       {this.state.vDisable}>v</Button>
            <Button bsClass = "btn" onClick = {this.onClickW.bind(this)} disabled =                       {this.state.wDisable}>w</Button>
            <Button bsClass = "btn" onClick = {this.onClickX.bind(this)} disabled =                       {this.state.xDisable}>x</Button>
            <Button bsClass = "btn" onClick = {this.onClickY.bind(this)} disabled =                       {this.state.yDisable}>y</Button>
            <Button bsClass = "btn" onClick = {this.onClickZ.bind(this)} disabled =                       {this.state.zDisable}>z</Button>
        </ButtonToolbar>
      
      
    
        <div className = 'container3'>
            {this.renderInitialWord()}
            <RenderSpaces emptyArr = {this.state.renderArray} correctArr = {this.state.correctArray} />
            <div className  = "spaceOut">
                <Button style = {{width:140}} onClick = {this.fetchWord.bind(this)}>Play again?</Button>
                <Button style = {{width:140}} onClick = {this.forceInitialWord.bind(this)}>Give Up?</Button>
            </div>
            
            <div className = 'container3'>
                <h2>You have {this.state.counter} lives remaining!</h2>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    
    const {currentLetter, emptyArr, correctArr} = state.word;
    return {currentLetter, emptyArr, correctArr};

};


export default connect (mapStateToProps, {enterLetter, emptyArrUpdate, correctArrUpdate})(ButtonLayout);



