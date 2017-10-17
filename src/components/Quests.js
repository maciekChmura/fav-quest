import React from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import QuestList from "./QuestList";
import { createQuest, unLoadQuest } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  createQuest: () => {       
    const id = uuid();
    dispatch(createQuest(id));
  },
  unLoadQuest: (quest) => {
    dispatch(unLoadQuest());
  }
});

const Quests = (props) => {
  return (
    <div className="quests" onClick={props.unLoadQuest}>
      <QuestList />
      <Button fab color="accent" className="fab" onClick={(e) => {
        e.stopPropagation();
        props.createQuest();
      }}>
        <AddIcon />
      </Button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Quests);