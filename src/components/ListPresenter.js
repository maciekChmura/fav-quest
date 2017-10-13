import React from 'react'

const ListPresenter = ({quests}) => {
  console.log(quests)
  if(quests.length === 0) {
    return (
      <p>add quests</p>
    )
  }
  return(
    <ul>
      {quests.map((quest, index) => {
        return (
          <div key={index}>{quest.text}</div>
        )
      })}
    </ul>
  )
}



export default ListPresenter;