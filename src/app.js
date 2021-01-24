import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import './styles/main.css'

import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import AuthPage from './components/auth/AuthPage'
import Post from './components/post/Post'
import LoginRegister from './components/auth/LoginRegister'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main className="main">
          <section className="content_section">
            <Switch>
              <Route exact path="/" component={FrontPage}/>
              <Route path="/auth" component={AuthPage}/>
              <Route path="/posts/:id" component={Post}/>
            </Switch>
          </section>
          <aside className="sidebar_section">
            <LoginRegister />
          </aside>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
