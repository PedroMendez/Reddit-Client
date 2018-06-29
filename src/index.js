import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingSpinner from './loading/LoadingSpinner'
import './css/tailwind.css'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const Loading = () => <LoadingSpinner />;

const PageOne = Loadable({
  loader: () => import('./containers/PageOne'),
  loading: Loading,
});

const Nav = Loadable({
  loader: () => import('./components/Nav'),
  loading: Loading,
});

const PageTwo = Loadable({
  loader: () => import('./containers/PageTwo'),
  loading: Loading,
});

const PageThree = Loadable({
  loader: () => import('./containers/PageThree'),
  loading: Loading,
});

const PageFour = Loadable({
  loader: () => import('./containers/PageFour'),
  loading: Loading,
});

const PageFive = Loadable({
  loader: () => import('./containers/PageFive'),
  loading: Loading,
});

const AppRouter = () => (
  <Router>
    <div>
      <Switch> 
  	    <Route exact path="/" component={PageOne} />
  	    <Route path="/index" component={PageOne} />
  	    <Route path="/page-1" component={PageOne} />
  	    <Route path="/page-2" component={PageTwo} />
  	    <Route path="/page-3" component={PageThree} />
  	    <Route path="/page-4" component={PageFour} />
  	    <Route path="/page-5" component={PageFive} />
  	    <Route component={NoMatch} />
  	  </Switch>    
    </div>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <Nav />
	  <p className="no-match">
	    No match for <code>{location.pathname}</code>
	  </p>
  </div>
);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
