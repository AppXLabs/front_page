import Image from "next/image";
import Link from "next/link";
import { Heart, CheckCircle2 } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.jaanuji.app";

export default function JaanuJiPage() {
    return (
        <div className="h-screen flex flex-col bg-pink-50 font-sans text-gray-900 selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
            {/* Navigation */}
            <nav className="flex-shrink-0 border-b border-pink-100 bg-white/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200">
                            <Heart className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Jaanu Ji</span>
                    </div>
                    <a
                        href={GOOGLE_PLAY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold animate-pulse hover:bg-red-600 hover:animate-none transition-colors shadow-md"
                    >
                        Download app now
                    </a>
                </div>
            </nav>

            {/* Main: fills remaining height */}
            <main className="flex-1 min-h-0 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-6">
                <div className="flex-1 text-center md:text-left z-10 min-w-0">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight">
                        Chat.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                            Joy & Love.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Connect with intresting charchters. Experience genuine conversations and find your joy.
                    </p>
                    <a
                        href={GOOGLE_PLAY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/notifypay/google_play.png"
                            alt="Get it on Google Play"
                            width={220}
                            height={68}
                            className="h-16 w-auto"
                        />
                    </a>
                    <p className="mt-4 text-sm text-gray-600 flex items-center justify-center md:justify-start gap-4 flex-wrap">
                        <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            No hidden fees
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            Free to use
                        </span>
                    </p>
                </div>

                <div className="flex-1 min-h-0 flex justify-center items-center w-full max-w-[560px] md:max-w-[640px] lg:max-w-[720px]">
                    <div className="relative w-full h-full min-h-[600px] max-h-[calc(100vh-4rem)]">
                        <Image
                            src="/jaanuji/mockup.png"
                            alt="Jaanu Ji App Screenshot"
                            fill
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="flex-shrink-0 border-t border-pink-100 py-4 px-4 bg-white/50">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-3">
                    <div>&copy; 2025 Jaanu Ji. All rights reserved.</div>
                    <div className="flex gap-4">
                        <Link href="/jaanuji/privacy" className="hover:text-pink-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/jaanuji/terms" className="hover:text-pink-600 transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
