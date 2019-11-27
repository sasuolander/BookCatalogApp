import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { AddBook } from "./AddBook";

interface formProps {}

const ConnectedAddBook = reduxForm<formProps>({ form: "formdemo" })(AddBook);

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    prop: state.prop
  };
};

export default connect<{}, {}>(mapStateToProps)(ConnectedAddBook);
