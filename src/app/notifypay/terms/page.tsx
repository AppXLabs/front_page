"use client";

import { getDocument } from "@/data/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotifypayTermsAndConditions() {
    const document = getDocument("notifypay", "terms");

    if (!document) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Document not found</h1>
                    <Link href="/notifypay" className="text-blue-600 hover:text-blue-700 underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/notifypay" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            N
                        </div>
                        <span className="text-xl font-bold tracking-tight text-blue-900">NotifyPay</span>
                    </Link>
                    <Link href="/notifypay" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{document.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm">
                        <p>Last updated: <span className="font-medium text-gray-900">{document.lastUpdated}</span></p>
                        <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                        <p>Contact: <a href={`mailto:${document.contactEmail}`} className="text-blue-600 hover:underline">{document.contactEmail}</a></p>
                    </div>
                </div>

                <div
                    className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed"
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">&copy; 2024 NotifyPay. All rights reserved.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/notifypay/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/notifypay" className="text-gray-600 hover:text-blue-600 transition-colors">
                            notifyPay Home
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}