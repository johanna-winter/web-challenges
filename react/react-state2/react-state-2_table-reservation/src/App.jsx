import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddingPerson() {
    setPeople(people + 1);

    console.log("Count goes up: ", people + 1);
  }

  function handleRemovingPerson() {
    setPeople(people - 1);
    console.log("Count goes down: ", people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddPerson={handleAddingPerson}
        onRemovePerson={handleRemovingPerson}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
