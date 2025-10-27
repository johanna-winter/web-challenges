import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 banana", color: "yellow" },
    { id: 293, name: "🍊 orange", color: "orange" },
    { id: 1586, name: "🍓 strawberry", color: "red" },
    { id: 789, name: "🥝 kiwi", color: "green" },
    { id: 99, name: "🍎 apple", color: "red" },
  ];

  const fruitCards = fruits.map((fruit) => {
    return (
      <Card
        key={fruit.id}
        id={fruit.id}
        name={fruit.name}
        color={fruit.color}
      />
    );
  });
  return <div className="app">{fruitCards}</div>;
}
