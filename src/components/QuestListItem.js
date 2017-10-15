import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';

const QuestListItem = (props) => {
  const isActive = props.quest.id === props.activeQuest.id;
  return (
    <ListItem
      className={isActive ? "active-list-item" : ""}
      id={props.quest.id}
      onClick={(e) => {e.stopPropagation(); props.loadQuest(props.quest)}}
      button
      divider
    >
      <ListItemText primary={props.quest.name} />
    </ListItem>
  )
};

export default QuestListItem;
