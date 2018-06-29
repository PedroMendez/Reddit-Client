import React, { Component } from 'react'

class SchedulerIcon extends Component { 
  render() {
    return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="25%" 
          height="15%" 
          viewBox="0 0 400 200" 
          className="float-right transform-scale-scheduler position-scheduler"
        >
          <g>
            <g>
              <path className="fill-blue" d="M139.5,27.7l-7.1,5.9c-1,0.8-1.1,2.3-0.3,3.3l4.7,5.7c0.8,1,2.3,1.1,3.3,0.3l7.1-5.9c1-0.8,1.1-2.3,0.3-3.3
                l-4.7-5.7C142,27,140.5,26.9,139.5,27.7z"/>
              <path className="fill-blue" d="M187.1,12.4l-16.2,0c-1.6,0-2.9,1.3-2.9,2.9l0,9.3c0,1.6,1.3,2.9,2.9,2.9l16.2,0c1.6,0,2.9-1.3,2.9-2.9l0-9.3
                C190.1,13.7,188.7,12.4,187.1,12.4z"/>
              <circle className="fill-green" cx="178.4" cy="83.6" r="58.9"/>
              <path className="fill-teal" d="M178,132.5c-27,0-49-22-49-49s22-49,49-49s49,22,49,49S205,132.5,178,132.5z M178,64.5c-10.5,0-19,8.5-19,19
                s8.5,19,19,19s19-8.5,19-19S188.5,64.5,178,64.5z"/>
              <path className="fill-blue" d="M196.8,81.1c0.1,0.8,0.2,1.6,0.2,2.4c0,10.5-8.5,19-19,19s-19-8.5-19-19s8.7-19,19.2-19c0.1,0-0.4,0,0.6,0
                v-30c-1,0-0.5,0-0.6,0c-27,0-49.1,22-49.1,49s21.9,49,48.9,49s49-22,49-49c0-0.8,0-1.6-0.1-2.4H196.8z"/>
              <path d="M181.8,73.5c-0.8-0.3-1.6-0.6-2.4-0.7l-8.7-25.8c-0.7-2.1-3-3.2-5-2.5s-3.2,3-2.5,5l8.5,25.1
                c-1.5,1.1-2.7,2.5-3.5,4.4c-2.3,5.3,0.2,11.4,5.5,13.7c5.3,2.3,11.4-0.2,13.7-5.5C189.5,81.9,187.1,75.7,181.8,73.5z M176.4,86.1
                c-1.7-0.7-2.5-2.7-1.7-4.3s2.7-2.5,4.3-1.7s2.5,2.7,1.7,4.3C180,86,178.1,86.8,176.4,86.1z"/>
            </g>
          </g>
        </svg>
    )  
  }
}

export default SchedulerIcon;