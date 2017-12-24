import React from 'react'
import App from './App'
import Home from './home'
import {Route,Router, browserHistory, IndexRoute} from 'react-router'

  

  const Nav=()=>(




<Router history={browserHistory}>
<Route path='/' component={Home}/>
        <Route path='/Game' component={App}/>
</Router>
  )

  export default Nav