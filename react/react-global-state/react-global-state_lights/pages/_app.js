import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightsOn = lights.map((light) => light.isOn === true);
  const lightsOnCounter = lightsOn.reduce((a, b) => {
    return a + b;
  }, 0);

  function handleToggle(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        console.log("light object: ", light);

        return light;
      })
    );
  }

  function turnAllLightsOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function turnAllLightsOn() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  return (
    <Layout isDimmed={lightsOnCounter === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightsOn={lightsOn}
        toggleLight={handleToggle}
        lightsOnCounter={lightsOnCounter}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </Layout>
  );
}
