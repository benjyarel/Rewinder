export default (state=[], action) => {
  switch(action.type) {
    case "SEARCH_MOVIES":
    return action.payload;
    case "DELETE_SEARCHED_MOVIES":
      return [];
    default:
      return state;
  }
}
