"use server";
import { PrismaClient } from '@prisma/client';
import { IAccount, IOrder } from "@/interfaces/interfaces";
import { showError } from "@/helpers/utils/toasts";
import { router } from "next/client";
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

  // bcrypt.hash('myPlaintextPassword', 10)
  //   .then(hash => {
  //     accountData.password = hash;
  //
  //     prisma.account.create({
  //       data: accountData,
  //     });
  //
  //     // cookies().set({
  //     //   name: 'loggedIn',
  //     //   value: 'true',
  //     //   httpOnly: true
  //     // });
  //
  //     cookies().set('loggedIn', 'true')
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });

  // bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash( accountData.password, salt, async function(err, hash) {
  //     accountData.password = hash;
  //
  //     try {
  //       await prisma.account.create({
  //         data: accountData,
  //       });
  //     } catch (error) {
  //       console.error("Error creating order:", error);
  //       throw new Error((error as Error).message);
  //     }
  //   });
  //
  //   cookies().set({
  //     name: 'loggedIn',
  //     value: 'true',
  //     httpOnly: true
  //   });
  // });
}

export async function logInAccount(accountData: IAccount) {
  const user = await prisma.account.findUnique({
    where: { email: accountData.email },
  });

  if(!user) {
    throw new Error('Something went wrong');
  }

  let a = false;

  bcrypt.compare(accountData.password, user.password).then((res) => {
    if(res) {
      // cookies().set('loggedIn', 'true');
      a = true;
      console.log(a)
    } else {
      throw new Error('password or email are not valid');
    }
    console.log(a)
  if (a) {
    cookies().set('loggedIn', 'true');
  }
  });



  // if (!user || user.password !== accountData.password) {
  //   throw new Error('Email or password is incorrect, please enter again');
  // }

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
  } catch (error) {
    console.error("Error logging out:", error);
    throw new Error((error as Error).message);
  }
}