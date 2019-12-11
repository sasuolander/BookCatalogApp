import { BookList } from "./BookList";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ListOfBookState } from "../../model/StateOfApp";

export const BookListContainer = () => {
  interface StateFromProps extends ListOfBookState {}
  interface mapDispatchToProps {}

  const mapStateToProps = (state: any) => ({
    books: state.mainlist.books
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({});
  return connect<StateFromProps, mapDispatchToProps>(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
  )(BookList);
};
