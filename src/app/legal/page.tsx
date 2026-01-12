"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getAllApps, getDocument, isValidApp, isValidDocType } from "@/data/utils";
import { documentTypes } from "@/data/index";

function LegalDocsContent() {
    const searchParams = useSearchParams();
    const [selectedApp, setSelectedApp] = useState<string>("notifypay");
    const [selectedDocType, setSelectedDocType] = useState<string>("terms");

    const apps = getAllApps();

    // Handle URL parameters for direct linking
    useEffect(() => {
        const app = searchParams.get('app');
        const doc = searchParams.get('doc');

        if (app && isValidApp(app)) {
            setSelectedApp(app);
        }

        if (doc && isValidDocType(doc)) {
            setSelectedDocType(doc);
        }
    }, [searchParams]);

    const currentDocument = getDocument(selectedApp, selectedDocType as 'privacy' | 'terms'); return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            {/* Header */}
            <header className="border-b border-slate-700 bg-slate-800">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-xl font-bold text-white hover:text-slate-300 transition-colors">
                            appxlab
                        </a>
                        <span className="text-slate-400">/</span>
                        <h1 className="text-lg font-medium text-slate-200">Legal Documents</h1>
                    </div>
                    <a href="/" className="text-xl font-bold text-white hover:text-slate-300 transition-colors">
                        appxlab
                    </a>
                </div>
            </header>

            <div className="flex h-[calc(100vh-73px)]">
                {/* Apps Sidebar */}
                <div className="w-64 bg-slate-800 border-r border-slate-700 p-4">
                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                        Apps
                    </h2>
                    <div className="space-y-2">
                        {apps.map((app) => (
                            <button
                                key={app.id}
                                onClick={() => setSelectedApp(app.id)}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${selectedApp === app.id
                                    ? "bg-slate-700 text-white"
                                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                                    {app.icon}
                                </div>
                                <div>
                                    <div className="font-medium">{app.name}</div>
                                    <div className="text-xs text-slate-400">{app.description}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Document Type Selector */}
                <div className="w-64 bg-slate-800/50 border-r border-slate-700 p-4">
                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                        Documents
                    </h2>
                    <div className="space-y-2">
                        {documentTypes.map((docType) => (
                            <button
                                key={docType.id}
                                onClick={() => setSelectedDocType(docType.id)}
                                className={`w-full px-3 py-2 rounded-lg text-left transition-colors ${selectedDocType === docType.id
                                    ? "bg-slate-700 text-white"
                                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                {docType.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 overflow-y-auto">
                    {currentDocument ? (
                        <div className="max-w-4xl">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-white mb-2">
                                        {currentDocument.title}
                                    </h1>
                                    <p className="text-slate-400 text-sm">
                                        Last updated: {currentDocument.lastUpdated}
                                    </p>
                                </div>

                                {/* Direct Links */}
                                <div className="text-sm">
                                    <p className="text-slate-400 mb-2">Direct Links:</p>
                                    <div className="space-y-1">
                                        <div className="flex space-x-4">
                                            <a
                                                href={`/${selectedApp}/privacy`}
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Privacy →
                                            </a>
                                            <a
                                                href={`/${selectedApp}/terms`}
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Terms →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="space-y-6 text-slate-300 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: currentDocument.content.replace(
                                        /<h2>/g,
                                        '<h2 style="color: #f1f5f9; font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">'
                                    ).replace(
                                        /<p>/g,
                                        '<p style="margin-bottom: 1rem; line-height: 1.7;">'
                                    )
                                }}
                            />

                            <div className="mt-12 pt-8 border-t border-slate-700">
                                <p className="text-slate-400 text-sm">
                                    Contact: <a href={`mailto:${currentDocument.contactEmail}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">{currentDocument.contactEmail}</a>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-slate-400">
                            <p>Select an app and document type to view content.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function LegalDocsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-900 text-slate-200 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-slate-400">Loading legal documents...</p>
                </div>
            </div>
        }>
            <LegalDocsContent />
        </Suspense>
    );
}