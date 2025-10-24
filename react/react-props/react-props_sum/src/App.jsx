export default function App() {
  return <Sum valueA={19} valueB={13} />;
}

function Sum({ valueA, valueB }) {
  const calculateSum = valueA + valueB;
  return <div>{calculateSum}</div>;
}
