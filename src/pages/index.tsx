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
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <form onSubmit={checkPassword} className="space-y-4">
                <h1 className="text-2xl font-bold text-center">Grade 8 Karel Assessment</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter password"
                />
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                    Start Assessment
                </button>
            </form>
        </div>
    )
}