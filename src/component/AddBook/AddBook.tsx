import React, { FunctionComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

interface componentAddProps {}

export const AddBook: FunctionComponent<componentAddProps> = ({}): JSX.Element => {
  return (
    <div>
      <p>test</p>
      <form>
        <Field name={"test1"} component="input" />
        <Field name={"test2"} component="input" />
      </form>
    </div>
  );
};
