import React from 'react';

const HexGrid = ({layout}) =>
  <svg className="hexgrid" viewBox="0 0 100 100">
    <defs>
      <g id="pod">
        <polygon stroke="#000" stroke-width="0.5" points="9,-5 0,-10 -9,-5 -9,5 0,10 9,5" />
      </g>
    </defs>

    <g class="pod-wrap">
      // Row 1
      <use xlinkHref="#pod" position="0" style={{fill: 'red'}} transform="translate(32, 20)"/>
      <use xlinkHref="#pod" position="1" style={{fill: 'red'}} transform="translate(50, 20)"/>
      <use xlinkHref="#pod" position="2" style={{fill: 'red'}} transform="translate(68, 20)"/>
      // Row 2
      <use xlinkHref="#pod" position="12" style={{fill: 'red'}} transform="translate(23, 35)"/>
      <use xlinkHref="#pod" position="13" style={{fill: 'red'}} transform="translate(41, 35)"/>
      <use xlinkHref="#pod" position="14" style={{fill: 'red'}} transform="translate(59, 35)"/>
      <use xlinkHref="#pod" position="4" style={{fill: 'red'}} transform="translate(77, 35)"/>
      // Row 3
      <use xlinkHref="#pod" position="11" style={{fill: 'red'}} transform="translate(14, 50)"/>
      <use xlinkHref="#pod" position="18" style={{fill: 'red'}} transform="translate(32, 50)"/>
      <use xlinkHref="#pod" position="19" style={{fill: 'yellow'}} transform="translate(50, 50)"/>
      <use xlinkHref="#pod" position="15" style={{fill: 'red'}} transform="translate(68, 50)"/>
      <use xlinkHref="#pod" position="5" style={{fill: 'red'}} transform="translate(86, 50)"/>
      // Row 4
      <use xlinkHref="#pod" position="10" style={{fill: 'red'}} transform="translate(23, 65)"/>
      <use xlinkHref="#pod" position="17" style={{fill: 'red'}} transform="translate(41, 65)"/>
      <use xlinkHref="#pod" position="16" style={{fill: 'red'}} transform="translate(59, 65)"/>
      <use xlinkHref="#pod" position="6" style={{fill: 'red'}} transform="translate(77, 65)"/>
      // Row 5
      <use xlinkHref="#pod" position="9" style={{fill: 'red'}} transform="translate(32, 80)"/>
      <use xlinkHref="#pod" position="8" style={{fill: 'red'}} transform="translate(50, 80)"/>
      <use xlinkHref="#pod" position="7" style={{fill: 'red'}} transform="translate(68, 80)"/>
    </g>
  </svg>


export default HexGrid
