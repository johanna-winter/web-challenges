import { Chance } from "chance";

const chance = new Chance();

export default function handler(request, response) {
  response.status(200);
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geoHash: chance.geohash(),
  };
  response.json(character);
}
