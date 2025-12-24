"use client";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-6 text-slate-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p>At appxlab.space, we are committed to protecting your privacy. This policy describes how we collect, use, and protect your information.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
                        <p>We use the information we collect to provide and improve our services, communicate with you, and ensure the security of our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@appxlab.space" className="text-indigo-400 hover:text-indigo-300 underline">info@appxlab.space</a></p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Delete Your Data</h2>
                        <p>If you would like us to delete personal data associated with the Notifype app, please email <a href="mailto:info@appxlab.space" className="text-indigo-400 hover:text-indigo-300 underline">info@appxlab.space</a> with your request and any relevant account details. We will respond with steps to verify the request and complete the deletion as soon as reasonably possible.</p>
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