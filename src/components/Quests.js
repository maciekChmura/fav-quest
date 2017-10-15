import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import List, { ListItem, ListItemText } from 'material-ui/List';

// import AddQuest from './AddQuest';
import QuestList from './QuestList';
import { createQuest, unLoadQuest } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  createQuest: () => {
    const id = uuid();
    dispatch({
      type: 'CREATE_QUEST',
      id: id,
    })  
  },
  unLoadQuest: (quest) => {
    dispatch(unLoadQuest());
  }
});

const Quests = (props) => {
  console.log(uuid());
  return (
    <div className="quests" onClick={props.unLoadQuest}>
      <QuestList />
      <ListItem >

      </ListItem>
      <Button fab color="accent" className="fab" 
      onClick={(e) => {e.stopPropagation(); props.createQuest()}}>
        <AddIcon />
      </Button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Quests);