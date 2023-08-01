import connectDB from "@/libs/connect";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, description } = await req.json();

  await connectDB();

  await Topic.create({ title, description });

  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
};

export const GET = async () => {
  await connectDB();

  const topics = await Topic.find();

  return NextResponse.json(topics);
};

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
};
