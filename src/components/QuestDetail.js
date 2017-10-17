import React from "react";
import { connect } from "react-redux";
import List from "material-ui/List";
import QuestTitle from "./QuestTitle";
import PlaceListItem from "./PlaceListItem";
import AddPlace from "./AddPlace";
import Controls from "./Controls";

const mapStateToProps = (state) => ({
  activeQuest: state.activeQuest,
});

const mapDispatchToProps = (dispatch) => ({
  removePlace: (place) => {
    dispatch({
      type: "REMOVE_PLACE",
      place: place,
    })
  },
  editPlace: (id, place) => {
    dispatch({
      type: "EDIT_PLACE",
      id: id,
      place: place,
    })
  },
  saveQuest: (quest) => {
    dispatch({
      type: "SAVE_QUEST",
      quest: quest,
    })
  },
  deleteQuest: (quest) => {
    dispatch({
      type: "DELETE_QUEST",
      quest: quest,
    })
    dispatch({
      type: "UNLOAD_QUEST",
      quest: quest,
    })
  }
});

const QuestDetail = (props) => {
  if (props.activeQuest.id) {
    return (
      <div className="quest-detail">
        <QuestTitle name={props.activeQuest.name} />
        <List>
          {props.activeQuest.places.map((element, index) => {
            return (
              <PlaceListItem
                key={index}
                element={element}
                index={index}
                removePlace={() => props.removePlace(element)}
                editPlace={props.editPlace}
              />
            )
          })}
        </List>
        <AddPlace />
        <Controls saveQuest={() => props.saveQuest(props.activeQuest)} 
                  deleteQuest={() => props.deleteQuest(props.activeQuest)}
        />
      </div>
    )
  }
  return (
    <div className="quest-detail">select a quest</div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestDetail);

