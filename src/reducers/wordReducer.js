import {
  A_CHANGE,
  E_CHANGE,
  O_CHANGE,
  ENTER_LETTER,
  RESET,
  EMPTY_ARR,
  CORRECT_ARR

} from '../actions/types';



const INITIAL_STATE = {

    currentLetter: '',
    emptyArr: [],
    correctArr: []
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
            
      case ENTER_LETTER:
        return {...state, currentLetter: action.payload}
    
      case RESET:
        return INITIAL_STATE;
            
      case EMPTY_ARR:
        return {...state, emptyArr: action.payload}
    
      case CORRECT_ARR:
        return {...state, correctArr: action.payload}
      
      default:
        return state;

    }


};
