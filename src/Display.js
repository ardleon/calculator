import React from 'react';

function Display(props) {
  return (
    <div className="Container VDirection" id="Display">
      <div id="Operations">{props.operation}</div>
      <div id="Result">{props.number}</div>
    </div>
  );
}

export default Display;
