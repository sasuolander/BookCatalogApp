import React from "react";
import { BookList } from "./component/BookList/BookList";
import { Navigation } from "./component/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import WrappedComponentAddBook from "./component/AddBook/AddBookContainer";
import { Homepage } from "./component/Homepage/Homepage";

function App() {
  return (
    <div className="content">
      <h1 className="mainheader">Book Catalog</h1>
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/books" component={BookList}></Route>
        <Route path="/addbook" component={WrappedComponentAddBook}></Route>
      </Switch>
    </div>
  );
}

export default App;
