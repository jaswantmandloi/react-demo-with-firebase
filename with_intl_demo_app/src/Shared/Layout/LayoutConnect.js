import { connect } from "react-redux";

import Layout from "./Layout";
import LayoutActions from "./LayoutActions";
import LayoutReducer from "./LayoutReducer";
import {registerReducer} from '../../Core/AsyncReducers';

registerReducer({LayoutReducer : LayoutReducer});

const mapStateToProps = state => {
  return {
    toggleLayoutHeaderState: state.LayoutReducer.header.toggleLayoutHeader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLayoutHeader: toggle => {
      toggle = !toggle;
      dispatch(LayoutActions.toggleLayoutHeader(toggle));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
