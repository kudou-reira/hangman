import {A_CHANGE, RESET} from './types';

export const enterA = (text) => {

    return {
        type: A_CHANGE,
        payload: text
    }

}

export const restore = () => {
    
    return {
        type: RESET,
        payload: null
        
    }
}

