const LayoutActions = {
  toggleLayoutHeader: toggleLayoutHeader => {
    return {
      type: "LAYOUT_TOGGLE_HEADER",
      payload: {toggleLayoutHeader}
    };
  }
};

export default LayoutActions;
