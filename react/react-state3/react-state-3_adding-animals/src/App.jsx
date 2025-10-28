import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  // function handleAddAnimal(data) {
  //   // newAnimal.id = crypto.randomUUID();
  //   const newAnimal = {
  //     id: uid(),
  //     name: data.name,
  //     emoji: data.emoji,
  //   };
  //   const updatedAnimals = [...animals, newAnimal];
  //   setAnimals(updatedAnimals);
  //   console.log("New animal: ", newAnimal);
  // }

  function handleAddAnimal(newAnimal) {
    console.log("New animal: ", newAnimal);
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
    // new animal muss als neues Objekt in einer Variable gespeichert werden, sonst wird die ID nicht wirklich hinzugefügt
    console.log("New animal with id: ", newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
