const qrReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "scan":
      // return { ...state, {data: action.data} };
      return Object.assign({}, state, { data: action.data });

    default:
      return state;
  }
};

export default qrReducer;
