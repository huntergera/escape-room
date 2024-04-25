import {QUESTS_API_URL} from "@/helpers/constants/api";

export async function getQuestById(id: string) {
  try {
    const response = await fetch(QUESTS_API_URL + id);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}