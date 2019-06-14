import React from 'react'
import { Button } from 'semantic-ui-react'

const Topics = ({ topics, selectTopic }) => {
  const chatTopics = topics.map((e, i) => (
    <Button
      id='topicSelector'
      color='teal'
      key={i}
      toggle
      active={false}
      onClick={e => selectTopic(e.target.innerText)}
    >
      {e}
    </Button>
  ))
  return <div className='topicDiv'>{chatTopics}</div>
}

export default Topics
