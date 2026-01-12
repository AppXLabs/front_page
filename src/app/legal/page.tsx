"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getAllApps, getDocument, isValidApp, isValidDocType } from "@/data/utils";
import { documentTypes } from "@/data/index";
import Link from "next/link";
import { ArrowLeft, FileText, Smartphone } from "lucide-react";

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

    const currentDocument = getDocument(selectedApp, selectedDocType as 'privacy' | 'terms');

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
                <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="font-bold text-xl tracking-tight text-gray-900">appxlab</span>
                        </Link>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <h1 className="text-lg font-medium text-gray-600">Legal Documents</h1>
                    </div>
                </div>
            </header>

            <div className="w-full flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
                {/* Apps Sidebar */}
                <div className="w-full md:w-64 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 overflow-x-auto md:overflow-visible flex md:flex-col gap-2 shrink-0">
                    <div>
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 hidden md:block">
                            Select App
                        </h2>
                        <div className="flex md:flex-col gap-2">
                            {apps.map((app) => (
                                <button
                                    key={app.id}
                                    onClick={() => setSelectedApp(app.id)}
                                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all border ${selectedApp === app.id
                                        ? "bg-white border-blue-200 shadow-sm ring-1 ring-blue-100"
                                        : "border-transparent text-gray-600 hover:bg-white/50 hover:text-gray-900"
                                        } min-w-[200px] md:min-w-0`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm ${selectedApp === app.id ? "bg-blue-600" : "bg-gray-400"}`}>
                                        {app.icon}
                                    </div>
                                    <div>
                                        <div className={`font-semibold ${selectedApp === app.id ? "text-gray-900" : "text-gray-600"}`}>{app.name}</div>
                                        <div className="text-xs text-gray-400 truncate max-w-[120px]">{app.description}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Document Type Selector - Desktop Sidebar / Mobile Top */}
                <div className="w-full md:w-64 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 shrink-0">
                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 hidden md:block">
                        Document Type
                    </h2>
                    <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                        {documentTypes.map((docType) => (
                            <button
                                key={docType.id}
                                onClick={() => setSelectedDocType(docType.id)}
                                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-colors text-sm font-medium whitespace-nowrap ${selectedDocType === docType.id
                                    ? "bg-white text-blue-700 shadow-sm border border-blue-100"
                                    : "text-gray-600 hover:bg-white hover:text-gray-900"
                                    }`}
                            >
                                <FileText className={`w-4 h-4 ${selectedDocType === docType.id ? "text-blue-600" : "text-gray-400"}`} />
                                {docType.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto bg-white">
                    {currentDocument ? (
                        <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
                            <div className="mb-10 border-b border-gray-100 pb-8">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                    {currentDocument.title}
                                </h1>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                                    <div className="flex items-center gap-4 text-gray-500">
                                        <p>Last updated: <span className="font-medium text-gray-900">{currentDocument.lastUpdated}</span></p>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={`/${selectedApp}/${selectedDocType === 'terms' ? 'terms' : 'privacy'}`}
                                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View standalone page
                                            <ArrowLeft className="w-3 h-3 rotate-180" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: currentDocument.content.replace(
                                        /<h2>/g,
                                        '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">'
                                    ).replace(
                                        /<p>/g,
                                        '<p class="mb-4 leading-relaxed">'
                                    )
                                }}
                            />

                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <p className="text-gray-500 text-sm">
                                    Questions about this document? Contact us at <a href={`mailto:${currentDocument.contactEmail}`} className="text-blue-600 hover:underline">{currentDocument.contactEmail}</a>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 min-h-[400px]">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <FileText className="w-8 h-8 text-gray-300" />
                            </div>
                            <p className="text-lg font-medium text-gray-500">Select an app and document type</p>
                            <p className="text-sm">Choose from the menu to view legal content</p>
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
            <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading documents...</p>
                </div>
            </div>
        }>
            <LegalDocsContent />
        </Suspense>
    );
}