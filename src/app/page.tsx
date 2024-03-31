"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import Login from "./pages/Login/page";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Login />

      <h2>Username: {username}</h2>
      {isModerator && <h2>this user is a moderator</h2>}
    </main>
  )
}
