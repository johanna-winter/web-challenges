import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Super creative headline</h2>
      <label htmlFor="input-search">
        Search:&nbsp;
        <input id="input-search" type="text"></input>&nbsp;
      </label>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Golden_Retriever"
      >
        Learn more
      </a>
    </article>
  );
}
