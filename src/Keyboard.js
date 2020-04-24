import React from 'react';

function Keyboard(props) {
  return (
    <div className="Container VDirection ParentSize" id="Keyboard" onClick={props.onKeyboardClick} >
      <div className="Container ParentSize">
        <div id="clear" className="Container ParentSize CenterContent Operation">clear</div> 
        <div id="/" className="Container CenterContent Operation">&#247;</div> 
      </div>
      <div className="Container ParentSize">
        <div id="7" className="Container ParentSize CenterContent Number">7</div> 
        <div id="8" className="Container ParentSize CenterContent Number">8</div> 
        <div id="9" className="Container ParentSize CenterContent Number">9</div> 
        <div id="*" className="Container CenterContent Operation">&#215;</div> 
      </div>
      <div className="Container ParentSize">
        <div id="4" className="Container ParentSize CenterContent Number">4</div> 
        <div id="5" className="Container ParentSize CenterContent Number">5</div> 
        <div id="6" className="Container ParentSize CenterContent Number">6</div> 
        <div id="+" className="Container CenterContent Operation">&#43;</div> 
      </div>
      <div className="Container ParentSize">
        <div id="0" className="Container ParentSize CenterContent Number">0</div> 
        <div id="1" className="Container ParentSize CenterContent Number">1</div> 
        <div id="2" className="Container ParentSize CenterContent Number">2</div> 
        <div id="3" className="Container ParentSize CenterContent Number">3</div> 
        <div id="-" className="Container CenterContent Operation">&#8722;</div> 
        
      </div>
    </div>
  );
}

export default Keyboard;
