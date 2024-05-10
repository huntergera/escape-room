import { MAIN_API_URL } from "@/helpers/constants/api";
import { IOrder } from "@/interfaces/interfaces";
import { showError } from "@/helpers/utils/toasts";

export async function getQuestById(id: string) {
  try {
    const response = await fetch(`${MAIN_API_URL}quests/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllQuests() {
    try {
      const response = await fetch(`${MAIN_API_URL}quests`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching quests:", error);
    }
}

export async function createOrder(orderData: IOrder) {
  try {
    const response = await fetch(`${MAIN_API_URL}orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating order:", error);
    showError('Сталася помилка, будь ласка, спробуйте ще раз')
    throw new Error((error as Error).message);
  }
}