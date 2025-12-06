"use client";

import ParticleRing from "@/components/ParticleRing";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 relative overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-20 p-6">
                <div className="flex justify-end items-center">
                    <div className="text-2xl font-bold text-white">
                        appxlab
                    </div>
                </div>
            </header>

            {/* Particle Background */}
            <ParticleRing>
                {/* Main Content */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-200 mb-4">
                            We Design Lightning Fast
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-medium text-slate-300">
                            Apps for the World
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
                            Crafting premium digital experiences that scale globally
                        </p>
                    </div>
                </div>
            </ParticleRing>

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="flex justify-center space-x-8 text-sm text-slate-400">
                    <a
                        href="/legal"
                        className="hover:text-slate-200 transition-colors cursor-pointer"
                    >
                        Legal
                    </a>
                    <a
                        href="mailto:info@appxlab.space"
                        className="hover:text-slate-200 transition-colors cursor-pointer"
                    >
                        Contact Us
                    </a>
                </div>
            </footer>
        </div>
    );
}