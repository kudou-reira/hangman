import {
  A_CHANGE,
  RESET

} from '../actions/types';



const INITIAL_STATE = {

    currentLetter: ''
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
            
      case A_CHANGE:
        return {...state, currentLetter: action.payload}
    
      case RESET:
        return INITIAL_STATE;
      
      default:
        return state;

    }


};
