import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { AddBook } from "./AddBook";
import { addBookAction } from "../../redux/booksList/bookListAction";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

interface formProps {}

const WrappedComponentAddBook =reduxForm<formProps>({ form: "addbook" })(AddBook)

const mapStateToProps = (state: any) => ({
  books: state.mainlist
});

const ComposedAddBook=compose(
  withRouter,
  connect<{}, {}>(mapStateToProps, { addBookAction }),
  reduxForm<formProps>({ form: "addbook" })
)(AddBook);


export default connect<{}, {}>(mapStateToProps)(WrappedComponentAddBook)
