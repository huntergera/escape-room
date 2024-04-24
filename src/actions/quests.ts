import {QUESTS_API_URL} from "@/helpers/constants/api";

export async function getAllQuests() {

  try {
    const response = await fetch(QUESTS_API_URL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
