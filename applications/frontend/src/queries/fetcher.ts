export default async function fetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw Error('Sommething happens feching the info!!!');
  }

  return await res.json();
}
