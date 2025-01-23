import React from "react";
import styles from "../page.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className={styles.main}>
      <Navigation />
      <div className={styles.maxWidth}>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> January 23rd, 2025</p>

        <p>
          At Roble, we are committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our services, including
          submitting an estimate request through our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you submit an estimate request, we collect the following information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and company name (if provided).</li>
          <li><strong>Location Information:</strong> Street address, city, state, and zip code.</li>
          <li><strong>Project Details:</strong> Information about the services requested, project description, budget range, and preferred timeline.</li>
          <li><strong>Other Information:</strong> How you heard about us and your preferred method of communication.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Process and respond to your estimate request.</li>
          <li>Schedule appointments and communicate with you about your project.</li>
          <li>Create and manage records in our customer database (using Airtable).</li>
          <li>Improve our services and website experience.</li>
        </ul>

        <h2>3. How Your Information is Stored and Secured</h2>
        <p>
          All information collected through the website is securely stored in <strong>Airtable</strong>,
          a third-party database tool we use for managing customer information.
        </p>
        <p>
          Airtable employs industry-standard security measures to protect your data. For more
          information, please review <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer">Airtable’s Privacy Policy</a>.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following cases:</p>
        <ul>
          <li><strong>Service Providers:</strong> With trusted partners who assist in delivering our services (e.g., appointment scheduling or communication tools).</li>
          <li><strong>Legal Obligations:</strong> If required to comply with laws, regulations, or legal processes.</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the information we have about you.</li>
          <li><strong>Correction:</strong> Update or correct inaccuracies in your information.</li>
          <li><strong>Deletion:</strong> Request the deletion of your information, subject to legal and contractual obligations.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:robleroofnsiding@gmail.com">robleroofnsiding@gmail.com</a>.
        </p>

        <h2>6. Cookies and Analytics</h2>
        <p>
          Our website may use cookies to improve your browsing experience. These cookies do not collect
          personal information unless you voluntarily provide it through the form.
        </p>

        <h2>7. Retention of Information</h2>
        <p>
          We retain your information only as long as necessary to fulfill the purposes outlined in this
          policy or as required by law.
        </p>

        <h2>8. Updates to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with
          an updated effective date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li><strong>Phone:</strong> 201-394-7939</li>
          <li><strong>Email:</strong> <a href="mailto:robleroofnsiding@gmail.com">robleroofnsiding@gmail.com</a></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;