"use client";

import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Page3Final() {
  const { profile } = useContext(ProfileContext);

  return (<div className="bg-zinc-800 min-h-screen p-8">
    <div className="flex flex-col gap-4 bg-amber-950 text-white p-4 rounded-lg max-w-md mx-auto mt-10">
      <h1 className="text-5xl text-white">Final Profile</h1>
      <h3 className="text-2xl text-white">Name: {profile.name}</h3>
      <h3 className="text-2xl text-white">Age: {profile.age}</h3>
      <h3 className="text-2xl text-white">Email: {profile.email}</h3>
    </div></div>
  );
}
