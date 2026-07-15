import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href?: string;
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
      { label: "Kairo Recon" },
      { label: "Kairo Fraud" },
      { label: "Kairo Flow" },
      { label: "Kairo Support" },
      { label: "Kairo Insights" },
      { label: "Kairo Connect" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Role-based permissions" },
      { label: "Approval workflows" },
      { label: "Escalation routing" },
      { label: "Audit logs" },
      { label: "Activity tracking" },
      { label: "Multi-team collaboration" },
      { label: "Controlled communication approvals" },
    ],
  },
  {
    title: "Kairo connect",
    links: [
      { label: "Core banking applications" },
      { label: "Switches" },
      { label: "Payment gateways" },
      { label: "ERP systems" },
      { label: "Settlement providers" },
      { label: "Emails" },
      { label: "Slack" },
      { label: "Webhooks" },
      { label: "Internal operational systems" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-use" },
    ],
  },
  {
    title: "Contact with us",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/usekairoai/",
        external: true,
      },
      {
        label: "X",
        href: "https://x.com/usekairoai",
        external: true,
      },
    ],
  },
];

const footerItemClassName = "inline-block text-sm text-text-03";

const footerLinkClassName =
  `${footerItemClassName} rounded transition-colors duration-200 ease-in-out hover:text-white`;

function FooterNavLink({ label, href, external }: FooterLink) {
  if (!href) {
    return <span className={footerItemClassName}>{label}</span>;
  }

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
          <li key={link.label}>
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
