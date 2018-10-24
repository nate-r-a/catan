import React from 'react'

const BlankHexGrid = () => {
  let resourceArray = ["wo", "wh", "sh", "br", "st", "de"]
  let colors = {
    "wo": "green",
    "wh": "yellow",
    "sh": "lightgreen",
    "br": "darkred",
    "st": "gray",
    "de": "darkkhaki"
  }

  const setFill = (event) => {
    let position = event.target.getAttribute("position")
    let resource = event.target.getAttribute("resource")
    let newResource

    if (resource == undefined) {
      newResource = "wo"
      event.target.setAttribute("resource", "wo")
      event.target.style.fill = "green"
    } else {
      console.log(resource)
      let resourceIndex = resourceArray.indexOf(resource)
      newResource = resourceArray[(resourceIndex+1) % 6]
      console.log(newResource)
      event.target.setAttribute("resource", newResource)
      event.target.style.fill = colors[newResource]
    }

    document.querySelector('span[position="' + position + '"]').textContent = newResource
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
          <use xlinkHref="#pod" onClick={setFill} position="0" transform="translate(32, 20)"/>
          <use xlinkHref="#pod" onClick={setFill} position="1" transform="translate(50, 20)"/>
          <use xlinkHref="#pod" onClick={setFill} position="2" transform="translate(68, 20)"/>
          // Row 2
          <use xlinkHref="#pod" onClick={setFill} position="11" transform="translate(23, 35)"/>
          <use xlinkHref="#pod" onClick={setFill} position="12" transform="translate(41, 35)"/>
          <use xlinkHref="#pod" onClick={setFill} position="13" transform="translate(59, 35)"/>
          <use xlinkHref="#pod" onClick={setFill} position="3" transform="translate(77, 35)"/>
          // Row 3
          <use xlinkHref="#pod" onClick={setFill} position="10" transform="translate(14, 50)"/>
          <use xlinkHref="#pod" onClick={setFill} position="17" transform="translate(32, 50)"/>
          <use xlinkHref="#pod" onClick={setFill} position="18" transform="translate(50, 50)"/>
          <use xlinkHref="#pod" onClick={setFill} position="14" transform="translate(68, 50)"/>
          <use xlinkHref="#pod" onClick={setFill} position="4" transform="translate(86, 50)"/>
          // Row 4
          <use xlinkHref="#pod" onClick={setFill} position="19" transform="translate(23, 65)"/>
          <use xlinkHref="#pod" onClick={setFill} position="16" transform="translate(41, 65)"/>
          <use xlinkHref="#pod" onClick={setFill} position="15" transform="translate(59, 65)"/>
          <use xlinkHref="#pod" onClick={setFill} position="5" transform="translate(77, 65)"/>
          // Row 5
          <use xlinkHref="#pod" onClick={setFill} position="8" transform="translate(32, 80)"/>
          <use xlinkHref="#pod" onClick={setFill} position="7" transform="translate(50, 80)"/>
          <use xlinkHref="#pod" onClick={setFill} position="6" transform="translate(68, 80)"/>
        </g>
      </svg>

      <p>
        <span position="0"></span>
        <span position="1"></span>
        <span position="2"></span>
        <span position="3"></span>
        <span position="4"></span>
        <span position="5"></span>
        <span position="6"></span>
        <span position="7"></span>
        <span position="8"></span>
        <span position="9"></span>
        <span position="10"></span>
        <span position="11"></span>
        <span position="12"></span>
        <span position="13"></span>
        <span position="14"></span>
        <span position="15"></span>
        <span position="16"></span>
        <span position="17"></span>
        <span position="18"></span>
      </p>
    </div>
  )
}

export default BlankHexGrid
