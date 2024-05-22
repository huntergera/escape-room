"use server";
import { PrismaClient } from '@prisma/client';
import {IAccount, ILogin, IOrder} from "@/interfaces/interfaces";
import { showError } from "@/helpers/utils/toasts";
import {cookies} from "next/headers";
import bcrypt from "bcryptjs"

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

export async function createAccount(accountData: IAccount) {
  const existingUser = await prisma.account.findUnique({
    where: { email: accountData.email },
  });

  if (existingUser) {
    throw new Error('An account with this data already exists');
  }

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync( accountData.password, salt);

  accountData.password = hash;

  try {
    await prisma.account.create({
      data: accountData,
    });

    cookies().set({
      name: 'loggedIn',
      value: 'true',
      httpOnly: true
    });
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error((error as Error).message);
  }
}

export async function logInAccount(accountData: ILogin) {
  const user = await prisma.account.findUnique({
    where: { email: accountData.email },
  });

  if(!user) {
    throw new Error('Something went wrong');
  }

  const isPasswordValid = await bcrypt.compare(accountData.password, user.password);
  if (!isPasswordValid) {
    throw new Error('Email или пароль неверны');
  }

  try {
    cookies().set('loggedIn', 'true');
  } catch (error) {
    console.error("Error setting cookies:", error);
    throw new Error((error as Error).message);
  }
}

export async function logout() {
  try {
    cookies().set('loggedIn', '');
    window.location.reload();
  } catch (error) {
    console.error("Error logging out:", error);
    throw new Error((error as Error).message);
  }
}