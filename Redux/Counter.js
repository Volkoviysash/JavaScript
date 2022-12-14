const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT"; 

const counterReducer = (state, action) => {
    switch(action.type) {
      case INCREMENT:
        return state + 1;

      case DECREMENT:
        return state - 1;

      default:
        return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT
  };
};

const decAction = () => {
  return {
    type: DECREMENT
  };
};

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
