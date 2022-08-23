import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constants/counterConstants";


// LOGIN
export const counterReducer = (
  state = { count: 0 },
  action
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};


