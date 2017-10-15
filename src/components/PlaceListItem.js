import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';

const PlaceListItem = (props) => {
  return (
    <ListItem divider>
      <ListItemText primary={props.element} />
      <IconButton>
        <ModeEdit />
      </IconButton>
      <IconButton onClick={props.removePlace}>
        <Delete />
      </IconButton>
    </ListItem>
  )
};

export default PlaceListItem;
