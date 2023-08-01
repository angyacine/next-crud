"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handlSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handlSubmit} className="flex flex-col gap-4">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Topic Title"
        className="py-2 px-4 border-2 border-slate-500 rounded-sm"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Topic Description"
        className="py-2 px-4 border-2 border-slate-500 rounded-sm"
      />
      <button className=" px-6 py-4 bg-yellow-600 text-white font-bold w-fit rounded-md">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
