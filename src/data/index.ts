import { App } from "./types";
import { notifypeDocuments } from "./apps/notifype";

export const apps: App[] = [
    {
        id: "notifype",
        name: "Notifype",
        icon: "N",
        description: "Smart notification management app",
        documents: notifypeDocuments
    }
    // Add more apps here as they are created
];

export const documentTypes = [
    {
        id: "privacy",
        name: "Privacy Policy",
        title: "Privacy Policy"
    },
    {
        id: "terms",
        name: "Terms & Conditions",
        title: "Terms and Conditions"
    }
];