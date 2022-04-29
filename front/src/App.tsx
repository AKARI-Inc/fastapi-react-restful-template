import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { User } from './generated'
import { appClient } from './AppClient'

function App(): JSX.Element {
  const [data, setData] = React.useState<User | undefined>(undefined)
  useEffect(() => {
    const f = async () => {
      const d = await appClient.default.userUsersIdGet('some_id')
      setData(d)
    }
    f()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {data?.id} {data?.name}
        </p>
      </header>
    </div>
  )
}

export default App
