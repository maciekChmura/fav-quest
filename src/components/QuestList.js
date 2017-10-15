import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List';

import QuestListItem from './QuestListItem';
import { loadQuest } from "../actions";

const mapStateToProps = (state) => ({
  quests: state.quests,
  activeQuest: state.activeQuest,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuest: (quest) => {
    dispatch(loadQuest(quest));
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
        {this.props.quests.map((quest) => {
          return (
            <QuestListItem
              key={quest.id}
              quest={quest}
              loadQuest={this.props.loadQuest}
              activeQuest={this.props.activeQuest}
            />
          )
        })}
      </List>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestList);
