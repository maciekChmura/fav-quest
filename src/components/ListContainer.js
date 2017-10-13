import React from 'react'
import { connect } from 'react-redux'
import ListPresenter from "./ListPresenter";


const mapStateToProps = (state) => {
  return (
    {
    quests: state.quests
    }
  )
}
const ListContainer = connect(mapStateToProps)(ListPresenter);

export default ListContainer;