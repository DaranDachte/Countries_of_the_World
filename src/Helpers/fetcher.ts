export const fetcher = async <T = any>(url: string): Promise<T> => {
  const request = await fetch(url);
  return request.json();
};
