import { App } from "./types";
import { notifypayDocuments } from "./apps/notifypay";
import { jaanujiDocuments } from "./apps/jaanuji";

export const apps: App[] = [
    {
        id: "notifypay",
        name: "NotifyPay",
        icon: "N",
        description: "Smart notification management app",
        documents: notifypayDocuments
    },
    {
        id: "jaanuji",
        name: "Jaanu Ji",
        icon: "♥",
        description: "Video Chat. Joy. Love.",
        documents: jaanujiDocuments
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