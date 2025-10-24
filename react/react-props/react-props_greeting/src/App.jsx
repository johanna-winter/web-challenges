export default function App() {
  return <Greeting name="Johanna" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Klaus" ? "Coach" : name}!</h1>;
}
