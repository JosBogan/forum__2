import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import './styles/main.css'

import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import AuthPage from './components/auth/AuthPage'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={FrontPage}/>
            <Route path="/auth" component={AuthPage}/>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
