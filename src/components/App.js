import React from 'react';
import Paper from 'material-ui/Paper';

import Quests from './Quests';
import QuestDetail from './QuestDetail';

class App extends React.Component {
  render() {
    return (
      <Paper className="container" elevation={6}>
        <Quests />
        <QuestDetail />
      </Paper>
    );
  }
}

export default App;
