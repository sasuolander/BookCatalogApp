import React, { FunctionComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

interface componentAddProps {}

export const AddBook: FunctionComponent<componentAddProps> = ({}): JSX.Element => {
  return (
    <div className={"form-container"}>
      <p>test</p>
      <form>
        <div className={"add-book"}>
          <label className={"label title"}>Title</label>
          <Field className={"input type"} name={"title"} component="input" />
        </div>

        <div className={"add-book"}>
          <label className={"label author"}>Author</label>
          <Field className={"input type"} name={"author"} component="input" />
        </div>

        <div className={"add-book"}>
          <label className={"label abstract"}>Abstract</label>
          <Field className={"input type"} name={"abstract"} component="input" />
        </div>

        <div className={"add-book"}>
          <label className={"label type"}>Type</label>
          <Field className={"input type"} name={"itemType"} component="input" />
        </div>
        <div className={"container-btn"}>
          <button className={"add-book-btn"}>Submit</button>
        </div>
      </form>
    </div>
  );
};
//["author", "title", "abstract", "itemType"]
