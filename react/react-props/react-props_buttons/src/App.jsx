export default function App() {
  function handleClick() {
    console.log("Hello world!");
    alert("You clicked me!");
  }
  return (
    <Button
      color="#3f0425"
      text="Click me"
      disabled="false"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <>
      <button
        style={{
          height: "50px",
          width: "100px",
          borderRadius: "8px",
          backgroundColor: color,
          color: "#fff",
          disabled: { disabled },
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
