const baseUrl = import.meta.env.VITE_API_URL;

export default async function client(
  endpoint: string,
  body?: any,
  customConfig: any = {},
) {
  const headers = { "content-type": "application/json" };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(baseUrl + "/" + endpoint);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
