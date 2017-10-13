import React from 'react'
import AddQuestPresenter from "./AddQuestPresenter";
import { connect } from 'react-redux'
import { addQuest } from '../actions'


const mapDispatchToProps = (dispatch) => {
  return (
    {
      onSubmit: (text) => {
        dispatch(addQuest(text))
      }
    }
  )
}

let AddQuestContainer = connect(null, mapDispatchToProps)(AddQuestPresenter);

export default AddQuestContainer;
