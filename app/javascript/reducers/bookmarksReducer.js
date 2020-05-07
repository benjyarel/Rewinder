export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKMARKS":
      return action.payload;
    case "FETCH_BOOKMARK":
      return [...state, action.payload];
    default:
      return state
  }
}
