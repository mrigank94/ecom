export default function productReducer(
  state = { searchText: "", open: false, inCartItems: [] },
  action
) {
  switch (action.type) {
    case "SEARCH_INPUT_CHANGE":
      return { ...state, searchText: action.payload };
    case "TOGGLE_DIALOG_VISIBILITY":
      return { ...state, open: !state.open };
    case "ITEM_ADDED_TO_CART":
      return { ...state, inCartItems: [...state.inCartItems, action.payload] };
    case "ITEM_REMOVED_FROM_CART":
      return { ...state, inCartItems: state.inCartItems.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}
