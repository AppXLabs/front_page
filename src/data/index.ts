import { App } from "./types";
import { notifypayDocuments } from "./apps/notifypay";

export const apps: App[] = [
    {
        id: "notifypay",
        name: "NotifyPay",
        icon: "N",
        description: "Smart notification management app",
        documents: notifypayDocuments
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