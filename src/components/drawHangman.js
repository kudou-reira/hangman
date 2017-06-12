import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Line, Stage, Group} from 'react-konva';

class DrawHangman extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        color: 'green'
      };
    }
    
    displayHang(){
        
        if(this.props.counter === 9){
            return(
                <Layer>
                    <Line
                        points = {[0, 325, 400, 325]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 8){
            return(
                
                <Layer>
                    <Line
                        points = {[30, 325, 400, 325]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 325, 30, 100]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
            
        }
        
    }
    
    render() {

        return (
            <Stage width={1000} height={1000}>
                {this.displayHang()}
            </Stage>
        )
    
    }
    
    
}

export default DrawHangman;