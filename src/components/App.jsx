import React from "react";
import Card from "./Card"; // Assuming Card is in the same folder
import contacts from "../contacts"; // Ensure the path is correct

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          key={contact.name}
          name={contact.name}
          img={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
