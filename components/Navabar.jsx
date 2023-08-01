import Link from "next/link";
import React from "react";

const Navabar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 p-6 mb-6">
      <Link href="/" className="text-white font-bold text-xl">
        Logo
      </Link>
      <Link
        href="/addTopic"
        className=" text-slate-500 bg-white py-2 px-6 rounded-md"
      >
        Add Topic
      </Link>
    </div>
  );
};

export default Navabar;
