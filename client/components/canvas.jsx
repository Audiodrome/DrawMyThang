import React from 'react';

const whiteboard = {
  height: "100%",
  width: "100%",
  position: "absolute",
  border: "0.1rem solid #ddd",
  borderRadius: "0.3rem",
  // left: 0;
  // right: 0;
  // bottom: 0;
  // top: 0;
}

class Canvas extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <canvas id="draw-comp"></canvas>
    )
  };
};

export default Canvas;