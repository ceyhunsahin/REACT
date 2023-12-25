import React from "react";
import Card from "./components/Card";
import { contacts } from "./data";
import "./styles.css";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */

export default function App() {
  return (
/*     <Router>
    <Link to= ""></Link>
    <Switch>
      <Route path="">

      </Route>
    </Switch>

    </Router> */

    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        // every element should have uniq key
        <Card key={contact.id} contact={contact} />
      ))}

    </div>
  );
}

