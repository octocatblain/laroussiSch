//login form
'use client';

import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = ({ session }: any) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

  
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    // Handle form submission and sign in with credentials
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        signIn('credentials', {
            redirect: false,
            username: formData.email,
            password: formData.password,
        })
            .then((response) => {
                if (!response || !response.ok) {
                    throw new Error(response?.error || 'Failed to log in with credentials.');
                }
                console.log('Login successful!', session);

                // Refresh the session
                return getSession(); // Get the updated session
            })
            .then((session) => {
                if (!session) {
                    throw new Error('Failed to refresh session.');
                }
                console.log('Session refreshed!', session);

                // Redirect to the home page after session refresh
                return router.push('/');
            })
            .catch((err: any) => {
                setError(err.message || 'An error occurred during login.');
            })
            .finally(() => {
                // Optional: Code to run when either success or failure occurs
                console.log('Login process completed');
            });
    };


    // Handle Google sign in with next-auth
    const handleGoogleSignIn = () => {
        signIn('google', { redirect: false })
            .then((response) => {
                if (!response || !response.ok) {
                    throw new Error(response?.error || 'Failed to log in with Google.');
                }
                console.log('Google login successful!', session);

                // Refresh the session
                return getSession(); // Get the updated session after Google login
            })
            .then((session) => {
                if (!session) {
                    throw new Error('Failed to refresh session.');
                }
                console.log('Session refreshed!', session);

                // Redirect to the home page after session refresh
                return router.push('/');
            })
            .catch((err: any) => {
                setError(err.message || 'An error occurred during Google login.');
            })
            .finally(() => {
                // Optional: Code to run when either success or failure occurs
                console.log('Google login process completed');
            });
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white border border-slate-900 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Laroussi Mining SCH | Kenya</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">Sign In</h2>
                {error && (
                    <p className="text-sm font-semibold text-center text-red-600 my-2">Error: {error}</p>
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

                {/*-----or------ */}
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
