import React from "react";
import logo from "./media/logo.svg";
import "./style/App.scss";
import { BookList } from "./component/BookList";
import { Navigation } from "./component/Navigation";
import { Switch, Route } from "react-router-dom";
import { AddBook } from "./component/AddBook";
import { Homepage } from "./component/Homepage";

interface AppInterface {}

function App(): AppInterface {
  return (
    <div className="content">
      <h1 className="mainheader">Book Catalog</h1>
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact={true}  path="/"component={Homepage}>
         
        </Route>
        <Route path="/books" component={BookList}>
        
        </Route>
        <Route path="/addbook"component={AddBook} >
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
