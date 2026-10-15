import type { Metadata } from "next";
import { KAIRO_CONTACT } from "../../constants/contact";
import {
  LegalContactBlock,
  LegalIntro,
  LegalKeyValueList,
  LegalList,
  LegalPage,
  LegalPageHeader,
  LegalParagraph,
  LegalSection,
  LegalSubsection,
  LegalTableOfContents,
} from "../../components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Kairo",
  description:
    "Privacy Policy for Kairo Personal, Kairo Business, and Kairo Enterprise.",
};

const tableOfContents = [
  { id: "who-this-policy-covers", label: "Who This Policy Covers" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "how-we-share", label: "How We Share Your Information" },
  { id: "bvn-kyc", label: "BVN, KYC & Identity Verification" },
  {
    id: "data-storage-security-retention",
    label: "Data Storage, Security & Retention",
  },
  { id: "your-rights", label: "Your Rights" },
  { id: "whatsapp-third-party", label: "WhatsApp & Third-Party Channels" },
  { id: "cookies-tracking", label: "Cookies & Tracking (Website)" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "changes-to-policy", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us & Grievance Redressal" },
];

const legalBasisItems = [
  {
    key: "Contractual necessity:",
    value:
      "Processing needed to create your wallet, execute transactions, and deliver the Services you've requested",
  },
  {
    key: "Legal obligation:",
    value:
      "BVN/KYC verification, AML/CTF screening, tax and regulatory reporting required by CBN, NDPA, and other applicable regulators",
  },
  {
    key: "Legitimate interest:",
    value:
      "Fraud prevention, service improvement, and security monitoring, balanced against your rights and freedoms",
  },
  {
    key: "Consent:",
    value:
      "Marketing communications, optional features (e.g. voice processing where separately consented), and any processing not covered by the bases above",
  },
];

const dataRetentionItems = [
  {
    key: "Identity verification data (BVN-derived):",
    value: "Duration of account + 5 years after account closure.",
  },
  {
    key: "Transaction records",
    value:
      "Minimum 5 years from transaction date, per standard financial recordkeeping requirements.",
  },
  {
    key: "WhatsApp/chat conversation logs:",
    value:
      "Duration of account + 5 years for support and dispute resolution.",
  },
  {
    key: "Voice recordings:",
    value: "5 years from the date of recording.",
  },
  {
    key: "Marketing consent and preferences:",
    value: "Until you withdraw consent or close your account",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage>
      <LegalPageHeader
        title="Privacy Policy"
        lastUpdated="Last updated: June 30, 2026"
      />

      <LegalIntro>
        <LegalParagraph>
          This Privacy Policy explains how Kairo collects, uses, shares, and
          protects information when you use any of our products and services:
          Kairo Personal, Kairo Business, and Kairo Enterprise.
        </LegalParagraph>
        <LegalParagraph>
          Kairo is a financial intelligence platform operating across three
          layers: Kairo Personal, Kairo Business, and Kairo Enterprise.
          Because these three products serve different audiences with different
          data needs, this Policy is structured so that each section first
          explains what applies to all users, then breaks out specifics by
          product where the practices differ. We&apos;ve marked product-specific
          subsections clearly so you can navigate directly to what&apos;s
          relevant to you.
        </LegalParagraph>
        <LegalParagraph>
          By using any Kairo Service, you agree to the collection and use of
          information in accordance with this Policy. If you do not agree,
          please do not use our Services.
        </LegalParagraph>
      </LegalIntro>

      <LegalTableOfContents items={tableOfContents} />

      <div className="mt-16">
        <LegalSection id="who-this-policy-covers" title="1. Who This Policy Covers">
          <LegalSubsection title="1.1 Kairo Personal users">
            <LegalParagraph>
              Individuals who create a Kairo wallet to send money, receive
              money, pay bills, or make purchases through WhatsApp, voice, or
              chat-based interfaces.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="1.2 Kairo Business users">
            <LegalParagraph>
              Business owners (sole proprietors, registered companies, and
              informal businesses) who use Kairo to collect payments, manage a
              storefront, send invoices, run promotions, or access AI-powered
              customer support via social media, with optional web dashboard
              access.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="1.3 Kairo Enterprise clients and their end customers">
            <LegalParagraph>
              Financial institutions (banks, fintechs, payment processors, and
              switches) that license Kairo&apos;s enterprise software products
              (Reconcile, Fraud, Support, Flow, Relay, Insight, and Risk). Where
              Kairo processes data on behalf of an Enterprise client about that
              client&apos;s own customers, Kairo acts as a data processor (or
              &ldquo;processor&rdquo; under NDPA/GDPR terminology) on the
              institution&apos;s instructions, and the institution remains the
              data controller for its end customers&apos; information. Separate
              data processing agreements govern this relationship in addition
              to this Policy.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="information-we-collect" title="2. Information We Collect">
          <LegalParagraph>
            We collect information in three ways: information you provide
            directly, information collected automatically through your use of
            the Services, and information we receive from third parties (such
            as identity verification providers, payment networks, and your bank).
          </LegalParagraph>
          <LegalSubsection title="2.1 Information collected from all users">
            <LegalList
              items={[
                "Identity information: full name, date of birth, phone number, and (where applicable) email address",
                "Account credentials and authentication data.",
                "Communications you send to Kairo, including WhatsApp messages, voice messages, and chat transcripts.",
                "Device and technical information: IP address, device identifiers, operating system, app version, and general location data (derived from phone number or IP, not precise GPS unless separately authorized).",
                "Transaction data: amounts, timestamps, counterparties, payment references, and transaction status.",
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="2.2 Kairo Personal">
            <LegalList
              items={[
                "Bank Verification Number (BVN) and the identity data returned by BVN verification (full name, date of birth, gender, phone number, and BVN-linked photograph, where provided by the verification provider)",
                "Wallet balance and full transaction history (sends, receives, bill payments, purchases)",
                "Recipients and contacts you transact with or save within Kairo",
                "Voice recordings, when you use voice-based commands (processed to extract transaction intent; see Section 4 for retention and processing detail)",
                "Images submitted for “snap to pay” functionality (e.g. photographs of account slips or invoices)",
                "Language preference and the language(s) you communicate in",
                "Bill payment details (service providers, account numbers for utilities/subscriptions you've linked)",
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="2.3 Kairo Business">
            <LegalList
              items={[
                "Business name, business category, and (where provided) business registration details",
                "Storefront content: product listings, prices, images, and descriptions you upload",
                "Customer lists and contact details you upload or that are generated through transactions (your customers' phone numbers, names, and order history with your business)",
                "Invoice and payment collection data",
                "Content of customer service conversations handled by Kairo's AI auto-responder on your behalf",
                "Business owner's BVN and identity verification data (same as Section 3.2), required to activate a business wallet",
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="2.4 Kairo Enterprise">
            <LegalList
              items={[
                "Institutional account and integration credentials (API keys, system identifiers).",
                "Transaction, reconciliation, settlement, and exception data submitted by the institution for processing by Kairo's software.",
                "Aggregated and pseudonymized behavioral data used to power fraud detection, routing optimization, and risk models, as governed by the applicable data processing agreement.",
                "Usage and performance data related to the institution's use of Kairo's enterprise products (queries run, API calls, system logs).",
              ]}
            />
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="how-we-use" title="3. How We Use Your Information">
          <LegalParagraph>We use the information we collect to:</LegalParagraph>
          <LegalList
            items={[
              "Create and maintain your wallet or business account, including verifying your identity as required by law.",
              "Process transactions — sending, receiving, and confirming payments, bill payments, and purchases.",
              "Understand natural language, voice, and image-based instructions in order to carry out the action you've requested (e.g. interpreting “send 5k to Tunde” as a transfer instruction).",
              "Detect, investigate, and prevent fraud, unauthorized transactions, and other illegal activity.",
              "Provide customer support, including AI-powered automated responses for Kairo Business owners' customers.",
              "Send transaction confirmations, bill reminders, and account-related notifications.",
              "Improve our Services, including training and refining the AI models that power language understanding, fraud detection, and risk scoring (see Section 4.1 on model training).",
              "Comply with legal and regulatory obligations, including anti-money laundering (AML), counter-terrorism financing (CTF), and tax reporting requirements.",
              "With your consent, send promotional messages, product updates, and offers (you can opt out at any time).",
            ]}
          />
          <LegalSubsection title="AI model training and your data">
            <LegalParagraph>
              Kairo uses machine learning models to power conversational
              understanding, fraud detection, and risk intelligence. Where
              transaction and behavioral data is used to train or improve these
              models, we use aggregated and/or pseudonymized data wherever
              feasible. Voice recordings and message content used to improve
              language understanding are processed primarily through automated
              systems; access by human reviewers, where it occurs for quality
              assurance or model improvement purposes, is limited, logged, and
              subject to confidentiality obligations. You may object to your data
              being used for model improvement purposes by contacting us as
              described in Section 15, though this may limit certain
              personalization features.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="legal-basis" title="4. Legal Basis for Processing">
          <LegalParagraph>
            Depending on your location and applicable law (including the Nigeria
            Data Protection Act 2023 and, where relevant, the EU General Data
            Protection Regulation), we rely on the following legal bases to
            process your information:
          </LegalParagraph>
          <LegalKeyValueList items={legalBasisItems} />
        </LegalSection>

        <LegalSection id="how-we-share" title="5. How We Share Your Information">
          <LegalParagraph>
            We do not sell your personal information. We share information only
            in the following circumstances:
          </LegalParagraph>
          <LegalSubsection title="5.1 With your transaction counterparties">
            <LegalParagraph>
              When you send or receive money, certain information (such as your
              name and the transaction amount) is necessarily visible to the
              person or business on the other end of the transaction.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.2 With licensed financial institutions">
            <LegalParagraph>
              Where required to provide wallet services under Nigerian financial
              regulations, we may share your identity verification data (including
              BVN-derived information) with licensed banks or financial
              institutions as necessary to open and maintain your wallet.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.3 With identity verification providers">
            <LegalParagraph>
              We share your BVN with NIBSS (Nigeria Inter-Bank Settlement
              System) or other licensed BVN verification providers solely to
              confirm your identity. We do not receive your bank account balance,
              transaction history with other banks, or account details as part
              of this process.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.4 With service providers">
            <LegalParagraph>
              We engage third-party vendors to support our operations, including
              cloud hosting providers, SMS/WhatsApp Business API providers
              (including Meta, as the operator of WhatsApp), customer support
              tooling, and analytics providers. These providers are
              contractually bound to protect your information and use it only
              for the purposes we specify.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.5 For Kairo Business: with your customers and your business operations">
            <LegalParagraph>
              Information about transactions, products, and customer
              interactions is shared between you (the business owner) and your
              customers as a necessary function of the Service. If you use the
              AI auto-responder, customer messages and Kairo&apos;s responses
              are processed and may be reviewed in aggregate for quality and
              service improvement.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.6 For Kairo Enterprise: as governed by the data processing agreement">
            <LegalParagraph>
              Data submitted by Enterprise clients is shared only as necessary
              to deliver the contracted services (e.g., sharing fraud signals
              across the institution&apos;s own systems) and as set out in the
              applicable Master Services Agreement and Data Processing Agreement.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.7 Legal and regulatory disclosures">
            <LegalParagraph>
              We may disclose information where required by law, regulation,
              court order, or to cooperate with law enforcement, regulators
              (including the Central Bank of Nigeria and the Nigeria Data
              Protection Commission), or in connection with the investigation
              of fraud or other illegal activity.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="5.8 Business transfers">
            <LegalParagraph>
              If Kairo is involved in a merger, acquisition, financing, or sale
              of assets, your information may be transferred as part of that
              transaction. We will notify you of any such change in ownership
              or use of your personal information.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection
          id="bvn-kyc"
          title="6. BVN, KYC & Identity Verification"
        >
          <LegalParagraph>
            This section addresses the collection and use of your Bank
            Verification Number (BVN) specifically, given its sensitivity and
            the questions it commonly raises.
          </LegalParagraph>
          <LegalList
            items={[
              "We collect your BVN solely to verify your identity, as required by the Central Bank of Nigeria's Know Your Customer (KYC) regulations and the Nigeria Data Protection Act for the provision of financial wallet services.",
              "Your BVN is used to confirm your full name, date of birth, and other identity attributes directly with NIBSS or an authorized verification provider.",
              "We do not use your BVN to access your bank account balance, view your transaction history at other banks, or move money out of any external bank account.",
              "Your BVN is encrypted in storage and in transit, and access to it within Kairo is restricted to systems and personnel directly involved in identity verification and regulatory compliance.",
              "We retain BVN-derived identity data for as long as your account is active and for 5 years after account closure.",
              "Identity verification (including BVN, and where applicable, NIN — National Identification Number) is also required to activate a Kairo Business wallet for the business owner.",
            ]}
          />
        </LegalSection>

        <LegalSection
          id="data-storage-security-retention"
          title="7. Data Storage, Security & Retention"
        >
          <LegalSubsection title="Security measures">
            <LegalList
              items={[
                "Encryption of sensitive data (including BVN and identity data) both at rest and in transit.",
                "Role-based access controls limiting employee access to personal data on a need-to-know basis.",
                "Regular security testing, monitoring, and audit logging of access to sensitive systems.",
                "Multi-factor authentication for internal systems handling financial and identity data.",
                "Fraud monitoring systems (Kairo Fraud) that operate across all three products to detect anomalous activity in real time.",
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="Data retention">
            <LegalParagraph>
              We retain personal information for as long as necessary to
              provide the Services, comply with legal obligations (including
              financial recordkeeping and AML requirements), resolve disputes,
              and enforce our agreements. Specific retention periods:
            </LegalParagraph>
            <LegalKeyValueList items={dataRetentionItems} />
            <LegalParagraph>
              Where you close your Kairo account, we will delete or anonymize
              your personal information within a reasonable period, except where
              retention is required by law (such as financial transaction
              records) or necessary for the resolution of disputes or legal
              claims.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="your-rights" title="8. Your Rights">
          <LegalParagraph>
            Subject to applicable law (including the Nigeria Data Protection Act
            2023 and, where applicable, GDPR), you have the right to:
          </LegalParagraph>
          <LegalList
            items={[
              "Access the personal information we hold about you",
              "Correct inaccurate or incomplete information",
              "Request deletion of your information, subject to our legal and regulatory retention obligations",
              "Object to or restrict certain processing, including processing for marketing or AI model improvement purposes",
              "Request a copy of your data in a portable, machine-readable format",
              "Withdraw consent at any time, where processing is based on consent (this will not affect the lawfulness of processing carried out before withdrawal)",
              "Lodge a complaint with the Nigeria Data Protection Commission (NDPC) or other applicable supervisory authority",
            ]}
          />
          <LegalParagraph>
            To exercise any of these rights, contact us using the details in
            Section 15. We will respond within the timeframe required by
            applicable law (generally within 30 days, though this may be
            extended in certain circumstances with notice to you).
          </LegalParagraph>
        </LegalSection>

        <LegalSection
          id="whatsapp-third-party"
          title="9. WhatsApp & Third-Party Channels"
        >
          <LegalParagraph>
            Kairo Personal and Kairo Business operate primarily through
            WhatsApp, using the WhatsApp Business API operated by Meta. This
            section explains how that affects your data.
          </LegalParagraph>
          <LegalList
            items={[
              "Messages you send to Kairo through WhatsApp are transmitted via Meta's infrastructure as part of the WhatsApp Business Platform. Meta's own privacy policy governs its handling of message transport and metadata; this Kairo Privacy Policy governs how Kairo itself processes the content and outcome of those conversations.",
              "Voice notes, text messages, and images you send to Kairo via WhatsApp are processed by Kairo's systems to interpret and act on your requests, as described in Section 4.",
              "Where Kairo is also accessible via Telegram, voice channels, or a web/app dashboard, equivalent protections described in this Policy apply, adapted to the technical characteristics of each channel.",
              "We encourage you to review WhatsApp's own privacy policy and terms of service, available at whatsapp.com, to understand Meta's role in message transport.",
            ]}
          />
        </LegalSection>

        <LegalSection id="cookies-tracking" title="10. Cookies & Tracking (Website)">
          <LegalParagraph>
            When you visit our website (and, where applicable, the Kairo
            Business web dashboard), we and our service providers may use
            cookies, local storage, and similar technologies to operate the
            site, remember your preferences, and understand how our pages are
            used in aggregate.
          </LegalParagraph>
          <LegalList
            items={[
              "Strictly necessary cookies required for core site functionality and security",
              "Preference cookies that remember choices you make, such as language or region, where available",
              "Analytics cookies that help us measure traffic and improve our content and user experience",
            ]}
          />
          <LegalParagraph>
            We do not use cookies to track you across unrelated third-party
            websites for targeted advertising, and we do not sell personal
            information collected through cookies. You can manage or delete
            cookies through your browser settings; blocking strictly necessary
            cookies may affect how parts of the site work.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="childrens-privacy" title="11. Children's Privacy">
          <LegalParagraph>
            Kairo&apos;s Services are intended for individuals who are at least
            18 years old, or who meet the minimum age for entering binding
            financial agreements and obtaining a BVN under applicable Nigerian
            law. We do not knowingly collect personal information from
            children. If we become aware that we have inadvertently collected
            information from a person under the applicable minimum age, we will
            take steps to delete that information promptly.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="changes-to-policy" title="12. Changes to This Policy">
          <LegalParagraph>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or for
            other operational reasons. We will notify you of material changes
            through the Services (e.g., a WhatsApp message or in-app
            notification) or by other reasonable means, and will update the
            &ldquo;Last updated&rdquo; date at the top of this Policy. We
            encourage you to review this Policy periodically.
          </LegalParagraph>
        </LegalSection>

        <LegalSection
          id="contact-us"
          title="13. Contact Us & Grievance Redressal"
        >
          <LegalParagraph>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or how your information is handled, please contact:
          </LegalParagraph>
          <p className="font-semibold text-text-02">
            Kairo Data Protection Officer
          </p>
          <LegalContactBlock
            lines={[
              {
                label: "Email",
                value: KAIRO_CONTACT.privacyEmail,
              },
              {
                label: "Address",
                value: KAIRO_CONTACT.address,
              },
            ]}
          />
          <LegalParagraph>
            If you are not satisfied with our response, you have the right to
            lodge a complaint with the Nigeria Data Protection Commission
            (NDPC), or the applicable data protection authority in your
            jurisdiction.
          </LegalParagraph>
        </LegalSection>
      </div>
    </LegalPage>
  );
}
