import React, { useState, useContext } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Context } from '../Store'

const Form = ({ topic }) => {
  const { user, sendChatAction } = useContext(Context)
  const [message, setMessage] = useState('')

  const handleMessage = event => {
    setMessage(event.target.value)
  }

  const clickHandler = event => {
    if (message.length < 1) return
    if (event.key === 'Enter') {
      event.preventDefault()
      sendChatAction({ from: user, msg: message, topic: topic })
      setMessage('')
    }
  }

  return (
    <div className='inputContainer'>
      <form>
        <Input
          className='inputField'
          value={message}
          placeholder='New message'
          onChange={handleMessage}
          onKeyPress={clickHandler}
          autoFocus={true}
        />
        <Button
          className='actionBtn'
          basic
          color='teal'
          content='Send'
          onClick={event => {
            event.preventDefault()
            if (message.length < 1) return
            sendChatAction({ from: user, msg: message, topic: topic })
            setMessage('')
          }}
        />
      </form>
    </div>
  )
}

export default Form
