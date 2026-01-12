import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Volume2, ShieldCheck, Zap, Smartphone } from "lucide-react";

export default function NotifyPayPage() {
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.app.notifypay";

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            N
                        </div>
                        <span className="text-xl font-bold tracking-tight text-blue-900">NotifyPay</span>
                    </div>
                    {/* <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
                        <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
                    </div> */}
                    <a
                        href={googlePlayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95 text-sm flex items-center gap-2"
                    >
                        <Smartphone className="w-4 h-4" />
                        Download App Now
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center md:text-left z-10 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Live Payment Alerts
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                                Never Miss a <br />
                                <span className="text-blue-600">Payment Alert</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                The most reliable soundbox app for your shop. Get instant voice notifications for GPay, PhonePe, Paytm, and all UPI payments.
                                <span className="block mt-2 font-medium text-gray-900">Designed for Indian Shopkeepers.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a
                                    href={googlePlayUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 transition-opacity"
                                >
                                    <Image
                                        src="/notifypay/google_play.png"
                                        alt="Get it on Google Play"
                                        width={200}
                                        height={60}
                                        className="h-16 w-auto"
                                    />
                                </a>
                            </div>
                            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> No hidden fees
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Free to use
                            </p>
                        </div>

                        <div className="flex-1 relative w-full max-w-lg md:max-w-none order-1 md:order-2">
                            <div className="relative z-10 flex justify-center">
                                {/* Mobile Frame */}
                                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                                        <Image
                                            src="/notifypay/app_showcase.jpg"
                                            alt="NotifyPay App Interface"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Your Business Needs</h2>
                        <p className="text-lg text-gray-600">Everything you need to manage your shop payments smoothly and securely.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Volume2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Loud Voice Alerts</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Hear payment confirmations clearly even in a busy, noisy shop. Supports 10+ regional languages including Hindi and English.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Notifications</h3>
                            <p className="text-gray-600 leading-relaxed">
                                No delays. Get notified the exact moment money hits your bank account. Zero waiting time.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Secure</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bank-grade security ensures your money is always safe. Trusted by over 100,000 shopkeepers across India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlight */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Turn Your Phone into a<br />Smart Soundbox</h2>
                                <p className="text-blue-100 text-lg mb-8 max-w-md">
                                    No need to buy expensive hardware. Just install NotifyPay on your phone and start receiving voice alerts for every payment.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={googlePlayUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        Download on Android
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <Image
                                    src="/notifypay/soundbox.png"
                                    alt="NotifyPay Concept"
                                    width={400}
                                    height={400}
                                    className="max-w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 opacity-80"
                                />
                            </div>
                        </div>

                        {/* Background patterns */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20 translate-y-1/3 -translate-x-1/3"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Small Businesses</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-left">
                                <div className="flex text-yellow-400 mb-4">
                                    {"★★★★★"}
                                </div>
                                <p className="text-gray-600 mb-6 italic">
                                    &quot;Since I started using NotifyPay, I never have to worry about checking my phone for payments. It&apos;s so loud and clear!&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Ramesh Kumar</div>
                                        <div className="text-xs text-gray-500">Kirana Store Owner</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mb-20 md:mb-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between items-start gap-8 mb-12">
                        <div className="max-w-xs">
                            <span className="text-2xl font-bold text-blue-900">NotifyPay</span>
                            <p className="text-gray-500 mt-2">Simplifying payments for every shop.</p>
                        </div>
                        <a
                            href={googlePlayUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-90 transition-opacity"
                        >
                            <Image
                                src="/notifypay/google_play.png"
                                alt="Get it on Google Play"
                                width={200}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>
                    <div className="border-t border-gray-100 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>&copy; 2024 NotifyPay. All rights reserved.</div>
                        <div className="flex gap-6">
                            <Link href="/notifypay/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                            <Link href="/notifypay/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Mobile Floating CTA */}
            <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
                <a
                    href={googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-2xl hover:scale-105 transition-transform pointer-events-auto"
                >
                    <Image
                        src="/notifypay/google_play.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={53}
                        className="h-14 w-auto"
                    />
                </a>
            </div>
        </div>
    );
}
