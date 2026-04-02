"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Activity, Zap, TrendingUp, Apple, Smartphone, LayoutDashboard, BrainCircuit } from "lucide-react";

export default function ShapeOnPage() {
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.apxlab.shapeon";

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-lime-400 selection:text-black">
            {/* Top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-lime-400 to-emerald-400 fixed top-0 z-[60]"></div>

            {/* Navigation */}
            <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                            <Image
                                src="/shapeon/logo.png"
                                alt="ShapeOn Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">SHAPE<span className="text-lime-400 font-normal">ON</span></span>
                    </div>
                    
                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-lime-400 hover:bg-lime-300 text-black px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] active:scale-95 text-sm flex items-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        Get Started
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-lime-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                                </span>
                                AI-Powered Fitness Evolution
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[0.95]">
                                RE-DESIGN <br />
                                <span className="text-lime-400 drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]">YOUR BODY</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                ShapeOn uses advanced AI to track your nutrition, monitor weight goals, and provide personalized coaching. 
                                <span className="block mt-4 text-white font-medium italic">Stop guessing. Start growing.</span>
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
                                    <div className="text-2xl font-bold text-white">50k+</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Active Humans</div>
                                </div>
                                <div className="h-8 w-[1px] bg-slate-800"></div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-white text-center">4.9/5</div>
                                    <div className="flex text-yellow-500 text-[10px] gap-0.5 justify-center lg:justify-start">{"★★★★★"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-lg lg:max-w-none order-1 lg:order-2 flex justify-center">
                            {/* Visual Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                            
                            <div className="relative z-10 w-full max-w-[320px] aspect-[9/18.5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7),0_0_50px_rgba(163,230,53,0.15)] border border-slate-800/50">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/shapeon/app_showcase.png"
                                >
                                    <source src="/shapeon/app_showcase.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section id="features" className="py-32 relative bg-slate-950">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Engineered for <span className="text-lime-400">Excellence</span></h2>
                        <p className="text-lg text-slate-400">Ditch the spreadsheets. Our AI ecosystem handles the data so you can focus on the iron.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-800/50 hover:border-lime-500/50 transition-all group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-lime-400/10 text-lime-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">AI Nutritionist</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Simply snap a photo of your meal. Our computer vision AI identifies portions, macros, and micro-nutrients instantly.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-800/50 hover:border-lime-500/50 transition-all group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-lime-400/10 text-lime-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Growth Monitor</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Precise tracking for muscle gain and weight management. Get predictive insights on when you&apos;ll hit your targets.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-800/50 hover:border-lime-500/50 transition-all group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-lime-400/10 text-lime-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Biometric Sync</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Seamlessly syncs with your smart gear to correlate heart rate, sleep quality, and recovery with your nutritional intake.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Powerful CTA */}
            <section className="py-24 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-lime-400 rounded-[3rem] p-12 md:p-24 text-black relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        <div className="relative z-10 flex-1">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase tracking-tighter">Ready to <br /> Reshape?</h2>
                            <p className="text-black/80 font-medium text-xl mb-12 max-w-md">
                                Join the thousands who have already unlocked their peak physical potential with ShapeOn.
                            </p>
                            <a
                                href={googlePlayUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest text-sm"
                            >
                                <Smartphone className="w-5 h-5 text-lime-400" />
                                Download on Play Store
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center relative translate-y-12">
                            <div className="absolute -top-12 -left-12 text-[200px] font-black opacity-10 leading-none select-none italic">BODY</div>
                            <Image
                                src="/shapeon/logo.png"
                                alt="ShapeOn App"
                                width={500}
                                height={500}
                                className="max-w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float scale-110"
                            />
                        </div>
                        {/* Background blobs */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-800/80 pt-24 pb-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/shapeon/logo.png"
                                        alt="ShapeOn Logo"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-white">SHAPE<span className="text-lime-400 font-normal">ON</span></span>
                            </div>
                            <p className="text-slate-500 max-w-sm font-medium">The ultimate AI health & monitoring ecosystem. Elevate your existence.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-center md:items-start uppercase tracking-widest text-[10px] font-black">
                            <Link href="/shapeon/privacy" className="text-slate-500 hover:text-lime-400 transition-colors">Privacy Architecture</Link>
                            <Link href="/shapeon/terms" className="text-slate-500 hover:text-lime-400 transition-colors">Digital Norms & Conduct</Link>
                            <a href="mailto:support@apxlab.space" className="text-slate-500 hover:text-lime-400 transition-colors">Encrypted Support</a>
                        </div>
                    </div>
                    <div className="border-t border-slate-900 pt-12 text-slate-600 text-[10px] font-bold flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                        <div className="uppercase tracking-[0.3em]">© 2024 ShapeOn Bio-Metric Systems. All rights decoded.</div>
                        <div className="flex gap-4">
                            <div className="hover:text-lime-400 transition-colors cursor-pointer">INSTAGRAM</div>
                            <div className="hover:text-lime-400 transition-colors cursor-pointer">TWITTER/X</div>
                            <div className="hover:text-lime-400 transition-colors cursor-pointer">WHATSAPP</div>
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
            `}</style>
        </div>
    );
}
