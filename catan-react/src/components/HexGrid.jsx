import React from 'react';

const HexGrid = ({layout}) => {

  const getColor = (position) => {
    let colors = {
      "wo": "green",
      "wh": "yellow",
      "sh": "lightgreen",
      "br": "red",
      "st": "gray",
      "de": "olive"
    }

    return colors[layout[position]]
  }
  
  return (
    <div>
      <svg className="hexgrid" viewBox="0 0 100 100">
        <defs>
          <g id="pod">
            <polygon stroke="#000" stroke-width="0.5" points="9,-5 0,-10 -9,-5 -9,5 0,10 9,5" />
          </g>
        </defs>

        <g class="pod-wrap">
          // Row 1
          <use xlinkHref="#pod" position="0" style={{fill: getColor(0)}} transform="translate(32, 20)"/>
          <use xlinkHref="#pod" position="1" style={{fill: getColor(1)}} transform="translate(50, 20)"/>
          <use xlinkHref="#pod" position="2" style={{fill: getColor(2)}} transform="translate(68, 20)"/>
          // Row 2
          <use xlinkHref="#pod" position="11" style={{fill: getColor(11)}} transform="translate(23, 35)"/>
          <use xlinkHref="#pod" position="12" style={{fill: getColor(12)}} transform="translate(41, 35)"/>
          <use xlinkHref="#pod" position="13" style={{fill: getColor(13)}} transform="translate(59, 35)"/>
          <use xlinkHref="#pod" position="3" style={{fill: getColor(3)}} transform="translate(77, 35)"/>
          // Row 3
          <use xlinkHref="#pod" position="10" style={{fill: getColor(10)}} transform="translate(14, 50)"/>
          <use xlinkHref="#pod" position="17" style={{fill: getColor(17)}} transform="translate(32, 50)"/>
          <use xlinkHref="#pod" position="18" style={{fill: getColor(18)}} transform="translate(50, 50)"/>
          <use xlinkHref="#pod" position="14" style={{fill: getColor(14)}} transform="translate(68, 50)"/>
          <use xlinkHref="#pod" position="4" style={{fill: getColor(4)}} transform="translate(86, 50)"/>
          // Row 4
          <use xlinkHref="#pod" position="19" style={{fill: getColor(9)}} transform="translate(23, 65)"/>
          <use xlinkHref="#pod" position="16" style={{fill: getColor(16)}} transform="translate(41, 65)"/>
          <use xlinkHref="#pod" position="15" style={{fill: getColor(15)}} transform="translate(59, 65)"/>
          <use xlinkHref="#pod" position="5" style={{fill: getColor(5)}} transform="translate(77, 65)"/>
          // Row 5
          <use xlinkHref="#pod" position="8" style={{fill: getColor(8)}} transform="translate(32, 80)"/>
          <use xlinkHref="#pod" position="7" style={{fill: getColor(7)}} transform="translate(50, 80)"/>
          <use xlinkHref="#pod" position="6" style={{fill: getColor(6)}} transform="translate(68, 80)"/>
        </g>
      </svg>
    </div>
  )
}

export default HexGrid
