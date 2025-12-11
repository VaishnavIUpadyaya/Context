"use client";

import { useContext } from "react";
import { ProfileContext } from "./context/ProfileContext";
import { useRouter } from "next/navigation";

export default function Page1Create() {
  const { profile, setProfile } = useContext(ProfileContext);
  const router = useRouter();

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return ( <div className="bg-zinc-900 min-h-screen p-8">
    <div className="flex flex-col gap-4 bg-amber-950 text-white p-4 rounded-lg max-w-md mx-auto mt-10">
      <h1 className="text-5xl text-white font-bold">Create Profile</h1>

      <input className="text-2xl p-2 rounded-md border border-gray-300"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
      /><br />

      <input className="text-2xl p-2 rounded-md border border-gray-300"
        name="age"
        placeholder="Age"
        value={profile.age}
        onChange={handleChange}
      /><br />

      <input className="text-2xl p-2 rounded-md border border-gray-300"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
      /><br />

      <button 
      className="bg-black text-white text-2xl p-2 rounded-md hover:bg-gray-800 transition"
      onClick={() => router.push("/review")}>
        Next 
      </button>
    </div></div>
  );
}
