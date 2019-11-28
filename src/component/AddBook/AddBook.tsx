import React, { FunctionComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

interface componentAddProps {}

export const AddBook: FunctionComponent<componentAddProps> = ({}): JSX.Element => {
  return (
    <div>
      <p>test</p>
      <form>
        <Field name={"author"} component="input" />
        <Field name={"title"} component="input" />
        <Field name={"abstract"} component="input" />
        <Field name={"itemType"} component="input" />
      </form>
    </div>
  );
};
//["author", "title", "abstract", "itemType"]