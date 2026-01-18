import Image from "next/image";
import Link from "next/link";
import { Sparkles, Download, Heart } from "lucide-react";

export default function GodWallPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-200">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">God Wallpapers</span>
                    </div>
                    <div className="text-sm font-medium text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                        Coming Soon
                    </div>
                </div>
            </nav>

            {/* Hero Section - Premium Side by Side Layout */}
            <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="text-left space-y-8 lg:pr-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold border border-orange-200">
                                <Sparkles className="w-4 h-4" />
                                Divine Wallpapers Collection
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                                    Hindu God
                                    <br />
                                    Wallpapers
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                                        HD
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                                    Beautiful high-definition wallpapers of Hindu deities for your devotion.
                                    Transform your phone into a temple of divine blessings.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Sparkles className="w-3 h-3 text-orange-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Crystal Clear HD Quality</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Heart className="w-3 h-3 text-orange-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Daily New Wallpapers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Download className="w-3 h-3 text-orange-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">100% Free Forever</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button
                                    disabled
                                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 opacity-70 cursor-not-allowed flex items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <Download className="w-5 h-5" />
                                    Coming Soon on Google Play
                                </button>
                                <p className="text-sm text-gray-500 mt-3">
                                    Free to download • No ads • Premium quality
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Premium Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Decorative Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-transparent rounded-[3rem] blur-3xl opacity-60"></div>

                            {/* Phone Mockup */}
                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                {/* Phone Frame with Shadow */}
                                <div className="relative mx-auto border-[14px] border-gray-900 bg-gray-900 rounded-[3rem] h-[600px] w-[300px] shadow-2xl">
                                    {/* Notch */}
                                    <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>

                                    {/* Side Buttons */}
                                    <div className="h-[32px] w-[3px] bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

                                    {/* Screen Content - Wallpaper Display */}
                                    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-white relative overflow-hidden rounded-[2rem]">
                                        {/* Status Bar */}
                                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/20 to-transparent z-10 flex items-center justify-between px-6 text-white text-xs">
                                            <span>9:41</span>
                                            <div className="flex gap-1">
                                                <div className="w-4 h-3 border border-white rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Wallpaper Image */}
                                        <Image
                                            src="/godwall/deity_1.png"
                                            alt="Lord Ganesha Wallpaper Preview"
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Subtle Overlay for Premium Feel */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent"></div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-orange-100">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-orange-500" />
                                        <div>
                                            <div className="text-xs text-gray-500">Premium Quality</div>
                                            <div className="text-sm font-bold text-gray-900">HD Wallpapers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose God Wallpapers?</h2>
                        <p className="text-lg text-gray-600">Everything you need for divine inspiration on your device</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">HD Quality</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Crystal clear high-definition wallpapers optimized for all screen sizes and resolutions
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Daily Updates</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                New divine wallpapers added regularly to keep your devotion fresh and inspiring
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                                <Download className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3 text-center">Free Forever</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Completely free to download and use with no hidden charges or subscriptions
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-orange-100 py-8 mt-16 bg-orange-50/50">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span>&copy; 2025 God Wallpapers. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/godwall/privacy" className="hover:text-orange-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/godwall/terms" className="hover:text-orange-600 transition-colors">
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
