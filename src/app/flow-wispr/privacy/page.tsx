"use client";

import { getDocument } from "@/data/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function FlowWisprPrivacyPolicy() {
    const document = getDocument("flow-wispr", "privacy");

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Document not found</h1>
                    <Link href="/flow-wispr" className="text-yellow-400 hover:text-yellow-300 underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-gray-300 selection:bg-yellow-400/20 selection:text-yellow-300">
            {/* Navigation */}
            <nav className="border-b border-white/10 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/flow-wispr" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                            <Image
                                src="/flow-wispr/logo.png"
                                alt="Flow Wispr Logo"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Flow Wispr</span>
                    </Link>
                    <Link href="/flow-wispr" className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm">
                        <p>Last updated: <span className="font-medium text-gray-300">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-gray-700 rounded-full"></span>
                        <p>Contact: <a href={`mailto:${document.contactEmail}`} className="text-yellow-400 hover:underline">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div
                    className="prose prose-lg prose-invert max-w-none text-gray-400 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: document.content.replace(
                            /<h2>/g,
                            '<h2 class="text-2xl font-bold text-white mt-10 mb-4">'
                        ).replace(
                            /<p>/g,
                            '<p class="mb-4 leading-relaxed">'
                        )
                    }}
                />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900/50 border-t border-white/5 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Flow Wispr. All rights reserved.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/flow-wispr/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/flow-wispr" className="text-gray-400 hover:text-yellow-400 transition-colors">
                            Flow Wispr Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
