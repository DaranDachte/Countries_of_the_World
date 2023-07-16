/**
 *  Здесь с помощью ассинхронной функции мы делаем запрос и получаем данные,
 *  которые с помощью request.json() обрабатываем как json строку.
 * @param url - адрес запроса
 * @returns
 */

export const fetcher = async <T = any>(url: string): Promise<T> => {
  const request = await fetch(url);
  return request.json();
};
