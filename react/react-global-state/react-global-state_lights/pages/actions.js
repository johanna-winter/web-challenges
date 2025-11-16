import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  turnAllLightsOff,
  turnAllLightsOn,
  lights,
  lightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
        lightsOn={lightsOn}
      />
    </>
  );
}
