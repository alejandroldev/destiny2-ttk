import { API_ROOT_PATH, LOCALE, ROOT_PATH, X_API_KEY } from "./constants";
import { IDefinitions, IDestinyManifest, IResponse } from "./types";
import { request } from "./utils";

export function destiny<T>(path: string, options?: RequestInit) {
  const url = `${API_ROOT_PATH}${path}`;
  const headers = new Headers({ "X-API-Key": X_API_KEY });
  return request<IResponse<T>>(url, { ...options, headers });
}

export async function getDestinyManifest() {
  const method = "GET";
  const path = "/Destiny2/Manifest/";
  const value = await destiny<IDestinyManifest>(path, { method });
  return value.Response;
}

export function getDefinitions(manifest: IDestinyManifest) {
  const path = manifest.jsonWorldContentPaths[LOCALE];
  const url = `${ROOT_PATH}${path}`;
  return request<IDefinitions>(url);
}
