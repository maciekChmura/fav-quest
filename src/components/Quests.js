import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import List, { ListItem, ListItemText } from 'material-ui/List';

// import AddQuest from './AddQuest';
import QuestList from './QuestList';
import { addQuest } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addQuest: () => {
    dispatch(addQuest('nowe'))
  },
});

const Quests = (props) => {
  return (
    <div className="quests">
      <QuestList />
      <ListItem >
        <FormControl >
          <InputLabel htmlFor="name-simple">quest name</InputLabel>
          <Input id="name-simple" value={""} onChange={this.handleChange} />
        </FormControl>
      </ListItem>
      <Button fab color="accent" className="fab" onClick={props.addQuest}>
        <AddIcon />
      </Button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Quests);