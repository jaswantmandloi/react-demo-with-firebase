const LayoutReducer = (
  state = { header: { toggleLayoutHeader: false }, footer: {} },
  action
) => {
  switch (action.type) {
    case "LAYOUT_TOGGLE_HEADER":
      state.header.toggleLayoutHeader = action.payload.toggleLayoutHeader;
      return state;

    default:
      return state;
  }
};

export default LayoutReducer;
