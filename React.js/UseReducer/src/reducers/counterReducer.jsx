function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {counter: state.counter + state.step, step: state.step}
      case "DECREMENT":
        return {counter: state.counter - state.step, step: state.step}
      case "INCREMENT_STEP":
        return {counter: state.counter, step: state.step + 1}
      case "DECREMENT_STEP":
        return {counter: state.counter, step: state.step - 1}
      default:
        return state;
    }
}

export default reducer