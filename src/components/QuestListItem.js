import React from "react";
import { ListItem, ListItemText } from "material-ui/List";

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
