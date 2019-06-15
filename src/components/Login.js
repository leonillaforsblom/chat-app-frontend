import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const LoginForm = ({ username, usernameHandler, login }) => {

  return (
    <div className='loginPage'>
      <form onSubmit={login}>
        <Input
          className='inputField'
          value={username}
          placeholder='Write a username'
          onChange={usernameHandler}
          autoFocus={true}
        />
        <Button
          type='submit'
          className='actionBtn'
          basic
          color='teal'
          content='Login'
        />
      </form>
    </div>
  )
}

export default LoginForm
