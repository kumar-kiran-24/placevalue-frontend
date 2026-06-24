
import { LegalLayout, type LegalSection } from "../components/legal/LegalLayout";
import { Nav } from "../components/site/Nav";




const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          PlaceValue ("we", "our", or "us") is committed to protecting the privacy of every individual
          who interacts with our platforms, websites, and services. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use PlaceValue.
        </p>
        <p>
          By accessing or using our services, you acknowledge that you have read and understood this
          Privacy Policy. If you do not agree, please discontinue use of our services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect information you provide directly to us, as well as information collected automatically:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong className="text-white/90">Account information:</strong> name, email address, phone number, organization.</li>
          <li><strong className="text-white/90">Usage data:</strong> pages visited, features used, interaction patterns, timestamps.</li>
          <li><strong className="text-white/90">Device data:</strong> IP address, browser type, operating system, device identifiers.</li>
          <li><strong className="text-white/90">Communications:</strong> messages, support requests, and survey responses.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <>
        <p>We use the information collected for purposes including:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Providing, maintaining, and improving our services.</li>
          <li>Personalizing the user experience and recommendations.</li>
          <li>Communicating with you about updates, security alerts, and support.</li>
          <li>Detecting, preventing, and addressing technical or security issues.</li>
          <li>Complying with legal obligations and enforcing our terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>
        We implement industry-standard administrative, technical, and physical safeguards designed to
        protect your information against unauthorized access, alteration, disclosure, or destruction.
        These include encryption in transit, restricted access controls, and continuous monitoring.
        However, no method of transmission over the Internet is fully secure.
      </p>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    content: (
      <>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Trusted service providers that operate on our behalf under confidentiality obligations.</li>
          <li>Authorities when required by applicable law, regulation, or legal process.</li>
          <li>Affiliates and successors in connection with a merger, acquisition, or asset sale.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as necessary to provide our services, comply
        with legal obligations, resolve disputes, and enforce our agreements. When data is no longer
        needed, it is securely deleted or anonymized.
      </p>
    ),
  },
  {
    id: "user-rights",
    title: "User Rights",
    content: (
      <>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Access, correct, or delete your personal information.</li>
          <li>Object to or restrict certain processing activities.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Lodge a complaint with a supervisory authority.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: (
      <p>
        For any questions or requests regarding this Privacy Policy, please contact us at{" "}
        <a href="mailto:privacy@placevalue.in" className="text-[#00B2F7] hover:underline">privacy@placevalue.in</a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-clip"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Navigation */}
      <Nav />

      {/* Background */}
      <div
        className="relative pt-28"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(to bottom, #0a1628 0%, #040914 40%, #000101 80%)
          `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%",
          color: "#E6EEF7",
        }}
      >
        {/* Page Content */}
        <LegalLayout
          title="Privacy Policy"
          subtitle="How PlaceValue collects, uses, stores, and protects information."
          lastUpdated="June 20, 2026"
          sections={sections}
        />
      </div>
    </main>
  );
}