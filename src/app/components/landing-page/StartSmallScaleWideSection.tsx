import { TeamCardsGrid } from "../TeamCardsGrid";

const teams = [
  {
    title: "Reconciliation teams",
    description:
      "Automate matching of transactions across banks, ledgers, and payment rails to reduce manual errors and close books faster.",
    image: "/teams-assets/team-1.webp",
    href: "/reconciliation-teams",
  },
  {
    title: "Operations",
    description:
      "Streamline day-to-day workflows like transaction monitoring, exception handling, and process routing across systems.",
    image: "/teams-assets/team-2.webp",
    href: "/operations-teams",
  },
  {
    title: "Executive monitoring",
    description:
      "Provide high-level dashboards with system health, financial flow insights, and operational performance metrics.",
    image: "/teams-assets/team-6.webp",
    href: "/executive-monitoring-teams",
  },
  {
    title: "Fraud",
    description:
      "Detect suspicious behavior, correlate cross-channel signals, and trigger alerts for potential fraudulent activity.",
    image: "/teams-assets/team-4.webp",
    href: "/fraud-teams",
  },
  {
    title: "Support",
    description:
      "Give customer support teams unified transaction context to resolve issues faster and with fewer escalations.",
    image: "/teams-assets/team-8.webp",
    href: "/support-teams",
  },
  {
    title: "Risk",
    description:
      "Surface exposure patterns, flag anomalies early, and support decision-making with real-time risk visibility.",
    image: "/teams-assets/team-3.webp",
    href: "/risk-teams",
  },
];

export const StartSmallScaleWideSection = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <div className="mx-auto text-center lg:mb-10">
          <h2 className="text-4xl font-medium leading-14 lg:text-5xl">
            Start Small. <span className="text-accent">Scale Institution-Wide.</span>
          </h2>
        </div>

        <TeamCardsGrid items={teams} />
      </div>
    </section>
  );
};

export default StartSmallScaleWideSection;
