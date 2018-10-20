import React from 'react';

const HexGrid = ({layout}) => {
  const getColor = (position) => {
    let colors = {
      "wo": "green",
      "wh": "yellow",
      "sh": "lightgreen",
      "br": "darkred",
      "st": "gray",
      "de": "darkkhaki"
    }

    return colors[layout[position]]
  }

  const getFill = (number) => {
    if ([6, 8].includes(number)) {
      return "red"
    }

    return "beige"
  }

  let numberTiles = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]
  numberTiles.splice(layout.indexOf("de"), 0, "")

  const xValues = [13.9, 22.9, 31.9, 40.9, 50, 59, 67.7, 77, 86]
  const yValues = [23.1, 38.1, 53.1, 68.1, 83.1]

  return (
    <div>
      <svg className="chart" viewBox="0 0 100 100">
        <defs>
          <g id="pod">
            <polygon stroke="#000" strokeWidth="0.5" points="9,-5 0,-10 -9,-5 -9,5 0,10 9,5" />
          </g>
        </defs>

        {/* TODO: - Maybe refactor this mess sometime
                  - Consider changing fontSize depending on number */}
        <g className="pod-wrap">
          // Row 1
          <use xlinkHref="#pod" position="0" style={{fill: getColor(0)}} transform="translate(32, 20)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[2]} y={yValues[0]} fill={getFill(numberTiles[0])}>{numberTiles[0]}</text>

          <use xlinkHref="#pod" position="1" style={{fill: getColor(1)}} transform="translate(50, 20)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[4]} y={yValues[0]} fill={getFill(numberTiles[1])}>{numberTiles[1]}</text>

          <use xlinkHref="#pod" position="2" style={{fill: getColor(2)}} transform="translate(68, 20)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[6]} y={yValues[0]} fill={getFill(numberTiles[2])}>{numberTiles[2]}</text>

          // Row 2
          <use xlinkHref="#pod" position="11" style={{fill: getColor(11)}} transform="translate(23, 35)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[1]} y={yValues[1]} fill={getFill(numberTiles[11])}>{numberTiles[11]}</text>

          <use xlinkHref="#pod" position="12" style={{fill: getColor(12)}} transform="translate(41, 35)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[3]} y={yValues[1]} fill={getFill(numberTiles[12])}>{numberTiles[12]}</text>

          <use xlinkHref="#pod" position="13" style={{fill: getColor(13)}} transform="translate(59, 35)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[5]} y={yValues[1]} fill={getFill(numberTiles[13])}>{numberTiles[13]}</text>

          <use xlinkHref="#pod" position="3" style={{fill: getColor(3)}} transform="translate(77, 35)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[7]} y={yValues[1]} fill={getFill(numberTiles[3])}>{numberTiles[3]}</text>

          // Row 3
          <use xlinkHref="#pod" position="10" style={{fill: getColor(10)}} transform="translate(14, 50)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[0]} y={yValues[2]} fill={getFill(numberTiles[10])}>{numberTiles[10]}</text>

          <use xlinkHref="#pod" position="17" style={{fill: getColor(17)}} transform="translate(32, 50)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[2]} y={yValues[2]} fill={getFill(numberTiles[17])}>{numberTiles[17]}</text>

          <use xlinkHref="#pod" position="18" style={{fill: getColor(18)}} transform="translate(50, 50)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[4]} y={yValues[2]} fill={getFill(numberTiles[18])}>{numberTiles[18]}</text>

          <use xlinkHref="#pod" position="14" style={{fill: getColor(14)}} transform="translate(68, 50)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[6]} y={yValues[2]} fill={getFill(numberTiles[14])}>{numberTiles[14]}</text>

          <use xlinkHref="#pod" position="4" style={{fill: getColor(4)}} transform="translate(86, 50)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[8]} y={yValues[2]} fill={getFill(numberTiles[4])}>{numberTiles[4]}</text>

          // Row 4
          <use xlinkHref="#pod" position="9" style={{fill: getColor(9)}} transform="translate(23, 65)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[1]} y={yValues[3]} fill={getFill(numberTiles[9])}>{numberTiles[9]}</text>

          <use xlinkHref="#pod" position="16" style={{fill: getColor(16)}} transform="translate(41, 65)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[3]} y={yValues[3]} fill={getFill(numberTiles[16])}>{numberTiles[16]}</text>

          <use xlinkHref="#pod" position="15" style={{fill: getColor(15)}} transform="translate(59, 65)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[5]} y={yValues[3]} fill={getFill(numberTiles[15])}>{numberTiles[15]}</text>

          <use xlinkHref="#pod" position="5" style={{fill: getColor(5)}} transform="translate(77, 65)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[7]} y={yValues[3]} fill={getFill(numberTiles[5])}>{numberTiles[5]}</text>

          // Row 5
          <use xlinkHref="#pod" position="8" style={{fill: getColor(8)}} transform="translate(32, 80)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[2]} y={yValues[4]} fill={getFill(numberTiles[8])}>{numberTiles[8]}</text>

          <use xlinkHref="#pod" position="7" style={{fill: getColor(7)}} transform="translate(50, 80)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[4]} y={yValues[4]} fill={getFill(numberTiles[7])}>{numberTiles[7]}</text>

          <use xlinkHref="#pod" position="6" style={{fill: getColor(6)}} transform="translate(68, 80)"/>
          <text className="number-tile" text-anchor="middle" x={xValues[6]} y={yValues[4]} fill={getFill(numberTiles[6])}>{numberTiles[6]}</text>
        </g>
      </svg>
    </div>
  )
}

export default HexGrid
