import React from 'react'
//import { connect } from 'react-redux'
//import { addQuest } from '../actions'


let AddQuestPresenter = ({onSubmit}) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(input.value);
        }}>
        <input ref={node => input = node}/>      
        <button type="submit"> add Quest </button>
        </form> 
    </div>
  )
}



export default AddQuestPresenter;