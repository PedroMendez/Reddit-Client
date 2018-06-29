import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Paginator extends Component { 
  render(props) { 

    const pagNumbers = this.props.numbers.map((number, i) =>
            <Link 
              key={number.toString()} 
              to={`/page-${i+1}`}
              className={this.props.className}
              footer={this.props.nav}
              numbers={this.props.numbers}
            >
              {number}
            </Link>
        )
        return (
            <div>{pagNumbers}</div>
        )
    }
}

export default Paginator
