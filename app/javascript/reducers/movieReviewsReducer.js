
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIEREVIEWS":
      return action.payload;
    case "FETCH_MOVIEREVIEW":
      return [...state, action.payload];
    default:
      return state
  }
}
