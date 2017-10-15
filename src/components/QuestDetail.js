import React from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';

import PlaceListItem from "./PlaceListItem";
import AddPlace from './AddPlace';
import Controls from './Controls';

const mapStateToProps = (state) => ({
  activeQuest: state.activeQuest,
});

const mapDispatchToProps = (dispatch) => ({
  removePlace: (place) => {
    dispatch({
      type: 'REMOVE_PLACE',
      place: place,
    })
  },
  saveQuest: (quest) => {
    dispatch({
      type: 'SAVE_QUEST',
      quest: quest,
    })
  }
});

const QuestDetail = (props) => {
  if (props.activeQuest.id) {
    return (
      <div className="quest-detail">
        <Typography type="title">
          {props.activeQuest.name}
        </Typography>
        <List>
          {props.activeQuest.places.map((element, index) => {
            return (
              <PlaceListItem
                key={index}
                element={element}
                index={index}
                removePlace={() => props.removePlace(element)}
              />
            )
          })}
        </List>
        <AddPlace />
        <Controls saveQuest={() => props.saveQuest(props.activeQuest)} />
      </div>
    )
  }
  return (
    <div className="quest-detail">pusto, trzeba cos zaznaczyc</div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestDetail);

/*
<FormControl >
  <InputLabel htmlFor="name-simple">point name</InputLabel>
  <Input id="name-simple" value={""} onChange={this.handleChange} />
</FormControl>
*/