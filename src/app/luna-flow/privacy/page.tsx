"use client";

import { apps } from "@/data";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye } from "lucide-react";
import Image from "next/image";

export default function LunaFlowPrivacyPolicy() {
    const app = apps.find(a => a.id === "luna-flow");
    const document = app?.documents.privacy;

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-pink-50 text-gray-800">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Document Not Found</h1>
                    <p className="text-gray-500 mb-6">Unable to load privacy policy.</p>
                    <Link href="/luna-flow" className="text-pink-500 hover:text-pink-600 underline font-semibold">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-fuchsia-50/50 to-purple-50 font-sans text-gray-800 selection:bg-pink-400 selection:text-white">
            {/* Top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 fixed top-0 z-[60]"></div>

            {/* Navigation */}
            <nav className="border-b border-pink-200/60 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    <Link href="/luna-flow" className="flex items-center gap-3 hover:opacity-80 transition-all">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-md shadow-pink-200/50 border border-pink-100">
                            <Image src="/luna-flow/flow_logo.png" alt="Luna Flow Logo" width={40} height={40} className="object-cover w-full h-full" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-800">Luna<span className="text-pink-500 font-light"> Flow</span></span>
                    </Link>
                    <Link href="/luna-flow" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/20 rounded-full blur-[100px] -z-10"></div>

                <div className="mb-20 border-l-4 border-pink-400 pl-8">
                    <div className="flex items-center gap-2 text-pink-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
                        <ShieldCheck className="w-4 h-4" />
                        Privacy Policy
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-gray-400 text-[10px] font-semibold uppercase tracking-widest">
                        <p>Last Updated: <span className="text-gray-600">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-pink-300 rounded-full"></span>
                        <p>Contact: <a href={`mailto:${document.contactEmail}`} className="text-pink-500 hover:text-pink-600 transition-colors">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-20">
                    <div className="bg-white/80 p-6 rounded-2xl border border-pink-100 shadow-sm">
                        <Lock className="w-5 h-5 text-pink-500 mb-3" />
                        <div className="text-gray-800 text-xs font-bold mb-1">Encrypted</div>
                        <div className="text-[10px] text-gray-400 font-medium leading-tight">AES-256 data protection</div>
                    </div>
                    <div className="bg-white/80 p-6 rounded-2xl border border-purple-100 shadow-sm">
                        <Eye className="w-5 h-5 text-purple-500 mb-3" />
                        <div className="text-gray-800 text-xs font-bold mb-1">Transparent</div>
                        <div className="text-[10px] text-gray-400 font-medium leading-tight">Clear data usage</div>
                    </div>
                    <div className="bg-white/80 p-6 rounded-2xl border border-rose-100 shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-rose-500 mb-3" />
                        <div className="text-gray-800 text-xs font-bold mb-1">Your Control</div>
                        <div className="text-[10px] text-gray-400 font-medium leading-tight">Full data ownership</div>
                    </div>
                </div>

                <div
                    className="prose max-w-none text-gray-600 font-medium leading-relaxed
                               prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                               prose-strong:text-gray-800 prose-a:text-pink-500"
                    dangerouslySetInnerHTML={{
                        __html: document.content
                            .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-20 mb-8 border-b border-pink-100 pb-4">')
                            .replace(/<p>/g, '<p class="mb-8 text-lg leading-relaxed text-gray-600">')
                            .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-10 space-y-4 text-gray-600">')
                            .replace(/<li>/g, '<li class="pl-2">')
                    }}
                />
            </main>

            {/* Footer */}
            <footer className="bg-white/50 border-t border-pink-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-pink-100">
                            <Image src="/luna-flow/flow_logo.png" alt="Luna Flow Logo" width={24} height={24} className="object-cover w-full h-full" />
                        </div>
                        <span className="text-sm font-bold text-gray-800 tracking-tight">Luna <span className="text-pink-500">Flow</span></span>
                    </div>
                    <div className="flex gap-8 text-[10px] font-semibold uppercase tracking-widest">
                        <Link href="/luna-flow/terms" className="text-gray-400 hover:text-pink-500 transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link href="/luna-flow" className="text-gray-400 hover:text-pink-500 transition-colors">
                            Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
