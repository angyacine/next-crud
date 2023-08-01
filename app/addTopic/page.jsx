"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const router = useRouter();

  const handlSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw Error("failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handlSubmit} className="flex flex-col gap-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="py-2 px-4 border-2 border-slate-500 rounded-sm"
      />
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="py-2 px-4 border-2 border-slate-500 rounded-sm"
      />
      <button
        type="submit"
        className=" px-6 py-4 bg-green-600 text-white font-bold w-fit rounded-md"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
