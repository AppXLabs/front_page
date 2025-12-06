"use client";

import { getDocument } from "@/data/utils";

export default function NotifypePrivacyPolicy() {
    const document = getDocument("notifype", "privacy");

    if (!document) {
        return <div>Document not found</div>;
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            {/* Header */}
            <header className="border-b border-slate-700 bg-slate-800">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-xl font-bold text-white hover:text-slate-300 transition-colors">
                            appxlab
                        </a>
                        <span className="text-slate-400">/</span>
                        <span className="text-lg font-medium text-slate-200">Notifype Privacy Policy</span>
                    </div>
                    <a href="/legal" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                        View All Documents
                    </a>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-4xl mx-auto p-8">
                <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                        N
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white">{document.title}</h1>
                        <p className="text-slate-400">Smart notification management app</p>
                        <p className="text-slate-500 text-sm">Last updated: {document.lastUpdated}</p>
                    </div>
                </div>

                <div
                    className="space-y-6 text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: document.content.replace(
                            /<h2>/g,
                            '<h2 style="color: #f1f5f9; font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">'
                        ).replace(
                            /<p>/g,
                            '<p style="margin-bottom: 1rem; line-height: 1.7;">'
                        )
                    }}
                />

                {/* Footer Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <a
                            href="/"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            ← Back to Home
                        </a>
                        <div className="flex space-x-6">
                            <a
                                href="/notifype/terms"
                                className="text-slate-400 hover:text-slate-200 transition-colors"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="/legal"
                                className="text-slate-400 hover:text-slate-200 transition-colors"
                            >
                                All Documents
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                        <p className="text-slate-500 text-sm">
                            Contact: <a href={`mailto:${document.contactEmail}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">{document.contactEmail}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}