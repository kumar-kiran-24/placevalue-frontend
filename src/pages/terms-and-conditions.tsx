
import { LegalLayout, type LegalSection } from "../components/legal/LegalLayout";
import { Nav } from "../components/site/Nav";



const sections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using PlaceValue's websites, products, or services, you agree to be bound by
        these Terms & Conditions and our Privacy Policy. If you do not agree, you must not use the
        services.
      </p>
    ),
  },
  {
    id: "services-offered",
    title: "Services Offered",
    content: (
      <p>
        PlaceValue provides technology-driven platforms, tools, and related services. We may update,
        modify, or discontinue any feature at our sole discretion, with or without notice, in order to
        improve quality, security, or performance.
      </p>
    ),
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: (
      <>
        <p>As a user of PlaceValue, you agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Provide accurate, current, and complete information when required.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Use the platform only for lawful purposes and in compliance with these Terms.</li>
          <li>Not attempt to disrupt, reverse engineer, or compromise the integrity of the service.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        All content, trademarks, logos, software, and materials provided through PlaceValue are the
        property of PlaceValue or its licensors and are protected by applicable intellectual property
        laws. You may not copy, modify, distribute, or create derivative works without prior written
        consent.
      </p>
    ),
  },
  {
    id: "platform-usage",
    title: "Platform Usage",
    content: (
      <p>
        Your access to the platform is granted on a limited, non-exclusive, non-transferable basis.
        Any misuse — including unauthorized access, automated scraping, or interference with other
        users — may result in immediate suspension or termination of access.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, PlaceValue and its affiliates shall not be liable for
        any indirect, incidental, consequential, special, or punitive damages, including loss of
        profits, data, or goodwill, arising out of or related to your use of the services.
      </p>
    ),
  },
  {
    id: "service-availability",
    title: "Service Availability",
    content: (
      <p>
        While we strive to keep our services available at all times, we do not guarantee uninterrupted
        access. Services may be temporarily unavailable due to maintenance, upgrades, or factors
        beyond our reasonable control.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate your access to the services at any time, with or
        without notice, for conduct that we believe violates these Terms or is otherwise harmful to
        other users, PlaceValue, or third parties.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the applicable laws of the
        jurisdiction in which PlaceValue operates, without regard to its conflict of law principles.
        Any disputes shall be subject to the exclusive jurisdiction of the competent courts therein.
      </p>
    ),
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: (
      <p>
        For any questions regarding these Terms & Conditions, please contact us at{" "}
        <a href="mailto:legal@placevalue.in" className="text-[#FA8927] hover:underline">legal@placevalue.in</a>.
      </p>
    ),
  },
];


export default function TermsPage() {
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
        <LegalLayout
          title="Terms & Conditions"
          subtitle="Terms governing the use of PlaceValue services and platforms."
          lastUpdated="June 20, 2026"
          sections={sections}
        />
      </div>
    </main>
  );
}