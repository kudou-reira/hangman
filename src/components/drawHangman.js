import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Line, Circle, Stage, Group} from 'react-konva';

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
                        points = {[30, 325, 400, 325]}
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
            
        }
        
        else if(this.props.counter === 7){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 245, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 6){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
            
        }
        
        else if(this.props.counter === 5){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Circle
                        x = {230}
                        y = {115}
                        radius = {20}
                        stroke = {'red'}
                        strokeWidth = {3}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 4){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Circle
                        x = {230}
                        y = {115}
                        radius = {20}
                        stroke = {'red'}
                        strokeWidth = {3}
                    />
                    <Line
                        points = {[230, 135, 230, 205]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 3){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Circle
                        x = {230}
                        y = {115}
                        radius = {20}
                        stroke = {'red'}
                        strokeWidth = {3}
                    />
                    <Line
                        points = {[230, 135, 230, 205]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[200, 155, 260, 155]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 2){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Circle
                        x = {230}
                        y = {115}
                        radius = {20}
                        stroke = {'red'}
                        strokeWidth = {3}
                    />
                    <Line
                        points = {[230, 135, 230, 205]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[200, 155, 260, 155]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[230, 205, 205, 245]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                </Layer>
            )
        }
        
        else if(this.props.counter === 1){
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
                        points = {[30, 325, 30, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[30, 60, 230, 60]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Line
                        points = {[230, 60, 230, 95]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                    <Circle
                        x = {230}
                        y = {115}
                        radius = {20}
                        stroke = {'red'}
                        strokeWidth = {3}
                    />
                    <Line
                        points = {[230, 135, 230, 205]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[200, 155, 260, 155]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[230, 205, 205, 245]}
                        stroke = {'red'}
                        strokeWidth = {3}
                        lineCap = {'round'}
                        lineJoin = {'round'}
                    />
                
                    <Line
                        points = {[230, 205, 255, 245]}
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