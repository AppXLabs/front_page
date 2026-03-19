import { App } from "./types";
import { notifypayDocuments } from "./apps/notifypay";
import { jaanujiDocuments } from "./apps/jaanuji";
import { godwallDocuments } from "./apps/godwall";
import { astroaiDocuments } from "./apps/astroai";
import { flowWisprDocuments } from "./apps/flow-wispr";

export const apps: App[] = [
    {
        id: "notifypay",
        name: "NotifyPay",
        icon: "N",
        description: "Smart notification management app",
        documents: notifypayDocuments,
        isLive: true,
        logoPath: "/notifypay/logo.webp"
    },
    {
        id: "jaanuji",
        name: "Jaanu Ji",
        icon: "♥",
        description: "Chat. Joy. Love.",
        documents: jaanujiDocuments,
        isLive: true,
        logoPath: "/jaanuji/logo.webp"
    },
    {
        id: "godwall",
        name: "God Wallpapers",
        icon: "✨",
        description: "Hindu God Wallpapers HD",
        documents: godwallDocuments,
        isLive: false,
        isHidden: true
    },
    {
        id: "astroai",
        name: "Astro AI",
        icon: "🔭",
        description: "AI-Powered Astrology Insights",
        documents: astroaiDocuments,
        isLive: false
    },
    {
        id: "flow-wispr",
        name: "Flow Wispr",
        icon: "🎙",
        description: "Voice to Notes, powered by AI",
        documents: flowWisprDocuments,
        isLive: true,
        logoPath: "/flow-wispr/logo.png"
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