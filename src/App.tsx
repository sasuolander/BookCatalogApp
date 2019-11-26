import React from "react";
import logo from "./media/logo.svg";
import { BookList } from "./component/BookList/BookList";
import { Navigation } from "./component/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import  AddBook  from "./component/AddBook/AddBook";
import { Homepage } from "./component/Homepage/Homepage";





//const arrayTest:BookState[]=["testi","testi2"];

function App(){
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
