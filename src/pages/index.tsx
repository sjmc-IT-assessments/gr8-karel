import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Home() {
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const checkPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'PancakeSymphony') {
            setLoading(true)
            await new Promise(r => setTimeout(r, 1500)) // Cool loading effect
            router.push('/assessment')
        } else {
            alert('Incorrect password')
        }
    }

    return (
        <div className="min-h-screen bg-blue-500 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Animated background elements */}
            <div className="absolute inset-0 w-full h-full">
                {[...Array(40)].map((_, i) => (
                    <div key={i} className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            width: `${Math.random() * 15 + 5}px`,
                            height: `${Math.random() * 15 + 5}px`,
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '50%'
                        }} />
                ))}
            </div>

            <div className="relative z-10 mb-8">
                <Image
                    src="logo.png"
                    alt="SJMC Logo"
                    width={120}
                    height={120}
                    priority
                    onError={(e) => {
                        console.error('Image failed to load');
                        e.currentTarget.src = '/images/logo.png'; // Try alternate path
                    }}
                />
            </div>

            <form onSubmit={checkPassword} className="relative z-10 bg-white/80 backdrop-blur p-8 rounded-xl shadow-xl w-80 space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Grade 8 Karel Assessment</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-center"
                    placeholder="Enter password"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full" />
                            <span className="ml-2">Loading...</span>
                        </div>
                    ) : (
                        'Start Assessment'
                    )}
                </button>
            </form>
            {/* Add this right before the closing main div */}
            <div className="absolute bottom-4 text-white/70 text-sm italic z-10">
                Designed, set and developed with love ❤️ Mr Coetzee
            </div>
        </div>

    )
}