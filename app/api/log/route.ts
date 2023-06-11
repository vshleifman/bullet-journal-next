import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const monthlyLog: Record<string, Record<number, string>> = {
  0: {
    1: "Clean the house",
    2: "Go for a jog",
    3: "Read a book",
    4: "Write in a journal",
    5: "Organize the closet",
    6: "Take a walk in the park",
    7: "Try a new recipe",
    8: "Call a family member",
    9: "Visit a museum",
    10: "Practice a musical instrument",
    11: "Watch a movie",
    12: "Volunteer for a local charity",
    13: "Plan a weekend getaway",
    14: "Do a puzzle",
    15: "Explore a new hiking trail",
    16: "Attend a virtual workshop",
    17: "Have a picnic",
    18: "Learn a new language phrase",
    19: "Create a piece of art",
    20: "Try a new restaurant",
    21: "Write a handwritten letter",
    22: "Take a yoga class",
    23: "Do a home workout",
    24: "Start a new book",
    25: "Plant some indoor plants",
    26: "Try a new hobby",
    27: "Have a technology-free day",
    28: "Catch up with a friend",
    29: "Learn a new skill online",
    30: "Plan goals for the next month",
    31: "Reflect on the month and relax",
  },
  1: {
    1: "Clean the house",
    2: "Go for a jog",
    3: "Read a book",
    4: "Write in a journal",
    5: "Organize the closet",
    6: "Take a walk in the park",
    7: "Try a new recipe",
    8: "Call a family member",
    9: "Visit a museum",
    10: "Practice a musical instrument",
    11: "Watch a movie",
    12: "Volunteer for a local charity",
    13: "Plan a weekend getaway",
    14: "Do a puzzle",
    15: "Explore a new hiking trail",
    16: "Attend a virtual workshop",
    17: "Have a picnic",
    18: "Learn a new language phrase",
    19: "Create a piece of art",
    20: "Try a new restaurant",
    21: "Write a handwritten letter",
    22: "Take a yoga class",
    23: "Do a home workout",
    24: "Start a new book",
    25: "Plant some indoor plants",
    26: "Try a new hobby",
    27: "Have a technology-free day",
    28: "Catch up with a friend",
    29: "Learn a new skill online",
    30: "Plan goals for the next month",
  },
  2: {
    1: "Clean the house",
    2: "Go for a jog",
    3: "Read a book",
    4: "Write in a journal",
    5: "Organize the closet",
    6: "Take a walk in the park",
    7: "Try a new recipe",
    8: "Call a family member",
    9: "Visit a museum",
    10: "Practice a musical instrument",
    11: "Watch a movie",
    12: "Volunteer for a local charity",
    13: "Plan a weekend getaway",
    14: "Do a puzzle",
    15: "Explore a new hiking trail",
    16: "Attend a virtual workshop",
    17: "Have a picnic",
    18: "Learn a new language phrase",
    19: "Create a piece of art",
    20: "Try a new restaurant",
    21: "Write a handwritten letter",
    22: "Take a yoga class",
    23: "Do a home workout",
    24: "Start a new book",
    25: "Plant some indoor plants",
    26: "Try a new hobby",
    27: "Have a technology-free day",
    28: "Catch up with a friend",
    29: "Learn a new skill online",
    30: "Plan goals for the next month",
    31: "Reflect on the month and relax",
  },
};
export type IMonthlyLog = typeof monthlyLog;

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const res = { ...monthlyLog };
  const tasks = await prisma.monthTask.findMany();
  console.log(tasks);

  return NextResponse.json(monthlyLog);
};

export const POST = async (req: Request) => {
  const data = await req.json();
  try {
    const res = await prisma.monthTask.create({
      data: { text: data.text, targetDate: data.targetDate },
    });
    // const res = await prisma.monthTask.upsert({
    //   where: { id: data.id },
    //   update: { text: data.text },
    //   create: { text: data.text, targetDate: data.targetDate },
    // });
    return new NextResponse("Created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
