"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/auth";
import axios from "axios";
export default function Home() {
  const { user, isLoading, checkAuth, logout } = useAuthStore();
  const [operator, setOperator] = useState("+")
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const first = Number(formData.get('first'));
    const second = Number(formData.get('second'));

    try {
      const res = await axios.post('/api/operations', {
        first,
        second,
        operator,
        name: user?.name,
        result: operator === "+" ? first + second : first * second
      });
      console.log(res.data);
      router.push('/operations'); // Redirect to history to see result? Or stay here? User pushed to / before.
    } catch (error) {
      console.error("Calculation failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 bg-slate-200 rounded-full"></div>
        <div className="h-4 w-32 bg-slate-200 rounded"></div>
      </div>
    </div>
  );

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Welcome Section */}
      <section className="bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-indigo-100 font-medium opacity-90">{user.email}</p>
          </div>
          <button
            onClick={() => { logout(); router.push('/login'); }}
            className="px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/10 rounded-xl font-semibold transition-all duration-200 active:scale-95"
          >
            Sign Out
          </button>
        </div>
      </section>

      {/* Calculator Dashboard */}
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Main Calculator Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
              New Calculation
            </h2>
          </div>

          <div className="p-8">
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* Operator Selection */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl">
                <button
                  type="button"
                  onClick={() => setOperator("+")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${operator === "+"
                    ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  <span className="text-lg">＋</span> Addition
                </button>
                <button
                  type="button"
                  onClick={() => setOperator("x")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${operator === "x"
                    ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  <span className="text-lg">×</span> Multiplication
                </button>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">First Number</label>
                  <input
                    required
                    type="number"
                    name="first"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300"
                    placeholder="0"
                  />
                </div>

                <div className="flex justify-center text-slate-300 pt-6">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 font-bold text-xl">
                    {operator === '+' ? '+' : '×'}
                  </div>
                </div>

                <div className="space-y-2 col-start-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Second Number</label>
                  <input
                    required
                    type="number"
                    name="second"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 active:scale-[0.98]"
              >
                {isSubmitting ? 'Calculating...' : 'Calculate Result'}
              </button>

            </form>
          </div>
        </div>

        {/* Quick Info / Illustration Side - Optional or could be history summary */}
        <div className="hidden md:block space-y-6">
          <div className="bg-linear-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 text-white h-full min-h-[400px] flex flex-col justify-between relative overflow-hidden">
            {/* Abstract decoration */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Pro Calculator</h3>
              <p className="text-slate-400 leading-relaxed">
                Perform complex operations with ease. Your history is automatically saved for future reference.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              <div className="flex items-center gap-4 text-sm font-medium text-slate-400 mb-4">
                <div className="h-px bg-slate-700 flex-1"></div>
                <span>Features</span>
                <div className="h-px bg-slate-700 flex-1"></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-indigo-300">⚡</div>
                  <span>Instant Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-indigo-300">🛡️</div>
                  <span>Secure History</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
