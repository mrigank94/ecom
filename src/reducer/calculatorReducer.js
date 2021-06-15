import { evaluate } from "mathjs";

function reducer(state = { expression: "" }, action) {
  switch (action.type) {
    case "BUTTON_CLICKED":
      return {
        ...state,
        expression: state.expression + action.payload.toString(),
      };
    case "OPERATOR_BUTTON_CLICKED":
      return {
        ...state,
        expression: evaluate(state.expression) + action.payload.toString(),
      };
    case "EQUAL_BUTTON_CLICKED":
      return { ...state, expression: evaluate(state.expression) };
    case "CLEAR_BUTTON_CLICKED":
      return { ...state, expression: "" };
    default:
      return state;
  }
}

export default reducer;
