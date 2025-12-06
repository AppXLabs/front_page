"use client";

import { getAllApps, getAppDocumentUrl } from "@/data/utils";

export default function AppDocumentsIndex() {
    const apps = getAllApps();

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
                        <span className="text-lg font-medium text-slate-200">App Documents</span>
                    </div>
                    <a href="/legal" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                        Document Manager
                    </a>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-6xl mx-auto p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-4">App Legal Documents</h1>
                    <p className="text-slate-400">
                        Direct links to privacy policies and terms & conditions for all appxlab apps.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {apps.map((app) => (
                        <div
                            key={app.id}
                            className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-slate-600 transition-colors"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                                    {app.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white">{app.name}</h2>
                                    <p className="text-slate-400 text-sm">{app.description}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-slate-300 mb-2">Legal Documents</h3>

                                <div className="space-y-2">
                                    <a
                                        href={getAppDocumentUrl(app.id, "privacy")}
                                        className="block w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 hover:text-white transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>Privacy Policy</span>
                                            <span className="text-indigo-400">→</span>
                                        </div>
                                    </a>

                                    <a
                                        href={getAppDocumentUrl(app.id, "terms")}
                                        className="block w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 hover:text-white transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>Terms & Conditions</span>
                                            <span className="text-indigo-400">→</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="pt-3 border-t border-slate-600">
                                    <p className="text-xs text-slate-500">
                                        Copy links for mobile app integration
                                    </p>
                                    <div className="mt-2 space-y-1">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-slate-400">Privacy:</span>
                                            <button
                                                onClick={() => navigator.clipboard.writeText(`${window.location.origin}${getAppDocumentUrl(app.id, "privacy")}`)}
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                            >
                                                Copy URL
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-slate-400">Terms:</span>
                                            <button
                                                onClick={() => navigator.clipboard.writeText(`${window.location.origin}${getAppDocumentUrl(app.id, "terms")}`)}
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                            >
                                                Copy URL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                    <div className="flex justify-between items-center">
                        <a
                            href="/"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            ← Back to Home
                        </a>
                        <a
                            href="/legal"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            Document Manager
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}