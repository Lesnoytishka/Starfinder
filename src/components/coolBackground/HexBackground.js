import React from 'react';
import '../coolBackground/style.css';

function HexBackground() {
  const cursorRef = React.createRef();

  let rowCount = (window.screen.height / 110) + 3;
  let hexCount = (window.screen.width / 110) + 3;

  const hex = (hexKey) => {
    return React.createElement("div", {className: "hexagon", key: hexKey});
  }

  const hexesRow = () => {
    const hexArr = [];
    for (let i = 0; i < hexCount; i++) {
      hexArr.push(hex(i));
    }
    return hexArr;
  }

  const row = (rowKey) => {
    return React.createElement("div", {className: "row", key: rowKey}, hexesRow());
  }
  const rows = () => {
    const rowArr = [];
    for (let i = 0; i < rowCount; i++) {
      rowArr.push(row(i));
    }
    return rowArr;
  }

  const bgHexes = () => React.createElement("div", {}, rows());


  const mouseMoveHandle = () => {
    document.addEventListener('mousemove', function (ev) {
      let pointX = ev.clientX;
      let pointY = ev.clientY;

      const cu = document.querySelector(".curser");
      if (cu) {
        cu.style.left = pointX + "px";
        cu.style.top = pointY + "px";
      }
    });
  }

  return (
    <div className="background-container" >
      <div className="curser" ref={cursorRef} />
      {row}
      {bgHexes()}
      {mouseMoveHandle()}
    </div>
  );
}

export default HexBackground;
