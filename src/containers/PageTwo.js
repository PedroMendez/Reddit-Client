import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Card from '../components/Card'
import '../css/tailwind.css'
import LoadingSpinner from '../loading/LoadingSpinner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import moment from 'moment'
import ReportIcon from './../icons/ReportIcon'
import ModuleIcon from './../icons/ModuleIcon'
import SchedulerIcon from './../icons/SchedulerIcon'
import SecurityIcon from './../icons/SecurityIcon'

class PageTwo extends Component {

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { posts, isFetching } = this.props 
    const isEmpty = posts.length === 0
    const dataOne = []
    posts.forEach((post, index) => {   
      if(index > 9 && index < 19) {
        dataOne.push(  
          <Card
            key={post.id}
            name={
              index % 4 === 0 ?  <SchedulerIcon /> : index % 4 === 1 ? <ModuleIcon /> : index % 4 === 2 ? <SecurityIcon /> : <ReportIcon />
            }
            num_comments={post.num_comments}
            subreddit_name_prefixed={post.subreddit_name_prefixed.slice(2)}
            title={post.title}
            author={post.author}
            thumbnail={post.thumbnail}
            className={
              post.thumbnail?'w-10 h-10 rounded-full mr-4 pointer':'w-10 h-10 rounded-full mr-4'
            }
            created_utc={moment(post.created_utc, 'X').fromNow()} 
          />
        )
      }
    })
    return (
      <div>
        {isEmpty
          ? (isFetching ? <LoadingSpinner /> : <h2>Empty.</h2>)
          : <div>
              <Nav />
                {dataOne}
              <Footer />  
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit, setToDeleteReducer } = state
  const {
    isFetching,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    setToDeleteReducer,
    selectedSubreddit,
    posts,
    isFetching
  }
}

export default connect(mapStateToProps)(PageTwo)
