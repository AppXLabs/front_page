import { apps } from "./index";
import { App, LegalDocument } from "./types";

export function getApp(appId: string): App | undefined {
    return apps.find(app => app.id === appId);
}

export function getDocument(appId: string, docType: 'privacy' | 'terms'): LegalDocument | undefined {
    const app = getApp(appId);
    if (!app) return undefined;

    return app.documents[docType];
}

export function getAllApps(): App[] {
    return apps;
}

export function getAppDocumentUrl(appId: string, docType: 'privacy' | 'terms'): string {
    return `/${appId}/${docType}`;
}

export function isValidApp(appId: string): boolean {
    return apps.some(app => app.id === appId);
}

export function isValidDocType(docType: string): docType is 'privacy' | 'terms' {
    return docType === 'privacy' || docType === 'terms';
}