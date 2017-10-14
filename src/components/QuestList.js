import React from 'react'
import { connect } from 'react-redux'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';



import { selectQuest } from "../actions";

const mapStateToProps = (state) => ({
  quests: state.quests,
  activeQuest: state.activeQuest,
});

const mapDispatchToProps = (dispatch) => ({
  selectQuest: (id) => {
    dispatch(selectQuest(id))
  },
});

class QuestList extends React.Component {
  render() {
    if (this.props.quests.length === 0) {
      return (
        <p>Start by adding some quests</p>
      )
    }
    return (
      <List>
        {this.props.quests.map((quest, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              onClick={() => this.props.selectQuest(index)}
              button
              divider
            >
              <ListItemText primary={quest.name} />
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
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestList);
