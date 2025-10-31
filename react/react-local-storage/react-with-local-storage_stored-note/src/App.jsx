import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // const [note, setNote] = useState("");
  // const [font, setFont] = useState("system-ui");

  const [newNote, setNewNote] = useLocalStorageState("note", {
    defaultValue: "",
  });

  const [newFont, setNewFont] = useLocalStorageState("font", {
    defaultValue: "system-ui",
  });

  function handleNoteChange(newNote) {
    setNewNote(newNote);
  }

  function handleFontChange(newFont) {
    setNewFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": newFont }}>
      <FontSelector font={newFont} onFontChange={handleFontChange} />
      <Note note={newNote} onNoteChange={handleNoteChange} />
    </div>
  );
}
