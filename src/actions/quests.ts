import {QUESTS_API_URL} from "@/helpers/constants/api";

export async function getAllQuests() {

  const url = QUESTS_API_URL;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}