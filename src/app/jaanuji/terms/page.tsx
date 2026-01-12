"use client";

import { getDocument } from "@/data/utils";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export default function JaanuJiTerms() {
    const document = getDocument("jaanuji", "terms");

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-pink-50 text-gray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Document not found</h1>
                    <Link href="/jaanuji" className="text-pink-600 hover:text-pink-700 underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pink-50 font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-900">
            {/* Navigation */}
            <nav className="border-b border-pink-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/jaanuji" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full flex items-center justify-center text-white shadow-sm">
                            <Heart className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Jaanu Ji</span>
                    </Link>
                    <Link href="/jaanuji" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="mb-12 border-b border-pink-200 pb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm">
                        <p>Last updated: <span className="font-medium text-gray-900">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                        <p>Contact: <a href={`mailto:${document.contactEmail}`} className="text-pink-600 hover:underline">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div
                    className="prose prose-lg prose-pink max-w-none text-gray-600 leading-relaxed"
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
            <footer className="bg-white/50 border-t border-pink-100 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">&copy; 2025 Jaanu Ji. All rights reserved.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/jaanuji/privacy" className="text-gray-600 hover:text-pink-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/jaanuji" className="text-gray-600 hover:text-pink-600 transition-colors">
                            Jaanu Ji Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
