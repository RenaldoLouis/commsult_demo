"use client"
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);
    const clearInputs = () => {
        setEmail("");
        setPassword("");
        setError("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn("credentials", {
            email,
            password,
            redirect: false
        })
            .then(res => {
                if (res.error) {
                    setError(JSON.parse(res.error).message);
                }
                else {
                    clearInputs();
                    router.push("/");
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        >
            <h1 className="text-2xl font-bold text-center text-black">Login</h1>

            <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
                Log In
            </button>

            {error && (
                <p className="text-red-600 font-medium text-center">{error}</p>
            )}
        </form>
    )
}

export default LoginForm;