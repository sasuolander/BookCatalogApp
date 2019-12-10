import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { AddBook } from "./AddBook";
import { addBookAction } from "../../redux/booksList/bookListAction";
import { Dispatch } from "redux";
import { ListOfBookState, BookModel } from "../../model/StateOfApp";

interface formProps {}

interface StateFromProps extends ListOfBookState {}
interface mapDispatchToProps {
  addbook2: Function;
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addbook2: (book: BookModel) => dispatch(addBookAction(book))
});

const WrappedComponentAddBook = reduxForm<formProps>({ form: "addbook" })(
  AddBook
);

const mapStateToProps = (state: any) => ({
  books: state.mainlist.books
});

export default connect<StateFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponentAddBook);
