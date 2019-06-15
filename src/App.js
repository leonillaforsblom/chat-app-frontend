import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChatBox from './components/Chatbox'
import Login from './components/Login'
import { Button } from 'semantic-ui-react'
import Store from './Store'

const App = () => {
  const [userName, setIsUserName] = useState('')
  const [loggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedIn')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setIsLoggedIn(user)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    if (userName.length < 1) return
    if (event.key === 'Enter') await axios.post('/login', { userName })
    window.localStorage.setItem('loggedIn', JSON.stringify(userName))
    window.location.reload()
  }

  const handleUsername = event => {
    setIsUserName(event.target.value)
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedIn')
    window.location.reload()
  }

  return (
    <div>
      {loggedIn === null ? (
        <div>
          <div className='loginHeader'>
            <h1>Login and chat with others</h1>
          </div>
          <Login
            username={userName}
            usernameHandler={handleUsername}
            login={handleLogin}
          />
        </div>
      ) : (
        <div>
          <div className='headerContainer'>
            <h1>Select a topic and start chatting!</h1>
            <Button className='actionBtn' basic color='teal' content='Logout' onClick={() => handleLogout()} />
          </div>
          <Store>
            <ChatBox />
          </Store>
        </div>
      )}
    </div>
  )
}

export default App
