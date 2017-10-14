import React from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const mapStateToProps = (state) => ({
  quests: state.quests,
  activeQuest: state.activeQuest,
});

const QuestDetail = (props) => {
  if (props.activeQuest !== -1) {
        const details = props.quests.find((element, index) => index === props.activeQuest);

    return (
      <div className="quest-detail">
        <Typography type="title">
          {details.name}
        </Typography>
        <List>
          {details.places.map((element, index) => {
            return (
              <ListItem
                key={index}
                id={index}
                divider
              >
                <ListItemText primary={element} />
                <IconButton>
                  <ModeEdit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </ListItem>
            )
          })}
        </List>
        <FormControl >
          <InputLabel htmlFor="name-simple">point name</InputLabel>
          <Input id="name-simple" value={""} onChange={this.handleChange} />
        </FormControl>
      </div>
    )
  }
  return (
    <div className="quest-detail">pusto, trzeba cos zaznaczyc</div>
  )
};

export default connect(mapStateToProps)(QuestDetail);