"use client";

import { getDocument } from "@/data/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function DailyAstroPrivacyPolicy() {
    const document = getDocument("daily-astro", "privacy");

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Document not found</h1>
                    <Link href="/daily-astro" className="text-purple-600 hover:text-purple-700 underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/daily-astro" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                            <Image src="/daily-astro/logo.png" alt="Daily Astro Logo" width={32} height={32} className="object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Daily Astro</span>
                    </Link>
                    <Link href="/daily-astro" className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm">
                        <p>Last updated: <span className="font-medium text-gray-900">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-gray-200 rounded-full"></span>
                        <p>Contact: <a href={`mailto:${document.contactEmail}`} className="text-purple-600 hover:underline">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div
                    className="prose prose-purple max-w-none text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: document.content.replace(
                            /<h2>/g,
                            '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">'
                        ).replace(
                            /<p>/g,
                            '<p class="mb-4 leading-relaxed">'
                        )
                    }}
                />
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-100 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
                    <p className="text-gray-500">&copy; 2026 AppXLabs. All cosmic rights reserved.</p>
                    <div className="flex gap-6 font-medium">
                        <Link href="/daily-astro/terms" className="text-gray-500 hover:text-purple-600 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/daily-astro" className="text-gray-500 hover:text-purple-600 transition-colors">
                            Daily Astro Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
