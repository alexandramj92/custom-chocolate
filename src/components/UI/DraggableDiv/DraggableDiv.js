import React from "react";
import Draggable from "react-draggable";
import './DraggableDiv.scss';

class DraggableDiv extends React.Component {
   render(){
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
         >
         {/* <div className="drag"><img src={this.props.previewLogoInDiv} /></div> */}
         <div className="drag">{this.props.children}</div>

         </ Draggable>
      )
   }
}
export default DraggableDiv;