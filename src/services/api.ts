import { API_ROOT_PATH, ROOT_PATH, X_API_KEY } from "./constants";
import { IDestinyManifest } from "./types";
import { request } from "./utils";

export function destiny<T>(path: string, options?: RequestInit) {
  const url = `${API_ROOT_PATH}${path}`;
  const headers = new Headers({ "X-API-Key": X_API_KEY });
  return request<T>(url, { ...options, headers });
}

export function getDefinition<T>(path: string) {
  const url = `${ROOT_PATH}${path}`;
  return request<T>(url);
}

export function getDestinyManifest() {
  const method = "GET";
  const path = "/Destiny2/Manifest/";
  return destiny<IDestinyManifest>(path, { method });
}
