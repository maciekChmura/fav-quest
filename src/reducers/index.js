import { combineReducers } from 'redux';
import quests from './quests';
import activeQuest from './activeQuest';

export default combineReducers({
  quests,
  activeQuest,
})