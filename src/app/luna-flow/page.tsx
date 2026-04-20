"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Moon, CalendarDays, Shield, Sparkles, Bell, Smartphone, Flower2, Droplets } from "lucide-react";

export default function LunaFlowPage() {
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.luna.flow";

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-fuchsia-50/50 to-purple-50 font-sans text-gray-800 selection:bg-pink-400 selection:text-white overflow-x-hidden">
            {/* Top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 fixed top-0 z-[60]"></div>

            {/* Floating decorative elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-3 h-3 bg-pink-300/40 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-2 h-2 bg-purple-300/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-60 left-1/4 w-2 h-2 bg-rose-300/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-pink-200/40 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Navigation */}
            <nav className="border-b border-pink-200/60 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl shadow-md border border-pink-100/50">
                            <Image
                                src="/luna-flow/flow_logo.png"
                                alt="Luna Flow Logo"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-800">Luna<span className="text-pink-500 font-light"> Flow</span></span>
                    </div>

                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-pink-300/40 hover:shadow-pink-400/50 active:scale-95 text-sm flex items-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        Download App
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden relative">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold uppercase tracking-[0.15em] mb-8 border border-pink-200">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                                </span>
                                Your Cycle, Your Way
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[0.95]">
                                Track Your<br />
                                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">Period Gently</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Luna Flow is your trusted companion for period tracking, cycle predictions, and wellness insights — designed with care, just for you.
                                <span className="block mt-4 text-pink-500 font-medium">Your body. Your rhythm. Your flow. 🌸</span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                                <a
                                    href={googlePlayUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 transition-all hover:scale-105 active:scale-95 block"
                                >
                                    <Image
                                        src="/google_play.png"
                                        alt="Get it on Google Play"
                                        width={220}
                                        height={66}
                                        className="h-16 w-auto"
                                    />
                                </a>
                            </div>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-gray-900">10k+</div>
                                    <div className="text-xs text-pink-500/80 uppercase tracking-widest font-semibold">Happy Users</div>
                                </div>
                                <div className="h-8 w-[1px] bg-pink-200"></div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-gray-900 text-center">4.8/5</div>
                                    <div className="flex text-pink-500 text-[10px] gap-0.5 justify-center lg:justify-start">{"★★★★★"}</div>
                                </div>
                                <div className="h-8 w-[1px] bg-pink-200"></div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-gray-900">99%</div>
                                    <div className="text-xs text-pink-500/80 uppercase tracking-widest font-semibold">Accurate</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-lg lg:max-w-none order-1 lg:order-2 flex justify-center">
                            {/* Visual Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-300/15 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Phone mockup */}
                            <div className="relative z-10 w-full max-w-[280px] aspect-[9/18.5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-300/30 border border-pink-200/60 bg-gradient-to-b from-white to-pink-50 flex flex-col items-center justify-center p-8">
                                <div className="w-24 h-24 rounded-[2rem] shadow-md shadow-pink-200/40 border border-pink-100/50 flex items-center justify-center mb-6 overflow-hidden">
                                    <Image
                                        src="/luna-flow/flow_logo.png"
                                        alt="Luna Flow"
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-800 mb-2">Luna Flow</div>
                                    <div className="text-pink-400 text-sm mb-6">Period & Cycle Tracker</div>
                                </div>
                                {/* Mini cycle visualization */}
                                <div className="w-full space-y-3">
                                    <div className="flex items-center gap-3 bg-pink-50 rounded-2xl p-3 border border-pink-100">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                            <CalendarDays className="w-4 h-4 text-pink-500" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-800">Next Period</div>
                                            <div className="text-[10px] text-gray-500">In 12 days</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-purple-50 rounded-2xl p-3 border border-purple-100">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                            <Moon className="w-4 h-4 text-purple-500" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-800">Current Phase</div>
                                            <div className="text-[10px] text-gray-500">Follicular</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-rose-50 rounded-2xl p-3 border border-rose-100">
                                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                                            <Heart className="w-4 h-4 text-rose-500" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-800">Mood</div>
                                            <div className="text-[10px] text-gray-500">Feeling great ✨</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-32 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Designed with <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Love & Care</span></h2>
                        <p className="text-lg text-gray-500">Everything you need to understand your body, all in one beautiful place.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-pink-100 hover:border-pink-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-100/50">
                            <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-pink-100">
                                <CalendarDays className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Predictions</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Accurate period and ovulation predictions that learn from your unique cycle patterns over time.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-purple-100 hover:border-purple-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-purple-100/50">
                            <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-purple-100">
                                <Moon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Cycle Insights</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Understand each phase of your cycle — from menstruation to ovulation — with gentle, personalized insights.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-rose-100 hover:border-rose-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-rose-100/50">
                            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-rose-100">
                                <Bell className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Gentle Reminders</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Get timely, discreet notifications for your upcoming periods, fertile windows, and self-care moments.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-fuchsia-100 hover:border-fuchsia-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-fuchsia-100/50">
                            <div className="w-16 h-16 bg-fuchsia-50 text-fuchsia-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-fuchsia-100">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Mood & Symptom Log</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Track your moods, symptoms, and energy levels to find patterns and take better care of yourself.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-violet-100 hover:border-violet-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-violet-100/50">
                            <div className="w-16 h-16 bg-violet-50 text-violet-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-violet-100">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Private & Secure</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Your health data stays yours. End-to-end encryption and strict privacy protection — always.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-pink-100 hover:border-pink-300 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-100/50">
                            <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-pink-100">
                                <Flower2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Wellness Tips</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Curated self-care tips, nutrition advice, and exercise suggestions tailored to each phase of your cycle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        <div className="relative z-10 flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Your Cycle<br />Deserves <span className="italic">Kindness</span></h2>
                            <p className="text-white/90 text-lg mb-12 max-w-md leading-relaxed">
                                Join thousands of women who have found peace of mind with Luna Flow. Because understanding your body should feel empowering, not stressful. 💕
                            </p>
                            <a
                                href={googlePlayUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl text-sm"
                            >
                                <Smartphone className="w-5 h-5" />
                                Download on Play Store
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center relative">
                            <div className="absolute -top-12 -left-12 text-[180px] font-black opacity-10 leading-none select-none">🌙</div>
                            <Image
                                src="/luna-flow/flow_logo.png"
                                alt="Luna Flow App"
                                width={400}
                                height={400}
                                className="max-w-full h-auto shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float max-w-[300px] rounded-[3rem]"
                            />
                        </div>
                        {/* Background blobs */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-pink-600 rounded-full blur-3xl opacity-20"></div>
                    </div>
                </div>
            </section>

            {/* Legal Section */}
            <section id="legal" className="py-24 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Legal & Privacy</h2>
                        <p className="text-gray-500">Transparency is at the heart of Luna Flow. Read our policies below.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href="/luna-flow/privacy" className="group bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-pink-100 hover:border-pink-300 transition-all hover:-translate-y-1 duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-100/50">
                            <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-100">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Privacy Policy</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">Learn how we collect, use, and protect your personal and health data. Your privacy is our top priority.</p>
                            <span className="text-pink-500 text-sm font-semibold group-hover:underline flex items-center gap-2">
                                Read Full Policy →
                            </span>
                        </Link>

                        <Link href="/luna-flow/terms" className="group bg-white/80 backdrop-blur-sm p-10 rounded-[2rem] border border-purple-100 hover:border-purple-300 transition-all hover:-translate-y-1 duration-300 shadow-sm hover:shadow-lg hover:shadow-purple-100/50">
                            <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-100">
                                <Droplets className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Terms & Conditions</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">Understand the terms of using Luna Flow, including our health disclaimers and user responsibilities.</p>
                            <span className="text-purple-500 text-sm font-semibold group-hover:underline flex items-center gap-2">
                                Read Full Terms →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white/50 border-t border-pink-100 pt-24 pb-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg shadow-sm border border-pink-100/50">
                                    <Image
                                        src="/luna-flow/flow_logo.png"
                                        alt="Luna Flow Logo"
                                        width={32}
                                        height={32}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-gray-800">Luna<span className="text-pink-500 font-light"> Flow</span></span>
                            </div>
                            <p className="text-gray-400 max-w-sm">Your gentle companion for period tracking, cycle insights, and wellness. Made with love. 💕</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-center md:items-start text-xs font-semibold uppercase tracking-widest">
                            <Link href="/luna-flow/privacy" className="text-gray-400 hover:text-pink-500 transition-colors">Privacy Policy</Link>
                            <Link href="/luna-flow/terms" className="text-gray-400 hover:text-pink-500 transition-colors">Terms & Conditions</Link>
                            <a href="mailto:support@apxlab.space" className="text-gray-400 hover:text-pink-500 transition-colors">Support</a>
                        </div>
                    </div>
                    <div className="border-t border-pink-100 pt-12 text-gray-400 text-xs font-medium flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                        <div className="tracking-widest">© 2026 Luna Flow by APXLAB. All rights reserved.</div>
                        <div className="flex gap-4 text-[10px] font-semibold uppercase tracking-wider">
                            <div className="hover:text-pink-500 transition-colors cursor-pointer">Instagram</div>
                            <div className="hover:text-pink-500 transition-colors cursor-pointer">Twitter/X</div>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .delay-500 { animation-delay: 500ms; }
                .delay-700 { animation-delay: 700ms; }
                .delay-1000 { animation-delay: 1000ms; }
            `}</style>
        </div>
    );
}
