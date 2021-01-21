import React from 'react'
import ReactDOM from 'react-dom'

import { Switch, BrowserRouter, Route } from 'react-router-dom'

import FrontPage from './FrontPage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={FrontPage}/>

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

// async function getDinoData() {
//   const response = await fetch('/api/boards')
//   const data = await response.json()
//   console.log(data)
// }

// getDinoData()