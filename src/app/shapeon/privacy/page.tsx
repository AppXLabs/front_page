"use client";

import { apps } from "@/data";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye } from "lucide-react";
import Image from "next/image";

export default function ShapeOnPrivacyPolicy() {
    const app = apps.find(a => a.id === "shapeon");
    const document = app?.documents.privacy;

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2 uppercase tracking-widest">Protocol Null</h1>
                    <p className="text-slate-500 mb-6">Document encryption failure.</p>
                    <Link href="/shapeon" className="text-lime-400 hover:text-lime-300 underline font-bold">
                        Return to Base
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-lime-400 selection:text-black">
            {/* Top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-lime-400 to-emerald-400 fixed top-0 z-[60]"></div>

            {/* Navigation */}
            <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    <Link href="/shapeon" className="flex items-center gap-3 hover:opacity-80 transition-all">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                            <Image src="/shapeon/logo.png" alt="ShapeOn Logo" width={32} height={32} className="object-contain p-1" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white">SHAPE<span className="text-lime-400 font-normal">ON</span></span>
                    </Link>
                    <Link href="/shapeon" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-lime-400 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Exit to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-[100px] -z-10"></div>
                
                <div className="mb-20 border-l-4 border-lime-400 pl-8">
                    <div className="flex items-center gap-2 text-lime-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                        <ShieldCheck className="w-4 h-4" />
                        Secure Document
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase italic">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                        <p>Revised: <span className="text-slate-300">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-slate-800 rounded-full"></span>
                        <p>Channel: <a href={`mailto:${document.contactEmail}`} className="text-lime-400 hover:text-lime-300 transition-colors">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-20">
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
                        <Lock className="w-5 h-5 text-lime-400 mb-3" />
                        <div className="text-white text-xs font-bold uppercase mb-1 tracking-tighter">Encryption</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">Bank-grade data protection</div>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
                        <Eye className="w-5 h-5 text-lime-400 mb-3" />
                        <div className="text-white text-xs font-bold uppercase mb-1 tracking-tighter">Transparency</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">Clear data usage logs</div>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
                        <ShieldCheck className="w-5 h-5 text-lime-400 mb-3" />
                        <div className="text-white text-xs font-bold uppercase mb-1 tracking-tighter">Control</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">Total data ownership</div>
                    </div>
                </div>

                <div
                    className="prose prose-invert prose-lime max-w-none text-slate-400 font-medium leading-relaxed
                               prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:italic
                               prose-strong:text-white prose-a:text-lime-400"
                    dangerouslySetInnerHTML={{
                        __html: document.content
                            .replace(/<h2>/g, '<h2 class="text-3xl font-black text-white mt-24 mb-10 border-b border-white/10 pb-4 uppercase italic tracking-tight">')
                            .replace(/<p>/g, '<p class="mb-8 text-lg leading-relaxed text-slate-400">')
                            .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-10 space-y-4 text-slate-400">')
                            .replace(/<li>/g, '<li class="pl-2">')
                    }}
                />
            </main>

            {/* Footer */}
            <footer className="bg-slate-900/30 border-t border-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center overflow-hidden">
                             <Image src="/shapeon/logo.png" alt="ShapeOn Logo" width={20} height={20} className="object-contain p-0.5" />
                        </div>
                        <span className="text-sm font-black text-white tracking-widest uppercase">ShapeOn <span className="text-lime-400">Bio-Systems</span></span>
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Link href="/shapeon/terms" className="text-slate-500 hover:text-lime-400 transition-colors">
                            Terms of Conduct
                        </Link>
                        <Link href="/shapeon" className="text-slate-500 hover:text-lime-400 transition-colors">
                            Main Interface
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
