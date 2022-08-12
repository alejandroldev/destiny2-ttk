import {
  getDestinyManifest,
  getDestinyManifestSlice,
  HttpClientConfig,
} from "bungie-api-ts/destiny2";
import { LOCALE } from "./constants";
import { DestinyDefinition } from "./types";

export async function client(config: HttpClientConfig) {
  const options = { method: config.method };
  const response = await fetch(config.url, options);
  return await response.json();
}

export async function getDefinitions() {
  const manifest = await getDestinyManifest(client);
  const tables = await getDestinyManifestSlice(client, {
    destinyManifest: manifest.Response,
    tableNames: Object.values(DestinyDefinition),
    language: LOCALE,
  });
  return tables;
}
