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
  title: "Terms of Use | Kairo",
  description: "Terms of Use for Kairo Personal, Kairo Business, and Kairo Enterprise.",
};

const tableOfContents = [
  { id: "eligibility", label: "Eligibility" },
  { id: "kairo-personal", label: "Kairo Personal — Terms of Use" },
  { id: "kairo-business", label: "Kairo Business — Terms of Use" },
  { id: "kairo-enterprise", label: "Kairo Enterprise — Terms of Use" },
  {
    id: "account-registration",
    label: "Account Registration & Identity Verification",
  },
  { id: "fees-and-charges", label: "Fees & Charges" },
  { id: "prohibited-uses", label: "Prohibited Uses" },
  {
    id: "ai-features",
    label: "AI Features, Conversational Commands & Your Responsibility",
  },
  { id: "intellectual-property", label: "Intellectual Property" },
  {
    id: "third-party-services",
    label: "Third-Party Services (Including WhatsApp)",
  },
  {
    id: "disclaimers",
    label: "Disclaimers & Limitation of Liability",
  },
  { id: "indemnification", label: "Indemnification" },
  { id: "suspension-termination", label: "Suspension & Termination" },
  { id: "dispute-resolution", label: "Dispute Resolution & Governing Law" },
  { id: "changes-to-terms", label: "Changes to These Terms" },
  { id: "general-provisions", label: "General Provisions" },
  { id: "cooperative-society-membership", label: "Cooperative Society Membership" },
  { id: "contact-us", label: "Contact Us" },
];

const feeItems = [
  {
    key: "Kairo Personal — wallet transactions",
    value:
      "Transaction fees as disclosed at time of transaction; subject to change with notice",
  },
  {
    key: "Kairo Business — Starter plan",
    value:
      "Free; transaction fee per payment collected, as disclosed in-app",
  },
  {
    key: "Kairo Business — Growth plan",
    value:
      "Recurring monthly subscription fee; reduced/zero transaction fees up to a stated monthly volume",
  },
  {
    key: "Kairo Enterprise",
    value:
      "As set out in the applicable Master Services Agreement and order form, which may include onboarding fees, per-instruction/usage-based fees, and recurring license fees",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage>
      <LegalPageHeader
        title="Terms of Use"
        lastUpdated="Last updated: October 14, 2026"
      />

      <LegalIntro>
        <LegalParagraph>
          These Terms of Use govern your access to and use of Kairo&apos;s
          products and services — Kairo Personal, Kairo Business, and Kairo
          Enterprise (together, the &ldquo;Services&rdquo;) — provided by{" "}
          {KAIRO_CONTACT.legalEntityName}, a company incorporated in Nigeria with
          its registered address at {KAIRO_CONTACT.address}
        </LegalParagraph>
        <LegalParagraph>
          By creating a Kairo account, accessing Kairo through WhatsApp or any
          other channel, or otherwise using any Kairo Service, you agree to be
          bound by these Terms. If you are using Kairo Business or Kairo
          Enterprise on behalf of a company or other legal entity, you represent
          that you have the authority to bind that entity to these Terms, and
          &ldquo;you&rdquo; refers to both you individually and that entity.
        </LegalParagraph>
        <LegalParagraph>
          If you do not agree to these Terms, you must not access or use the
          Services.
        </LegalParagraph>
        <LegalParagraph>
          These Terms apply to all three Services. Sections 3, 4, and 5 set out
          provisions specific to each product; all other sections apply across
          all Services unless stated otherwise.
        </LegalParagraph>
      </LegalIntro>

      <LegalTableOfContents items={tableOfContents} />

      <div className="mt-16">
        <LegalSection id="eligibility" title="Eligibility">
          <LegalParagraph>
            To use Kairo&apos;s Services, you must:
          </LegalParagraph>
          <LegalList
            items={[
              "Be at least 18 years old, or the minimum age required under applicable law to enter binding financial agreements and hold a BVN.",
              "Have the legal capacity to enter into a binding contract.",
              "Possess a valid Bank Verification Number (BVN) or other identity credential acceptable to Kairo, where required to activate a wallet.",
              "Not be barred from using financial services under any applicable law, including sanctions, anti-money laundering (AML), or counter-terrorism financing (CTF) regulations.",
              "For Kairo Business: be authorized to act on behalf of the business you are registering, where applicable.",
              "For Kairo Enterprise: be a duly licensed or regulated financial institution, or an entity otherwise approved by Kairo to access Enterprise products, and have entered into an applicable Master Services Agreement.",
            ]}
          />
          <LegalParagraph>
            Kairo reserves the right to refuse, suspend, or terminate access to
            the Services for any person or entity that does not meet, or ceases
            to meet, these eligibility requirements.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="kairo-personal" title="Kairo Personal — Terms of Use">
          <LegalSubsection title="2.1 Wallet services">
            <LegalParagraph>
              Kairo Personal provides you with a digital wallet in accordance
              with applicable Central Bank of Nigeria regulations. Funds held in
              your Kairo wallet are subject to applicable banking and e-money
              regulations.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="2.2 Sending and receiving money">
            <LegalParagraph>
              You may use Kairo Personal to send and receive money, pay bills,
              and make purchases by communicating your instructions via
              WhatsApp, voice, chat, or other supported channels. You are
              responsible for the accuracy of the instructions you provide —
              including recipient details, amounts, and payment references — and
              Kairo is not liable for funds sent to an incorrect recipient as a
              result of inaccurate information you provided.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="2.3 Transaction confirmation">
            <LegalParagraph>
              Kairo will, wherever reasonably possible, present a summary of
              your intended transaction (recipient, amount, and source) for your
              confirmation before the transaction is executed. By confirming —
              whether by tapping a button, replying &ldquo;yes,&rdquo; or other
              affirmative action — you authorize Kairo to execute that
              transaction.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="2.4 Wallet limits">
            <LegalParagraph>
              Your wallet may be subject to transaction and balance limits based
              on your verification tier (e.g., BVN-verified status), as required
              by applicable CBN tiered KYC regulations. These limits may change
              from time to time and will be communicated to you through the
              Services.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="2.5 Promotional credits and referral bonuses">
            <LegalParagraph>
              From time to time, Kairo may provide promotional credits, welcome
              bonuses, or referral rewards (such as airtime or wallet credit)
              subject to specific terms communicated at the time of the offer,
              including expiry periods. Kairo reserves the right to reclaim or
              void promotional credits obtained fraudulently or in violation of
              these Terms.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="kairo-business" title="Kairo Business — Terms of Use">
          <LegalSubsection title="3.1 Business wallet and account">
            <LegalParagraph>
              Kairo Business provides a business wallet, invoicing tools, a
              storefront, and related features to help you collect payments and
              operate your business through WhatsApp and the Kairo web dashboard.
              Your business wallet is subject to the same regulatory framework
              applicable to Kairo Personal wallet services.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="3.2 Storefront content">
            <LegalParagraph>
              You are solely responsible for the accuracy, legality, and
              appropriateness of all content you upload to your Kairo storefront,
              including product listings, descriptions, prices, and images. You
              represent that you have the right to sell the products or services
              you list, and that your listings do not infringe any third
              party&apos;s intellectual property or violate applicable law.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="3.3 Invoicing and payment collection">
            <LegalParagraph>
              You are responsible for ensuring that invoices you send through
              Kairo accurately reflect the goods or services provided and the
              amounts owed. Kairo facilitates the transmission and payment of
              invoices but is not a party to the underlying transaction between
              you and your customer, and is not responsible for disputes
              regarding the quality, delivery, or fitness of goods or services
              sold.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="3.4 AI auto-responder">
            <LegalParagraph>
              If you enable Kairo&apos;s AI-powered auto-responder to handle
              customer inquiries on your behalf, you acknowledge that responses
              are generated by an automated system based on information you
              provide (such as your storefront catalogue and business details).
              You are responsible for reviewing and ensuring the accuracy of the
              information used to power these responses, and Kairo is not liable
              for losses arising from inaccurate information you provided to the
              system.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="3.5 Subscription plans and billing">
            <LegalParagraph>
              Kairo Business offers tiered plans (including a free Starter tier
              and paid Growth tier) as described on our pricing page. Paid
              subscriptions are billed in advance on a recurring basis and will
              automatically renew unless cancelled prior to the renewal date.
              Transaction fees applicable to your plan are disclosed at the time
              of each transaction or in your account settings.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="3.6 Customer data you upload">
            <LegalParagraph>
              Where you upload customer contact lists or other customer data to
              Kairo Business, you represent that you have the necessary rights
              and consents to share that data with Kairo for the purposes of
              providing the Services (including sending promotions and invoices
              on your behalf), in compliance with applicable data protection
              law.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection
          id="kairo-enterprise"
          title="Kairo Enterprise — Terms of Use"
        >
          <LegalSubsection title="4.1 Relationship to the Master Services Agreement">
            <LegalParagraph>
              Access to and use of Kairo Enterprise products (including
              Reconcile, Fraud, Support, Flow, Relay, Insight, and Risk) by a
              financial institution or other licensed entity (&ldquo;Enterprise
              Client&rdquo;) is governed primarily by a separate Master Services
              Agreement (&ldquo;MSA&rdquo;) and accompanying Data Processing
              Agreement (&ldquo;DPA&rdquo;) entered into between Kairo and the
              Enterprise Client. These Terms apply to the extent not superseded
              by the specific provisions of the applicable MSA.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="4.2 License grant">
            <LegalParagraph>
              Subject to the MSA and payment of applicable fees, Kairo grants
              the Enterprise Client a non-exclusive, non-transferable license to
              access and use the contracted Kairo Enterprise products for the
              Enterprise Client&apos;s internal business operations, for the
              duration of the applicable subscription term.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="4.3 API access and integration">
            <LegalParagraph>
              Enterprise Clients accessing Kairo&apos;s products via API are
              responsible for the security of their own API credentials and for
              ensuring their integration complies with any technical and security
              requirements specified by Kairo. Kairo reserves the right to suspend
              API access that poses a security risk or violates rate limits or
              usage terms specified in the applicable MSA.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="4.4 Data processing role">
            <LegalParagraph>
              Where Kairo processes data on behalf of an Enterprise Client
              relating to that client&apos;s own customers, Kairo acts as a data
              processor under the client&apos;s instructions, as set out in the
              applicable DPA. The Enterprise Client remains the data controller
              responsible for ensuring it has appropriate legal basis to share
              such data with Kairo.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="4.5 Service levels and support">
            <LegalParagraph>
              Specific service level commitments (including uptime, response
              times, and support availability) applicable to Enterprise Clients
              are set out in the applicable MSA or a separate Service Level
              Agreement (SLA), and are not modified by these general Terms.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="4.6 Pilot programs">
            <LegalParagraph>
              Where Kairo and an Enterprise Client agree to a pilot or trial
              period, the terms of that pilot (including duration, scope, and
              any special pricing) will be set out in a separate pilot agreement
              or order form, which will govern in the event of any conflict with
              these Terms.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection
          id="account-registration"
          title="5. Account Registration & Identity Verification"
        >
          <LegalParagraph>
            To activate a Kairo Personal or Kairo Business wallet, you must
            complete identity verification, including providing your Bank
            Verification Number (BVN) and confirming the identity details
            returned by the verification process, as described in our Privacy
            Policy.
          </LegalParagraph>
          <LegalList
            items={[
              "You agree to provide accurate, current, and complete information during registration and to keep such information updated.",
              "You are responsible for maintaining the confidentiality and security of your account and any credentials associated with it.",
              "You agree to notify Kairo immediately of any unauthorized use of your account or any other breach of security.",
              "Kairo reserves the right to decline registration, or to suspend a wallet, where identity verification fails, raises fraud or compliance concerns, or where required by applicable law.",
              "You may only maintain one personal Kairo wallet linked to a single verified identity, unless otherwise permitted by Kairo.",
            ]}
          />
        </LegalSection>

        <LegalSection id="fees-and-charges" title="Fees & Charges">
          <LegalParagraph>
            Transaction fees as disclosed at time of transaction; subject to
            change with notice.
          </LegalParagraph>
          <LegalKeyValueList items={feeItems} />
          <LegalParagraph>
            Kairo reserves the right to change its fees from time to time. For
            Kairo Personal and Kairo Business, material fee changes will be
            communicated to you with reasonable advance notice through the
            Services. For Kairo Enterprise, fee changes are governed by the
            applicable MSA. Continued use of the Services after a fee change
            takes effect constitutes acceptance of the new fees.
          </LegalParagraph>
          <LegalParagraph>
            You are responsible for any third-party charges (such as charges from
            your bank, mobile network operator, or internet service provider)
            incurred in connection with your use of the Services.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="prohibited-uses" title="Prohibited Uses">
          <LegalParagraph>You agree not to use the Services to:</LegalParagraph>
          <LegalList
            items={[
              "Engage in money laundering, terrorism financing, fraud, or any other illegal financial activity",
              "Send or receive funds derived from, or intended to further, illegal activity",
              "Impersonate any person or entity, or misrepresent your affiliation with any person or entity",
              "Circumvent, disable, or otherwise interfere with security-related features of the Services, including identity verification and fraud detection systems",
              "Use the Services in any manner that could damage, disable, overburden, or impair Kairo's systems, or interfere with any other party's use of the Services",
              "Reverse engineer, decompile, or attempt to extract the source code of any software underlying the Services, except as permitted by applicable law",
              "Use automated systems, bots, or scripts to access the Services in a manner inconsistent with normal conversational use, without Kairo's prior written consent (this does not apply to authorized Enterprise API integrations)",
              "For Kairo Business: list or sell goods or services that are illegal, counterfeit, or that infringe third-party intellectual property rights",
              "Violate any applicable law, regulation, or third party's rights in connection with your use of the Services",
            ]}
          />
        </LegalSection>

        <LegalSection
          id="ai-features"
          title="AI Features, Conversational Commands & Your Responsibility"
        >
          <LegalParagraph>
            Kairo&apos;s Services rely on artificial intelligence to interpret
            natural language, voice, and image-based instructions (such as a
            photograph of an account slip) and convert them into transaction
            requests. This section sets out important responsibilities relating
            to these features.
          </LegalParagraph>
          <LegalList
            items={[
              "You are responsible for reviewing any transaction summary or confirmation presented by Kairo before approving it. Approving a transaction confirms that the details shown (recipient, amount, and source) are correct, to the best of your knowledge",
              "Kairo's AI systems are designed to interpret instructions accurately, but no automated system is infallible. You should review confirmations carefully, particularly for high-value transactions",
              "Where Kairo's AI generates content on your behalf (such as promotional messages for Kairo Business, or automated customer responses), you are responsible for reviewing and approving that content before it is sent, where such review is offered, and for the consequences of content sent using auto-approval features you have enabled",
              "Voice-based instructions are processed to extract transactional intent; background noise, accents, or ambiguous phrasing may occasionally result in misinterpretation, which is why confirmation steps exist before funds are moved",
              "Kairo is not liable for losses arising from a transaction that was accurately summarized in a confirmation step and that you approved, even if the underlying instruction was given in error",
            ]}
          />
        </LegalSection>

        <LegalSection id="intellectual-property" title="Intellectual Property">
          <LegalParagraph>
            The Services, including all software, designs, text, graphics, logos,
            and the Kairo name and trademarks, are owned by Kairo or its
            licensors and are protected by intellectual property laws. These
            Terms do not grant you any right, title, or interest in the Services
            other than the limited right to use them in accordance with these
            Terms.
          </LegalParagraph>
          <LegalParagraph>
            You retain ownership of content you upload to the Services (such as
            Kairo Business storefront listings and images), but grant Kairo a
            non-exclusive, worldwide, royalty-free license to use, host, store,
            reproduce, and display that content as necessary to provide the
            Services to you and your customers.
          </LegalParagraph>
        </LegalSection>

        <LegalSection
          id="third-party-services"
          title="Third-Party Services (Including WhatsApp)"
        >
          <LegalParagraph>
            Kairo Personal and Kairo Business operate primarily through WhatsApp,
            using the WhatsApp Business Platform operated by Meta Platforms,
            Inc. Your use of WhatsApp to access Kairo is also subject to
            WhatsApp&apos;s own Terms of Service and Privacy Policy, available at
            whatsapp.com. Kairo is not responsible for the availability,
            performance, or security of WhatsApp&apos;s infrastructure, and any
            interruption in WhatsApp&apos;s services may affect your ability to
            access Kairo through that channel.
          </LegalParagraph>
          <LegalParagraph>
            The Services may also integrate with or rely on other third-party
            services (including identity verification providers, payment
            networks, cloud infrastructure providers, and telecommunications
            providers). Kairo is not responsible for the acts or omissions of
            these third parties, except to the extent required by applicable
            law.
          </LegalParagraph>
        </LegalSection>

        <LegalSection
          id="disclaimers"
          title="Disclaimers & Limitation of Liability"
        >
          <LegalSubsection title="11.1 Service provided “as is”">
            <LegalParagraph>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the maximum extent permitted by
              applicable law, Kairo disclaims all warranties, express or implied,
              including warranties of merchantability, fitness for a particular
              purpose, and non-infringement. Kairo does not warrant that the
              Services will be uninterrupted, error-free, or completely secure.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="11.2 Limitation of liability">
            <LegalParagraph>
              To the maximum extent permitted by applicable law, Kairo&apos;s
              total liability to you for any claim arising out of or relating to
              these Terms or the Services shall not exceed the fees you paid to
              Kairo in the twelve (12) months preceding the claim. Kairo shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including loss of profits, data, or goodwill.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="11.3 No liability for unauthorized access due to your negligence">
            <LegalParagraph>
              Kairo is not liable for losses arising from unauthorized access to
              your account resulting from your failure to safeguard your account
              credentials, device, or WhatsApp account, except where such access
              results from Kairo&apos;s own negligence or breach of these Terms.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="indemnification" title="Indemnification">
          <LegalParagraph>
            You agree to indemnify, defend, and hold harmless Kairo, its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses (including
            reasonable legal fees) arising out of or in any way connected with:
            (a) your access to or use of the Services; (b) your violation of
            these Terms; (c) your violation of any applicable law or the rights
            of any third party; or (d) for Kairo Business users, any dispute
            between you and your customers relating to goods or services sold
            through your storefront.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="suspension-termination" title="Suspension & Termination">
          <LegalSubsection title="13.1 Termination by you">
            <LegalParagraph>
              You may stop using the Services and close your account at any time
              by contacting Kairo support, subject to settlement of any
              outstanding obligations (including outstanding Kairo Business
              subscription fees or unresolved transaction disputes).
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="13.2 Suspension or termination by Kairo">
            <LegalParagraph>
              Kairo may suspend or terminate your access to the Services, with
              or without notice, where:
            </LegalParagraph>
            <LegalList
              items={[
                "You violate these Terms, including the Prohibited Uses in Section 8",
                "Kairo reasonably suspects fraudulent, illegal, or unauthorized activity on your account",
                "Required to do so by a regulator, court order, or applicable law",
                "Your identity verification cannot be confirmed or is found to be inaccurate",
                "For Kairo Business: non-payment of subscription fees beyond an applicable grace period",
                "For Kairo Enterprise: as set out in the applicable Master Services Agreement",
              ]}
            />
          </LegalSubsection>
          <LegalSubsection title="13.3 Effect of termination">
            <LegalParagraph>
              Upon termination, your right to access the Services will cease.
              Kairo will facilitate the withdrawal of any remaining wallet
              balance to a verified bank account, subject to completion of any
              pending fraud or compliance review, and subject to applicable
              regulatory requirements. Provisions of these Terms that by their
              nature should survive termination (including Sections 10, 12, 13,
              and 15) will continue to apply.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection
          id="dispute-resolution"
          title="Dispute Resolution & Governing Law"
        >
          <LegalSubsection title="14.1 Governing law">
            <LegalParagraph>
              These Terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria, without regard to its
              conflict of law principles.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="14.2 Informal resolution first">
            <LegalParagraph>
              Before initiating any formal dispute resolution process, you agree
              to first contact Kairo&apos;s support team to attempt to resolve
              the matter informally. Most concerns can be resolved quickly
              through this channel.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="14.3 Enterprise disputes">
            <LegalParagraph>
              Disputes arising under a Kairo Enterprise Master Services Agreement
              shall be resolved in accordance with the dispute resolution
              provisions set out in that agreement, which shall govern in the
              event of any conflict with this Section.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="changes-to-terms" title="Changes to These Terms">
          <LegalParagraph>
            Kairo may update these Terms from time to time to reflect changes in
            our Services, legal or regulatory requirements, or for other
            operational reasons. We will notify you of material changes through
            the Services (such as a WhatsApp message or in-app notification) and
            will update the &ldquo;Last updated&rdquo; date at the top of these
            Terms. Your continued use of the Services after a change takes
            effect constitutes your acceptance of the revised Terms. If you do not
            agree to the revised Terms, you must stop using the Services.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="general-provisions" title="General Provisions">
          <LegalSubsection title="16.1 Entire agreement">
            <LegalParagraph>
              These Terms, together with our Privacy Policy and (where
              applicable) any Master Services Agreement, constitute the entire
              agreement between you and Kairo regarding your use of the
              Services, and supersede any prior agreements.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="16.2 Severability">
            <LegalParagraph>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary, and the remaining provisions will remain
              in full force and effect.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="16.3 No waiver">
            <LegalParagraph>
              Kairo&apos;s failure to enforce any right or provision of these
              Terms will not be considered a waiver of that right or provision.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="16.4 Assignment">
            <LegalParagraph>
              You may not assign or transfer these Terms, or any rights or
              obligations under them, without Kairo&apos;s prior written consent.
              Kairo may assign these Terms in connection with a merger,
              acquisition, or sale of assets, or by operation of law.
            </LegalParagraph>
          </LegalSubsection>
          <LegalSubsection title="16.5 Force majeure">
            <LegalParagraph>
              Kairo will not be liable for any failure or delay in performance
              resulting from causes beyond its reasonable control, including
              natural disasters, acts of government, network or infrastructure
              failures (including WhatsApp or telecommunications outages), or
              other events of force majeure.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection
          id="cooperative-society-membership"
          title="Cooperative Society Membership"
        >
          <LegalParagraph>
            Kairo is the digital platform of First Frontier Technologist
            Cooperative Investment And Credit Society Limited (the
            &ldquo;Society&rdquo;). The Society provides its cooperative services
            through Kairo and will use the platform to manage membership,
            communicate with members, and provide access to its services.
          </LegalParagraph>
          <LegalParagraph>
            When you complete signup for a Kairo account and accept these Terms,
            you become a member of the Society, subject to the Society&apos;s
            membership requirements. Your membership begins upon completion of
            signup and acceptance of these Terms. There is no registration fee
            for becoming a member.
          </LegalParagraph>
          <LegalParagraph>
            After signup, the Society will make its registered bye-laws and
            applicable membership terms available to you through Kairo or
            another communication channel. Those documents describe the
            Society&apos;s governance and the rights and responsibilities of its
            members. You are responsible for reviewing them after they are made
            available and for keeping your contact details up to date so the
            Society can send you membership information.
          </LegalParagraph>
          <LegalParagraph>
            Membership may entitle you to access cooperative services and
            participate in Society activities, subject to the Society&apos;s
            rules, eligibility requirements, and any conditions that apply to
            the relevant service or activity. Membership does not guarantee
            access to every product, service, benefit, loan, or other facility
            offered by the Society; additional eligibility criteria or approval
            may apply.
          </LegalParagraph>
          <LegalParagraph>
            There is no registration fee. If the Society introduces or applies
            any other membership contribution, charge, or payment obligation,
            it will communicate the amount, purpose, and applicable terms to
            you before the payment is due. Any such obligation will be governed
            by the Society&apos;s registered bye-laws and applicable membership
            terms.
          </LegalParagraph>
          <LegalParagraph>
            You may contact the Society through Kairo to ask questions about
            your membership, request a copy of the bye-laws, or learn how to
            withdraw from membership. Withdrawal, suspension, or termination of
            membership will be handled in accordance with the Society&apos;s
            registered bye-laws and applicable law.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="contact-us" title="Contact Us">
          <LegalParagraph>
            If you have questions about these Terms, please contact:
          </LegalParagraph>
          <p className="font-semibold text-text-02">Kairo Support & Legal</p>
          <LegalContactBlock
            lines={[
              {
                label: "Email",
                value: KAIRO_CONTACT.legalEmail,
              },
              {
                label: "Address",
                value: KAIRO_CONTACT.address,
              },
            ]}
          />
        </LegalSection>
      </div>
    </LegalPage>
  );
}
