import { API_URL } from "./constants";

export const fetchGraphQL = async <T>(
  query: string,
  revalidate?: number
): Promise<T> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
    next: {
      revalidate,
    },
    // cache: "no-store",
  });

  const { data } = await response.json();

  return data;
};
