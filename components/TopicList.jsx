import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";

async function getTopics() {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log("error loading topics: ", error);
  }
}

const TopicList = async () => {
  const topics = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className=" flex justify-between border border-slate-300 p-6 mb-4"
        >
          <div>
            <h2 className=" text-2xl font-bold"> {t.title} </h2>
            <div> {t.description} </div>
          </div>

          <div className="flex gap-5">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              {" "}
              <FaEdit size={24} />{" "}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
