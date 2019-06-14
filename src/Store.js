import React, { createContext, useReducer } from 'react'
import io from 'socket.io-client'

export const Context = createContext()

const initialState = {
  General: [{ from: 'Me', msg: 'Hello!' }, { from: 'You', msg: 'Let\'s chat!' }],
  Javascript: [],
  Frameworks: []
}

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload
  switch (action.type) {
  case 'RECEIVE MESSAGE':
    return {
      ...state,
      [topic]: [
        ...state[topic],
        {
          from: from,
          msg: msg
        }
      ]
    }
  default:
    return state
  }
}

let socket

const sendChatAction = value => {
  socket.emit('chat', value)
}

const Store = props => {
  const [allChats, dispatch] = useReducer(reducer, initialState)
  if (!socket) {
    socket = io(':3001')
    socket.on('chat', data => {
      dispatch({ type: 'RECEIVE MESSAGE', payload: data })
    })
  }
  const loggedUserJSON = window.localStorage.getItem('loggedIn')
  const user = JSON.parse(loggedUserJSON)

  return (
    <Context.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </Context.Provider>
  )
}

export default Store
