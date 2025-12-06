"use client";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

                <div className="space-y-6 text-slate-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                        <p>By accessing and using appxlab.space services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Services</h2>
                        <p>appxlab.space provides lightning-fast app development services. We reserve the right to modify or discontinue our services at any time.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                        <p>appxlab.space shall not be liable for any indirect, incidental, special, consequential or punitive damages.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p>For questions regarding these terms, please contact us at legal@appxlab.space</p>
                    </section>
                </div>

                <div className="mt-12">
                    <a
                        href="/"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}