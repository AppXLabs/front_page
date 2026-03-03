import Image from "next/image";
import Link from "next/link";
import { Sparkles, Moon, Sun, Star, Compass, Smartphone, ArrowRight } from "lucide-react";

export default function AstroAIPage() {
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.app.astroai";

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">Astro AI</span>
                    </div>
                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 px-5 py-2 rounded-full font-medium transition-all active:scale-95 text-sm flex items-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        Get Beta Access
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
                {/* Background stars/glow */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center md:text-left z-10 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-purple-100">
                                <Sparkles className="w-3 h-3" />
                                AI-Powered Astrology
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
                                Modern <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">Cosmic Wisdom</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Astro AI blends ancient astrological wisdom with advanced artificial intelligence to provide hyper-personalized insights for your life journey.
                                <span className="block mt-4 text-purple-600 font-medium italic">Discover what the stars have in store for you.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a
                                    href={googlePlayUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-purple-900/20 flex items-center gap-3 active:scale-[0.98]"
                                >
                                    Download App
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-sm text-gray-500">Coming soon to App Store</p>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-lg md:max-w-none order-1 md:order-2">
                            <div className="relative z-10 flex justify-center">
                                {/* Astro AI Showcase */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                                    <div className="relative border-gray-200 bg-white border-[12px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                                        <div className="h-full w-full bg-gradient-to-b from-white to-purple-50 flex flex-col items-center justify-center p-6 text-center">
                                            <Moon className="w-16 h-16 text-purple-600 mb-6 animate-pulse" />
                                            <div className="space-y-4 w-full">
                                                <div className="h-2 w-3/4 bg-gray-100 rounded-full mx-auto"></div>
                                                <div className="h-2 w-1/2 bg-gray-100 rounded-full mx-auto"></div>
                                                <div className="h-24 w-full border border-gray-100 rounded-2xl bg-gray-50 mt-8"></div>
                                                <div className="grid grid-cols-2 gap-3 mt-8">
                                                    <div className="h-12 border border-gray-100 rounded-xl bg-gray-50"></div>
                                                    <div className="h-12 border border-gray-100 rounded-xl bg-gray-50"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Celestial Features</h2>
                        <p className="text-lg text-gray-600">Precisely calculated, AI-refined astrological predictions for every aspect of your life.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Precision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Real-time planet transit analysis mapped to your unique birth chart. Get personalized daily horoscopes that actually resonate.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compatibility AI</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Deep relationship analysis using synastry and AI to understand the cosmic dynamics between you and others.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/5 transition-all">
                            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                                <Sun className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Life Path Mapping</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Long-term forecast and life path analysis. Understand major planetary cycles and when to take your next big step.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                                <span className="text-2xl font-bold text-gray-900">Astro AI</span>
                            </div>
                            <p className="text-gray-500">Ancient wisdom for the modern soul.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-gray-900 font-bold mb-6">Company</h4>
                                <ul className="space-y-4 text-gray-500">
                                    <li><Link href="/astroai/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="/astroai/terms" className="hover:text-purple-600 transition-colors">Terms of Service</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold mb-6">App</h4>
                                <ul className="space-y-4 text-gray-500">
                                    <li><a href={googlePlayUrl} className="hover:text-purple-600 transition-colors">Google Play</a></li>
                                    <li><span className="opacity-50">App Store (Q3 2024)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>&copy; 2026 AppXLabs. All cosmic rights reserved.</div>
                        <div className="text-gray-400 font-medium">✨ Guided by the Stars</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
