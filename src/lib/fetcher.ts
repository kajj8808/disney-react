const BASE_URL = "https://disney_api.nomadcoders.workers.dev";

interface IDisneyCharacter {
  id: number;
  name: string;
  imageUrl: string;
}
export async function getDisneyCharacters(start: number, end: number) {
  const disneyCharacters = (await (
    await fetch(`${BASE_URL}/characters`)
  ).json()) as IDisneyCharacter[];
  return disneyCharacters.slice(start, end);
}

export async function getDisneyCharacterDetail(charcterId: number) {
  const json = await (
    await fetch(`${BASE_URL}/characters/${charcterId}`)
  ).json();
  return json;
}
