export interface LegalDocument {
    title: string;
    content: string;
    lastUpdated: string;
    contactEmail: string;
}

export interface AppLegalDocuments {
    privacy: LegalDocument;
    terms: LegalDocument;
}

export interface App {
    id: string;
    name: string;
    icon: string;
    description: string;
    documents: AppLegalDocuments;
}