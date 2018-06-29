import React, { Component } from 'react'

class SecurityIcon extends Component { 
  render() {
  	return (
      <svg 
        id="icon" 
        xmlns="http://www.w3.org/2000/svg" 
        width="25%" 
        height="15%" 
        viewBox="0 0 200 200" 
        className="float-right transform-svg"
      >
        <title>security</title>
        <path 
          className="fill-teal" 
          d="M231.83,204.66H51.64a1.33,1.33,0,0,1-1.33-1.33V62.45a1.33,1.33,0,0,1,1.33-1.33H231.83a1.33,1.33,0,0,1,1.33,1.33V203.32A1.33,1.33,0,0,1,231.83,204.66ZM224.09,70.51H59.37v106H224.09v-106Z" 
          transform="translate(-50.31 -61.12)"
        />
        <polygon 
          className="fill-teal" 
          points="129.51 175.23 53.34 175.23 75.19 141.28 107.66 141.28 129.51 175.23"
        />
        <rect 
          className="fill-teal" 
          x="45.83" 
          y="168.78" 
          width="91.19" 
          height="6.45"
        />
        <path 
          className="fill-green" 
          d="M171.46,116h-5.55v-12a24,24,0,1,0-48,0v12h-5.54a4.85,4.85,0,0,0-4.84,4.86v42a4.85,4.85,0,0,0,4.84,4.86h59a4.85,4.85,0,0,0,4.84-4.86v-42A4.85,4.85,0,0,0,171.46,116Zm-44.29-12a14.76,14.76,0,1,1,29.52,0v12H127.17v-12Zm7.38,32.48a7.38,7.38,0,1,1,11.38,6.22s0.72,4.37,1.53,9.52a2.77,2.77,0,0,1-2.77,2.78h-5.54a2.77,2.77,0,0,1-2.77-2.78l1.53-9.52A7.4,7.4,0,0,1,134.55,136.56Z" 
          transform="translate(-50.31 -61.12)"
        />
      </svg>
    )  
  }
}

export default SecurityIcon;