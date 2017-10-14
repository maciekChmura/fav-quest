import { SELECT_QUEST } from "../actions";

const activeQuest = (state = -1, action) => {
  switch (action.type) {
    case SELECT_QUEST:
      return action.id;
    default:
      return state
  }
};

export default activeQuest;
