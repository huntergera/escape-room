"use server";
import { PrismaClient } from '@prisma/client';
import { IOrder } from "@/interfaces/interfaces";
import { showError } from "@/helpers/utils/toasts";

const prisma = new PrismaClient();

export async function getQuestById(id: string) {
  if (isNaN(+id)) return null;

  const quest = await prisma.quest.findUnique({
    where: {
      id: +id,
    },
  });
  return quest;
}

export const getAllQuests = async () => {
  const quests = await prisma.quest.findMany();
  return quests;
};

export async function createOrder(orderData: IOrder) {
  try {
    await prisma.order.create({
      data: orderData,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    showError('Сталася помилка, будь ласка, спробуйте ще раз')
    throw new Error((error as Error).message);
  }
}