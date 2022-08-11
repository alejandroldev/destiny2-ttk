export async function request<T>(
  path: RequestInfo | URL,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(path, options);
  return await response.json();
}
