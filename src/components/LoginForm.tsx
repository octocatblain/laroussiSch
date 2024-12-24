'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await signIn("credentials", {
                redirect: false,
                username: formData.email,
                password: formData.password,
            });

            if (!response || !response.ok) {
                throw new Error(response?.error || "Failed to log in.");
            }

            console.log("Login successful:", response);
            router.push("/"); // Redirect after login
        } catch (err) {
            console.error("Error during login:", err);
            setError(err.message || "An error occurred during login.");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const response = await signIn('google', { redirect: false });

            if (!response || !response.ok) {
                throw new Error(response?.error || 'Failed to log in with Google.');
            }

            console.log('Google login successful!');
            router.push('/'); // Redirect after Google login
        } catch (err) {
            console.error("Error during Google login:", err);
            setError(err.message || 'An error occurred during Google login.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white border border-slate-900 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Laroussi Mining SCH | Kenya
                </h1>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
                    Sign In
                </h2>
                {error && (
                    <p className="text-sm font-semibold text-center text-red-600 my-2">
                        Error: {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center mt-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="px-4 text-sm text-gray-500">or sign in with</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 px-4 py-2 text-white bg-red-800 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <FaGoogle className="text-2xl" />
                        Google
                    </button>
                </div>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <a
                        href="/auth/register"
                        className="text-blue-500 hover:underline"
                    >
                        Create an account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
