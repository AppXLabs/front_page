import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function GodWallTermsPage() {
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
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
                <p className="text-gray-600 mb-8">
                    For <strong>Hindu God Wallpapers HD – Bhakti Images</strong> (referred to as &quot;God Wallpapers&quot;)
                </p>
                <p className="text-sm text-gray-500 mb-12">Last updated: January 19, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By downloading, installing, or using the God Wallpapers mobile application, you agree to be bound
                            by these Terms and Conditions. If you do not agree to these terms, please do not use the app.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License to Use</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We grant you a limited, non-exclusive, non-transferable, revocable license to use God Wallpapers
                            for personal, non-commercial purposes. You may:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Download and use wallpapers for personal use on your devices</li>
                            <li>Set wallpapers as your device background</li>
                            <li>Share the app with friends and family</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibited Uses</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree NOT to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Use wallpapers for commercial purposes without permission</li>
                            <li>Redistribute, sell, or sublicense the wallpapers</li>
                            <li>Modify, reverse engineer, or decompile the app</li>
                            <li>Remove watermarks or copyright notices from wallpapers</li>
                            <li>Use the app in any way that violates applicable laws</li>
                            <li>Use the content in a manner that is disrespectful to Hindu religion or deities</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Ownership</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All wallpapers, images, graphics, and content provided in the app are either owned by us,
                            licensed to us, or are in the public domain. We respect the religious significance of all
                            deity images and handle them with utmost reverence.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As a user, you are responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Maintaining the confidentiality of your device</li>
                            <li>Ensuring your device meets the app&apos;s requirements</li>
                            <li>Using the app respectfully and in accordance with Hindu traditions</li>
                            <li>Reporting any bugs or issues you encounter</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The app is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, either express
                            or implied. We do not guarantee that the app will be error-free, uninterrupted, or free from
                            viruses or other harmful components.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
                            special, consequential, or punitive damages arising from your use of the app, including but not
                            limited to loss of data, device damage, or any other losses.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates and Modifications</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify, suspend, or discontinue the app at any time without notice.
                            We may also update these Terms and Conditions periodically. Continued use of the app after
                            changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to terminate or suspend your access to the app at any time, without notice,
                            for conduct that we believe violates these Terms and Conditions or is harmful to other users,
                            us, or third parties.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Religious Respect</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All images of Hindu deities are presented with the utmost respect and devotion. We request all
                            users to treat these images with reverence and use them in a manner that honors Hindu religious
                            traditions and beliefs.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of India,
                            without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <p className="text-orange-600 font-medium mt-2">
                            Email: info@appxlab.space
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Acknowledgment</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By using God Wallpapers, you acknowledge that you have read, understood, and agree to be bound
                            by these Terms and Conditions.
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
