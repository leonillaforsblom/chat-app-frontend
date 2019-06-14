import React, { useContext, useState } from 'react'
import { Label } from 'semantic-ui-react'
import { Context } from '../Store'
import Form from './Form'
import Topics from './Topics'

const Chatbox = () => {
  const { allChats } = useContext(Context)
  const topics = Object.keys(allChats)
  const [activeTopic, selectActicveTopic] = useState(topics[0])

  return (
    <div className='appContainer'>
      <Topics topics={topics} selectTopic={selectActicveTopic} />
      <div className='chatInputWrapper'>
        <div className='chatBox'>
          {allChats[activeTopic].map((e, i) => {
            return (
              <div key={i} className='message'>
                <Label key={i} color='teal'>
                  {e.from}
                </Label>
                <span className='messageText' key={e.msg}>
                  {e.msg}
                </span>
              </div>
            )
          })}
        </div>
        <Form topic={activeTopic} />
      </div>
    </div>
  )
}

export default Chatbox
