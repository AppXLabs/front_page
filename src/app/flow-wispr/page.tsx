import Image from "next/image";
import Link from "next/link";
import { Mic, Brain, FolderOpen, Smartphone } from "lucide-react";

export default function FlowWisprPage() {
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.flow.wispr";

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-white selection:bg-yellow-400/20 selection:text-yellow-300">
            {/* Navigation */}
            <nav className="border-b border-white/10 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/20 ring-1 ring-white/10">
                            <Image
                                src="/flow-wispr/logo.png"
                                alt="Flow Wispr Logo"
                                width={36}
                                height={36}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Flow Wispr</span>
                    </div>
                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-100 text-gray-950 px-5 py-2 rounded-full font-semibold transition-all shadow-lg shadow-white/10 active:scale-95 text-sm flex items-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        <span className="hidden sm:inline">Download App</span>
                        <span className="sm:hidden">Get App</span>
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-8 border border-yellow-400/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                                </span>
                                AI-Powered Voice Notes
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
                                Think
                                <br />
                                <span className="text-yellow-400 italic">out</span>
                                <br />
                                loud
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Flow Wispr — Voice to notes, in seconds.
                                <span className="block mt-2 font-medium text-gray-300">
                                    Capture your thoughts instantly with AI.
                                </span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a
                                    href={googlePlayUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 transition-opacity hover:scale-105 active:scale-95"
                                >
                                    <Image
                                        src="/google_play.png"
                                        alt="Get it on Google Play"
                                        width={200}
                                        height={60}
                                        className="h-16 w-auto"
                                    />
                                </a>
                            </div>
                            <p className="mt-8 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-3">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Free to use
                                </span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    No ads
                                </span>
                            </p>
                        </div>

                        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
                            <div className="relative z-10 flex justify-center">
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 max-w-[340px] w-full">
                                    <Image
                                        src="/flow-wispr/hero.jpg"
                                        alt="Flow Wispr App Interface"
                                        width={540}
                                        height={1080}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-400/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute top-1/4 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Capture Ideas at the Speed of Thought
                        </h2>
                        <p className="text-lg text-gray-400">
                            Your voice, transformed into beautifully organized notes — powered by AI.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-yellow-400/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mic className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Instant Capture</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tap and speak. Your voice is instantly converted to clean, readable notes.
                                No typing needed — just think out loud.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-purple-400/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Brain className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Advanced AI understands context, cleans up your speech, and creates
                                perfectly structured notes from your words.
                            </p>
                        </div>

                        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-yellow-400/20 transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-emerald-400/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FolderOpen className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Smart Organization</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Organize notes into folders effortlessly. Find any note instantly with
                                powerful search and smart categorization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA shimmer animation */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 14px 40px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #0f0f14 0%, #1a1a2e 100%);
                    color: white;
                    font-weight: 800;
                    font-size: 1.1rem;
                    letter-spacing: -0.01em;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                @media (min-width: 768px) {
                    .cta-btn {
                        padding: 22px 64px;
                        border-radius: 26px;
                        font-size: 1.5rem;
                    }
                }
                .cta-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(168, 85, 247, 0.1) 20%,
                        rgba(250, 204, 21, 0.15) 40%,
                        rgba(99, 102, 241, 0.12) 60%,
                        rgba(236, 72, 153, 0.1) 80%,
                        transparent 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 3s ease-in-out infinite;
                }
                .cta-btn:hover {
                    transform: scale(1.05);
                    border-color: rgba(250, 204, 21, 0.3);
                    box-shadow: 0 0 40px rgba(250, 204, 21, 0.15), 0 0 80px rgba(168, 85, 247, 0.08);
                }
                .cta-btn:active {
                    transform: scale(0.97);
                }
            `}} />

            {/* CTA Section */}
            <section className="py-24 md:py-32 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden border border-white/5 backdrop-blur-sm">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Stop typing.
                                <br />
                                <span className="text-yellow-400">Start speaking.</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-14 max-w-lg mx-auto">
                                Download Flow Wispr and turn every thought into a note — faster than ever before.
                            </p>

                            {/* Shimmer CTA button */}
                            <a
                                href={googlePlayUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cursor-pointer"
                            >
                                <span className="relative z-10">Download Now</span>
                            </a>
                        </div>

                        {/* Background neon glow effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-[80px]"></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8 mb-20 md:mb-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-start gap-8 mb-12">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/20 ring-1 ring-white/10">
                                    <Image
                                        src="/flow-wispr/logo.png"
                                        alt="Flow Wispr Logo"
                                        width={36}
                                        height={36}
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-xl font-bold text-white">Flow Wispr</span>
                            </div>
                            <p className="text-gray-500 text-sm">Think out loud. Voice to notes, powered by AI.</p>
                        </div>
                        <a
                            href={googlePlayUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-90 transition-opacity hidden md:block"
                        >
                            <Image
                                src="/google_play.png"
                                alt="Get it on Google Play"
                                width={200}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>
                    <div className="border-t border-white/5 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>&copy; {new Date().getFullYear()} Flow Wispr. All rights reserved.</div>
                        <div className="flex gap-6">
                            <Link href="/flow-wispr/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                            <Link href="/flow-wispr/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Mobile Floating CTA */}
            <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
                <a
                    href={googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-2xl hover:scale-105 transition-transform pointer-events-auto"
                >
                    <Image
                        src="/google_play.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={53}
                        className="h-14 w-auto"
                    />
                </a>
            </div>
        </div>
    );
}
