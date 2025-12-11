"use client";

import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { useRouter } from "next/navigation";

export default function Page2Review() {
  const { profile } = useContext(ProfileContext);
  const router = useRouter();

  return ( <div className="bg-zinc-800 min-h-screen p-8">
    <div className="flex flex-col gap-4 bg-amber-950 text-white p-4 rounded-lg max-w-md mx-auto mt-10">
      <h1 className="text-5xl font-bold">Review Profile</h1>

      <p className="text-2xl"><b>Name:</b> {profile.name}</p>
      <p className="text-2xl"><b>Age:</b> {profile.age}</p>
      <p className="text-2xl"><b>Email:</b> {profile.email}</p>

      <button
      className="bg-black text-white text-2xl p-2 rounded-md hover:bg-gray-800 transition"
      onClick={() => router.push("/")}> Edit</button>
      <button 
       className="bg-black text-white text-2xl p-2 rounded-md hover:bg-gray-800 transition"
      onClick={() => router.push("/final")}>Confirm </button>
    </div></div>
  );
}
