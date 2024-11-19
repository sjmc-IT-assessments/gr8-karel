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
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
            <form onSubmit={checkPassword} className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-80">
                <h1 className="text-3xl font-bold text-center text-gray-800">Grade 8 Karel Assessment</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter password"
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition-colors">
                    Start Assessment
                </button>
            </form>
        </div>
    )
}