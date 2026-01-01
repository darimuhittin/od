"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/auth";
export default function Home() {
  const { user, isLoading, checkAuth, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    router.push('/login');
    return;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <button onClick={() => { logout(); router.push('/login'); }} className="bg-red-500 text-white p-2 rounded">Logout</button>
      </main>
    </div>
  );
}
