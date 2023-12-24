import React from "react";
import Card from "./components/Card";
import { contacts } from "./data";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        // every element should have uniq key
        <Card key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
