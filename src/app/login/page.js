import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <main className="flex h-screen">
            <div className="bg-black w-screen flex justify-center items-center">
                <LoginForm />
            </div>
        </main>
    )
}