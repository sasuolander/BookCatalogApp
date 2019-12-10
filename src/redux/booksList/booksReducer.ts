import { ADD_BOOK } from "../constant";
import { ListOfBookState, BookModel } from "../../model/StateOfApp";

const initialState: ListOfBookState = {
  books: [],
  hasErrored: false
};

export const bookList = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_BOOK.PENDING:
      return {
        ...state,
        ListOfBook: action.payload
      };
    case ADD_BOOK.FAIL:
      return {
        ...state,
        hasErrored: true
      };
    case ADD_BOOK.SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    default:
      return state;
  }
};
