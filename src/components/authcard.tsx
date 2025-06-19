"use client";
import { useState } from "react";

interface AuthCardProps {
    onSubmit: (email: string, password: string) => void;
    error?: string;
}

export const AuthCard = ({ onSubmit, error }: AuthCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <div className="bg-primary min-h-screen flex items-center justify-center p-4">
            <div className="bg-secondary rounded-2xl drop-shadow-md p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 outline-none text-base text-gray-700 bg-white transition-colors"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 outline-none text-base text-gray-700 bg-white transition-colors"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}