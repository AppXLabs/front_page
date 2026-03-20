import Link from "next/link";
import { apps } from "@/data";
import { ArrowRight, Sparkles, Smartphone, Heart, Sparkle, Mic } from "lucide-react";

const appIcons: Record<string, React.ReactNode> = {
    notifypay: <Smartphone className="w-5 h-5" />,
    jaanuji: <Heart className="w-5 h-5" />,
    godwall: <Sparkle className="w-5 h-5" />,
    "daily-astro": <Sparkles className="w-5 h-5" />,
    "flow-wispr": <Mic className="w-5 h-5" />,
};

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Decorative background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="font-bold text-xl tracking-tight text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-sm">
                            a
                        </span>
                        appxlab
                    </Link>
                </div>
            </header>

            {/* Hero Tagline */}
            <section className="relative py-14 md:py-16 lg:py-20 flex items-center min-h-[38vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug tracking-tight">
                        Designing the world&apos;s best apps
                        <span className="block mt-2 md:mt-3 text-blue-600">
                            — fast, flawless, future-ready.
                        </span>
                    </h1>
                </div>
            </section>

            {/* Apps section */}
            <section className="relative pt-4 pb-16 md:pt-6 md:pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Apps</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Discover our innovative mobile applications</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {apps
                            .filter((app) => !app.isHidden)
                            .map((app) => {
                                const isLive = app.isLive;
                                const cardContent = (
                                    <>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transition-transform overflow-hidden ${
                                                        isLive
                                                            ? "bg-gradient-to-br from-blue-600 to-blue-700 hover:scale-105"
                                                            : "bg-gradient-to-br from-gray-400 to-gray-500"
                                                    }`}
                                                >
                                                    {app.logoPath ? (
                                                        <img
                                                            src={app.logoPath}
                                                            alt={app.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        appIcons[app.id] || app.icon
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-900">{app.name}</h3>
                                                    {!isLive && (
                                                        <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
                                                            Coming soon
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {isLive && (
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-4">{app.description}</p>
                                        {isLive && (
                                            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                                                <span>Visit app</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        )}
                                    </>
                                );

                                const cardClasses = `group relative rounded-2xl border bg-white p-6 md:p-8 transition-all duration-300 ${
                                    isLive
                                        ? "border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 cursor-pointer"
                                        : "border-gray-200 shadow-sm opacity-75"
                                }`;

                                return isLive ? (
                                    <Link key={app.id} href={`/${app.id}`} className="block h-full">
                                        <div className={cardClasses}>{cardContent}</div>
                                    </Link>
                                ) : (
                                    <div key={app.id} className={cardClasses}>
                                        {cardContent}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>

            {/* Bottom bar */}
            <footer className="relative border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-sm">
                                a
                            </span>
                            <span className="font-bold text-lg tracking-tight text-gray-900">appxlab</span>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm">
                            <span className="text-gray-500 font-medium">We are a mobile dev company</span>
                            <Link
                                href="/legal"
                                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                Legal
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} appxlab.space. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
