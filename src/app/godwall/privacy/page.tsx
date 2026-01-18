import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function GodWallPrivacyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Navigation */}
            <nav className="border-b border-orange-100 bg-white sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        href="/godwall"
                        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        <span className="font-bold text-gray-900">God Wallpapers</span>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">
                    For <strong>Hindu God Wallpapers HD – Bhakti Images</strong> (referred to as &quot;God Wallpapers&quot;)
                </p>
                <p className="text-sm text-gray-500 mb-12">Last updated: January 19, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to God Wallpapers. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy explains how we handle your information when you use our mobile application.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            God Wallpapers is designed with your privacy in mind. We collect minimal information:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Device information (model, OS version) for app compatibility</li>
                            <li>App usage analytics to improve user experience</li>
                            <li>Crash reports to fix bugs and improve stability</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We do not collect personally identifiable information such as your name, email, or phone number.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The limited information we collect is used to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Provide and maintain the app functionality</li>
                            <li>Improve app performance and user experience</li>
                            <li>Fix bugs and technical issues</li>
                            <li>Understand how users interact with the app</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wallpapers are stored locally on your device. We implement appropriate security measures to protect
                            any data transmitted to our servers. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our app may use third-party services such as:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Google Analytics for app usage statistics</li>
                            <li>Firebase for crash reporting and analytics</li>
                            <li>AdMob for displaying advertisements (if applicable)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            These services have their own privacy policies governing the use of your information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children&apos;s Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our app is suitable for all ages. We do not knowingly collect personal information from children
                            under 13. If you believe we have collected such information, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Access the data we have about you</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of analytics tracking</li>
                            <li>Uninstall the app at any time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention & Account Deletion</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We retain user data only for as long as necessary to provide our services. You have the right to request the deletion of your account and all associated personal data at any time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2">
                            <strong>To request account deletion:</strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Please send an email to <a href="mailto:info@appxlab.space" className="text-orange-600 hover:underline">info@appxlab.space</a> with the subject line &quot;Account Deletion Request&quot;. Include your registered details in the email body. We will process your request and permanently delete your data within the timeframe required by applicable laws (usually within 30 days).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting
                            the new policy on this page and updating the &quot;Last updated&quot; date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-orange-600 font-medium mt-2">
                            Email: info@appxlab.space
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-orange-100 py-6 mt-12 bg-orange-50/50">
                <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
                    &copy; 2025 Hindu God Wallpapers HD – Bhakti Images. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
