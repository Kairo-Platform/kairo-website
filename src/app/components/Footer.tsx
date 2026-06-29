import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { label: "Kairo Recon", href: "#kairo-recon" },
      { label: "Kairo Fraud", href: "#kairo-fraud" },
      { label: "Kairo Flow", href: "#kairo-flow" },
      { label: "Kairo Support", href: "#kairo-support" },
      { label: "Kairo Insights", href: "#kairo-insights" },
      { label: "Kairo Connect", href: "#kairo-connect" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Role-based permissions", href: "#role-based-permissions" },
      { label: "Approval workflows", href: "#approval-workflows" },
      { label: "Escalation routing", href: "#escalation-routing" },
      { label: "Audit logs", href: "#audit-logs" },
      { label: "Activity tracking", href: "#activity-tracking" },
      { label: "Multi-team collaboration", href: "#multi-team-collaboration" },
      {
        label: "Controlled communication approvals",
        href: "#controlled-communication-approvals",
      },
    ],
  },
  {
    title: "Kairo connect",
    links: [
      { label: "Core banking applications", href: "#core-banking-applications" },
      { label: "Switches", href: "#switches" },
      { label: "Payment gateways", href: "#payment-gateways" },
      { label: "ERP systems", href: "#erp-systems" },
      { label: "Settlement providers", href: "#settlement-providers" },
      { label: "Emails", href: "#emails" },
      { label: "Slack", href: "#slack" },
      { label: "Webhooks", href: "#webhooks" },
      { label: "Internal operational systems", href: "#internal-operational-systems" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#privacy-policy" },
      { label: "Terms of use", href: "#terms-of-use" },
    ],
  },
  {
    title: "Contact with us",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/kairo",
        external: true,
      },
      {
        label: "X",
        href: "https://x.com/kairo",
        external: true,
      },
    ],
  },
];

const footerLinkClassName =
  "inline-block rounded text-sm text-text-03 transition-colors duration-200 ease-in-out hover:text-white";

function FooterNavLink({ label, href, external }: FooterLink) {
  if (external) {
    return (
      <a
        href={href}
        className={footerLinkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={footerLinkClassName}>
      {label}
    </Link>
  );
}

function FooterNavSection({ title, links }: FooterSection) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-white">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterNavLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mt-10 transition-opacity duration-200 ease-in-out hover:opacity-80"
        >
          <Image src="/kairo-assets/kairo-logo-white.svg" alt="Kairo" width={200} height={200} />
        </Link>

        <nav
          aria-label="Footer navigation"
          className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {footerSections.map((section) => (
            <FooterNavSection key={section.title} {...section} />
          ))}
        </nav>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-text-03">
            &copy; {new Date().getFullYear()} Kairo. A product of First Frontier
            Technologies Limited RC 1906110. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
