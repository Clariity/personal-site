/** Fetch JSON and throw if the response is not OK. */
export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }

  return response.json() as Promise<T>;
}
