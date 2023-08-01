"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confimed = confirm("are you sure!");

    if (confimed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <button onClick={removeTopic} className=" text-red-500">
        <RiDeleteBin5Line size={24} />
      </button>
    </div>
  );
};

export default RemoveBtn;
