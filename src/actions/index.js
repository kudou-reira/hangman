import {ENTER_LETTER, RESET, EMPTY_ARR, CORRECT_ARR, NO_SPACE} from './types';

export const emptyArrUpdate = (emptyArr) => {
    
    return {
        type: EMPTY_ARR,
        payload: emptyArr
    }
}

export const correctArrUpdate = (correctArr) => {
    
    return {
        type: CORRECT_ARR,
        payload: correctArr
    }
}

export const noSpaceUpdate = (noSpaceArr) => {

    return {
        type: NO_SPACE,
        payload: noSpaceArr
    }

}

export const enterLetter = (text) => {

    return {
        type: ENTER_LETTER,
        payload: text
    }

}




export const restore = () => {
    
    return {
        type: RESET,
        payload: null
        
    }
}

