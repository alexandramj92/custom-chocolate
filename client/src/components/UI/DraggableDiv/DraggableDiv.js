import React from "react";
import Draggable from "react-draggable";
import './DraggableDiv.scss';

class DraggableDiv extends React.Component {
   render(){
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

      return(
         
 
         <Draggable
         handle=".drag"
         defaultPosition={{x: 0, y: 0}}
         position={null}
         grid={[5, 5]}
         scale={1}
         onStart={this.handleStart}
         onDrag={this.handleDrag}
         onStop={this.handleStop}
         bounds= "parent"
         {...dragHandlers}
         >
         <div className="drag">{this.props.children}</div>

         </ Draggable>

      )
   }
}
export default DraggableDiv;