import React, { Component } from 'react';
import AddQuestContainer from "./components/AddQuestContainer";
import ListContainer from "./components/ListContainer";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddQuestContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
