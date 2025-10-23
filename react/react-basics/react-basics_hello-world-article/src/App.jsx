import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This is my first React component.</p>
      <button>Click here</button>
    </article>
  );
}
