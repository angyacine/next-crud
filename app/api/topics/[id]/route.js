import connectDB from "@/libs/connect";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  const { id } = params;

  const { newTitle: title, newDescription: description } = await req.json();

  await connectDB();

  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "topic updated" }, { status: 200 });
};

export const GET = async (req, { params }) => {
  const { id } = params;

  await connectDB();

  const topic = await Topic.findById({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
};
