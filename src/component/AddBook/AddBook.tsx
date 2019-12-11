import React, { FunctionComponent } from "react";
import { Field, InjectedFormProps } from "redux-form";
import { BookModel } from "./../../model/StateOfApp";

export interface componentAddProps extends InjectedFormProps {
  books?: [];
  addBookFunction?: Function;
}

export const AddBook: FunctionComponent<componentAddProps> = ({
  handleSubmit,
  addBookFunction
}): JSX.Element => {
  const createBookObject = (data: any): BookModel => {
    const book: BookModel = {
      title: data.title,
      author: data.author,
      abstract: data.abstract,
      itemType: data.itemType
    };
    return book;
  };

  const addToBooks = (book: BookModel): void => {
    addBookFunction!(book);
  };

  const createBookAndAddToBooks = (data: any): void => {
    addToBooks(createBookObject(data));
  };

  return (
    <div className={"form-container"}>
      <p>test</p>
      <form>
        <div className={"add-book"}>
          <label className={"label title"}>Title</label>
          <Field
            className={"input type"}
            name={"title"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label author"}>Author</label>
          <Field
            className={"input type"}
            name={"author"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label abstract"}>Abstract</label>
          <Field
            className={"input type"}
            name={"abstract"}
            type={"text"}
            component="input"
          />
        </div>

        <div className={"add-book"}>
          <label className={"label type"}>Type</label>
          <Field
            className={"input type"}
            name={"itemType"}
            type={"text"}
            component="input"
          />
        </div>
        <div className={"container-btn"}>
          <button
            type={"submit"}
            className={"add-book-btn"}
            onClick={handleSubmit(data => {
              createBookAndAddToBooks(data);
            })}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
