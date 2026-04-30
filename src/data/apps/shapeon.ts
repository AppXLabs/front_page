import { AppLegalDocuments } from "../types";

export const shapeonDocuments: AppLegalDocuments = {
  privacy: {
    title: "ShapeOn Privacy Policy",
    lastUpdated: "April 2, 2026",
    contactEmail: "support@apxlab.space",
    content: `
      <section>
        <h2>1. Information We Collect</h2>
        <p>
          ShapeOn collects data to provide you with the best fitness experience. This includes:
          <ul>
            <li><strong>Profile Information:</strong> Name, age, gender, height, and current weight.</li>
            <li><strong>Health Data:</strong> Calorie intake, nutritional logs, and fitness activity.</li>
            <li><strong>Biometric Data:</strong> If linked, data from Apple Health, Google Fit, or wearable devices.</li>
            <li><strong>Media:</strong> Photos of food items if you use our AI food scanning feature.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>2. AI Processing and Nutrition Tracking</h2>
        <p>
          When you use our food scanning feature, images are processed by our AI models to identify nutritional content. We do not store these images longer than necessary for processing unless you explicitly choose to save them in your log.
        </p>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>
          Your health data is sensitive. We use industry-standard encryption to protect your data both in transit and at rest. Access to your personal health metrics is strictly limited to your authorized account.
        </p>
      </section>

      <section>
        <h2>4. Data Sharing and Third Parties</h2>
        <p>
          We do not sell your personal health data. We may share anonymized, aggregated data with researchers or partners to improve fitness algorithms. We only share personally identifiable information with your explicit consent (e.g., when linking to health platforms).
        </p>
      </section>

      <section>
        <h2>5. Data Deletion Policy</h2>
        <p>
          You have full control over your data. You can initiate data deletion at any time:
          <ul>
            <li><strong>In-App:</strong> Navigate to Settings > Account > Delete Data to wipe your local and cloud records.</li>
            <li><strong>Email Request:</strong> Send a deletion request to support@apxlab.space.</li>
          </ul>
          Once requested, all personally identifiable health metrics and food logs will be permanently erased from our production databases within 7 to 15 days.
        </p>
      </section>

      <section>
        <h2>6. Data Relation & Retention</h2>
        <p>
          We relate your various data points (logs, biometric syncs, profile) to provide a holistic view of your health. 
          Your data is retained as long as your account is active. If your account remains inactive for more than 24 months, we reserve the right to archive or delete your data to ensure security and efficiency.
        </p>
      </section>

      <section>
        <h2>7. Health Disclaimer</h2>
        <p>
          ShapeOn is a monitoring and tracking tool, not a medical device. Always consult with a healthcare professional before starting a new diet or exercise program.
        </p>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>
          You have the right to access, export, or audit your data. For any privacy inquiries, reach out to support@apxlab.space.
        </p>
      </section>
    
      <section>
        <h2>10. Data Encryption</h2>
        <p>We prioritize your privacy and security. All of your personal data is fully encrypted, ensuring that your information remains safe and protected from unauthorized access at all times.</p>
      </section>

      <section>
        <h2>11. Refund Policy</h2>
        <p>Please note that we do not entertain any refund once the service is bought. All purchases made within the application are final and non-refundable.</p>
      </section>
    `
  },
  terms: {
    title: "ShapeOn Terms & Conditions",
    lastUpdated: "April 2, 2026",
    contactEmail: "support@apxlab.space",
    content: `
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using ShapeOn, you agree to these terms. If you do not agree, do not use the application.
        </p>
      </section>

      <section>
        <h2>2. Medical Disclaimer</h2>
        <p>
          <strong>SHAPEON IS NOT A MEDICAL PROVIDER.</strong> The content provided through the app, including AI-generated nutritional estimates and workout suggestions, is for informational purposes only. We do not guarantee weight loss, muscle gain, or specific health outcomes. 
        </p>
      </section>

      <section>
        <h2>3. Data Deletion & Relation</h2>
        <p>
          By using our service, you acknowledge that we relate your input data to provide personalized insights. You may delete this data at any time via the app settings or by contacting support@apxlab.space. Deleted data cannot be recovered.
        </p>
      </section>

      <section>
        <h2>4. Subscription and Payments</h2>
        <p>
          Certain features of ShapeOn may require a paid subscription. Billing is handled through the Google Play Store or Apple App Store. Refer to their respective terms for refund policies.
        </p>
      </section>

      <section>
        <h2>5. User Content</h2>
        <p>
          You retain ownership of the data and photos you upload. By uploading content, you grant ShapeOn a limited license to process this data solely for providing the services you requested.
        </p>
      </section>

      <section>
        <h2>6. Prohibited Conduct</h2>
        <p>
          You agree not to reverse-engineer our AI models, attempt to scrape our nutritional database, or use the app to track data for third parties without their consent.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          ShapeOn is provided "as is". To the fullest extent permitted by law, we are not liable for any health issues, injuries, or data loss resulting from the use of our application.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction where APXLAB is registered.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          For legal inquiries, email support@apxlab.space.
        </p>
      </section>
    `
  }
};
