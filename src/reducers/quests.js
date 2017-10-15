import { ADD_QUEST } from "../actions";

const defaultState = [
  {
    id: '3397ad85-dd99-49d3-95ab-c6f96ced5d15',
    name: 'do mamy',
    places: ['krakow', 'stalowa wola']
  },
  {
    id: 'd2d94be9-0e16-49ce-8a57-af8ed1a74392',
    name: 'do pracy',
    places: ['ruczaj', 'novomatic']
  },
];

const quests = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_QUEST':
      if (state.find(element => element.id === action.quest.id)) {
        return state.map(element => {
          if (element.id === action.quest.id) {
            return action.quest;
          } else {
            return element;
          }
        });
      } else {
        return [
          ...state,
          action.quest
        ]
      }
    default:
      return state
  }
};

export default quests;
