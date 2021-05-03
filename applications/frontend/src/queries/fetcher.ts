export default async function fetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw Error('Something happens fetching the info!!!');
  }

  return await res.json();
}
