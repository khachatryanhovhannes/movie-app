import { AboutSections } from "@/components";

export default function PrivacyPolicy() {
  return (
    <main className="text-white py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-justify">
      <h1 className="text-2xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-6">
        Welcome to <span className="text-red-500">G Movies App</span>. We are
        committed to protecting your privacy and ensuring that your personal
        information is handled in a safe and responsible manner. This Privacy
        Policy explains how we collect, use, and protect your data when you use
        our services. By using{" "}
        <span className="text-red-500">G Movies App</span>, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      {/* Privacy Sections */}
      <AboutSections
        title="Information We Collect"
        paragraphs={[
          `We collect personal information when you sign up for an account or interact with our platform. This includes your name, email address, and any other information you provide to us. Additionally, we may collect non-personally identifiable information such as your IP address, device type, and browsing activity.`,
          `We may also use cookies to enhance your experience on our platform. Cookies help us remember your preferences and analyze how you interact with our website. You can control cookie settings through your browser preferences.`,
        ]}
      />
      <AboutSections
        title="How We Use Your Information"
        paragraphs={[
          `The information we collect is used to provide and improve our services, personalize your experience, and communicate with you about updates or promotions. We may also use your information to analyze trends, monitor the effectiveness of our website, and respond to customer service inquiries.`,
          `We are committed to keeping your data secure and only sharing it with third parties when necessary, such as for providing services on our behalf or when required by law.`,
        ]}
      />
      <AboutSections
        title="Data Sharing and Disclosure"
        paragraphs={[
          `We do not sell or rent your personal information to third parties. However, we may share your information in the following cases: with trusted service providers to help us run the platform, when required by law, or when we believe it is necessary to protect our rights or the safety of our users.`,
          `In some cases, we may share non-personal information with partners or advertisers for statistical and marketing purposes. These parties do not have access to your personal data, but may use the aggregated data to tailor content and advertising.`,
        ]}
      />
      <AboutSections
        title="Data Security"
        paragraphs={[
          `We employ a variety of security measures to protect your personal information. These measures include encryption, secure servers, and firewalls designed to protect your data from unauthorized access or disclosure.`,
          `However, please be aware that no method of data transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
        ]}
      />
      <AboutSections
        title="Cookies and Tracking Technologies"
        paragraphs={[
          `We use cookies and similar tracking technologies to enhance your experience and improve our services. Cookies are small data files placed on your device that allow us to remember your preferences and analyze website traffic.`,
          `You can manage your cookie preferences through your browser settings. If you choose to disable cookies, some features of our website may not work as intended.`,
        ]}
      />
      <AboutSections
        title="Your Data Rights"
        paragraphs={[
          `Depending on your location, you may have rights regarding your personal data. These rights may include accessing, correcting, or deleting your data. You may also have the right to withdraw consent for data processing in certain cases.`,
          `To exercise any of these rights, please contact us at the email address provided below. We will respond to your request as quickly as possible.`,
        ]}
      />
      <AboutSections
        title="Changes to This Privacy Policy"
        paragraphs={[
          `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of the page.`,
          `We encourage you to review this page periodically to stay informed about how we are protecting your data.`,
        ]}
      />
      <AboutSections
        title="Contact Us"
        paragraphs={[
          `If you have any questions or concerns about our Privacy Policy or how we handle your data, please contact us at:`,
          `Email: <a href="mailto:support@gmoviesapp.com" class="text-blue-500" aria-label="Email support at G Movies App">support@gmoviesapp.com</a>`,
        ]}
      />
    </main>
  );
}
