// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";

import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  // Load payload (satellite by satellite)
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // Fueling
  fuel();

  // Countdown
  for (let i = 0; i < 5; i++) {
    countdown(5);
  }

  // Liftoff
  liftoff();

  // Deploy Payload
  deployPayload();
}
