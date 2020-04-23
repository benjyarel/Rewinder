export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return [...state, action.payload];
    default:
      return state
  }
}
