import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const [password, setPassword] = useState('')
    const router = useRouter()

    const checkPassword = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'PancakeSymphony') {
            router.push('/assessment')
        } else {
            alert('Incorrect password')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-blue-200 flex flex-col items-center justify-center animate-gradient">
            <div className="text-center space-y-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-700">SJMC</h2>
                <img src="/logo.png" alt="SJMC Logo" className="w-24 h-24 mx-auto" />
            </div>
            <form onSubmit={checkPassword} className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-xl w-80 space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Grade 8 Karel Assessment</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-center"
                    placeholder="Enter password"
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all hover:scale-105">
                    Start Assessment
                </button>
            </form>
        </div>
    )
}