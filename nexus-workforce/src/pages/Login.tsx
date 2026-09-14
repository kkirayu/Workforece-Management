import React, { useState } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { authApi } from '@/services/apiEndpoints';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('admin@acme.internal');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setUser, setTenant } = useAppStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await authApi.login(email, password);
      const { token, user } = data.data;

      localStorage.setItem('auth_token', token);

      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      setTenant({
        id: user.company?.id || 1,
        name: user.company?.name || 'Acme Corp',
        plan: user.company?.plan || 'Pro Plan',
      });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials. Try admin@acme.internal / password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">bolt</span>
          </div>
          <div>
            <span className="font-headline-lg text-xl font-bold text-black">Nexus</span>
            <span className="font-headline-lg text-xl font-bold text-[#6366f1] ml-1">Workforce</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#e4e4e7] p-8">
          <div className="mb-6">
            <h1 className="font-headline-lg text-xl font-bold text-black">Welcome back</h1>
            <p className="text-sm text-[#71717a] mt-1">Sign in to Acme Corp Workforce OS</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-[#fff1f2] border border-[#fecdd3] rounded-lg text-xs text-[#e11d48]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#71717a] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 bg-[#f3f3f4] rounded-lg border border-[#e4e4e7] text-sm text-black placeholder:text-[#a1a1aa] outline-none focus:bg-white focus:ring-1 focus:ring-black transition-all"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#71717a] mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 bg-[#f3f3f4] rounded-lg border border-[#e4e4e7] text-sm text-black placeholder:text-[#a1a1aa] outline-none focus:bg-white focus:ring-1 focus:ring-black transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#e4e4e7] accent-black" defaultChecked />
                <span className="text-xs text-[#71717a]">Remember me</span>
              </label>
              <a href="#" className="text-xs text-[#6366f1] hover:underline font-medium">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-black text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-xs text-[#a1a1aa]">Don't have an account?</span>
            <a href="#" className="text-xs text-[#6366f1] hover:underline font-medium ml-1">Contact Admin</a>
          </div>
        </div>

        <p className="text-center text-[10px] text-[#a1a1aa] mt-6">
          Nexus Workforce OS v2.14 — Powered by AI Decision Engine
        </p>
      </div>
    </div>
  );
};