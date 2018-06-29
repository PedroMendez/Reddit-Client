import React, { Component } from 'react'

class Logo extends Component { 
  render() {
  	return (
      <svg 
        className="relative logo" 
        width={this.props.width} 
        height={this.props.height} 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 78 78"
      >
        <circle 
          className="fill-blue" 
          cx="102.7" 
          cy="21.5" 
          r="21.5"
        >
        </circle>
        <circle 
          className="fill-orange" 
          cx="72.7" 
          cy="21.5" 
          r="21.5"
        >
        </circle>
      </svg>
    )  
  }
}

export default Logo