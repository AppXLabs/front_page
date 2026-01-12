
import Image from "next/image";
import Link from "next/link";
import { Heart, Video, Sparkles } from "lucide-react";

export default function JaanuJiPage() {
    return (
        <div className="min-h-screen bg-pink-50 font-sans text-gray-900 selection:bg-pink-200 selection:text-pink-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-pink-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200">
                            <Heart className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Jaanu Ji</span>
                    </div>
                    <div className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full animate-pulse">
                        Coming Soon
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                <div className="flex-1 text-center md:text-left z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                        Video Chat. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Joy & Love.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                        Connect with real people. Experience genuine conversations and find your joy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <button disabled className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 opacity-80 cursor-not-allowed flex items-center gap-2">
                            <Video className="w-5 h-5" />
                            App Coming Soon
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative w-full flex justify-center">
                    {/* Phone Mockup Frame */}
                    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
                        <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                        <div className="h-[32px] w-[3px] bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

                        {/* Screen Content */}
                        <div className="w-full h-full bg-white relative overflow-hidden flex items-center justify-center bg-gray-100">
                            <Image
                                src="/jaanuji_mockup.png"
                                alt="Jaanu Ji App Screenshot"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Decorative Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-pink-200/40 to-rose-200/40 rounded-full blur-[100px] -z-10"></div>
                </div>

            </main>

            {/* Minimal Footer */}
            <footer className="border-t border-pink-100 py-8 mt-12 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <div>&copy; 2025 Jaanu Ji. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/jaanuji/privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link>
                        <Link href="/jaanuji/terms" className="hover:text-pink-600 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
