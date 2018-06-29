import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setToDelete } from '../actions'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
  }

  handleClick(e) {
	  e.target.nextSibling.classList.toggle("show");
  }

  handleClickChange(e) {
  	this.setState({
  		active: e.target.checked
  	})
  }

  handleFadeOut(e) {
	e.target.parentElement.parentElement.parentElement.parentElement.classList.add("hide");
  }

  render() {
  	return (
		<div className="w-screen">
		  <div className="card lg:border-l-0 lg:border-grey-light lg:rounded-b-none lg:rounded-r hover:bg-grey-lighter">
		    <div className="m-8">
			  {this.props.name}
		      <p className="card-comments max-w-lg">
		        Number of comments {this.props.num_comments}
		      </p>
		      <div className="card-title">
		        {this.props.title}</div>
		      <h3 className="text-grey-darker text-base max-w-lg">Category: {this.props.subreddit_name_prefixed}</h3>
			  <div className="popup flex items-center mt-8">
			    <img className={this.props.className} src={this.props.thumbnail} alt="" onClick={this.handleClick}/>
			    <img className="popupimg" id="myPopup" alt="" src={this.props.thumbnail} />
			    <div className="text-sm">
			      <p className="text-black leading-none">{this.props.author}
			        </p>
			      <p className="text-grey-dark">{this.props.created_utc}
			        </p>
			    </div>
			  </div>
			  <div className="flex items-center float-right margin-right-8rem">
			    {
			    	this.state.active ? <h4 className="mr-8">Read</h4>
			    	:<h4 className="mr-8">Unread</h4>
			    }
			    <label className="switch">
				  <input 
				    type="checkbox"
				    onClick={this.handleClickChange}
				    onChange={this.props.handleToDelete} 
				    checked={this.props.checked}
				    name={this.props.author}
				  />
				  <span className="slider round"></span>
				</label>
			  </div>
			  <div className="flex items-center float-right margin-right-8rem">
			  	{
			    	this.state.active ? 
			    		<button 
						  className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative bottom-half-rem"
						  onClick={this.handleFadeOut}
						>
					    	<h3>Delete</h3>
					  	</button> : ''
			    }
			  </div>
			</div>   
		  </div>
		</div>
    );
  }
}

const mapStateToProps = state => state.setToDeleteReducer

const mapDispatchToProps = (dispatch) => ({
  handleToDelete(e) {
    dispatch(setToDelete({
    	checked: e.target.checked,
    	name: e.target.name 
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card)
