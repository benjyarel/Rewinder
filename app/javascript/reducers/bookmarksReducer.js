export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKMARKS":
      return action.payload;
    default:
      return state
  }
}
