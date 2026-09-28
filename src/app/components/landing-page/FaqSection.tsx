"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Reveal } from "@/app/components";

const faqs = [
  {
    question: "What is Kairo?",
    answer:
      "Kairo is your everyday money and business assistant. You can use it to manage personal finances, send money, pay bills, and handle everyday transactions. For your business, Kairo helps you manage products, orders, invoices, customers, payments, and business insights—all from one place.",
  },
  {
    question: "Can I use Kairo for both personal and business needs?",
    answer:
      "Yes. Kairo brings your personal and business needs together, so you don't need separate tools to manage your money and your business.",
  },
  {
    question: "Do I need a separate account for my business?",
    answer:
      "No. Your Kairo account can support both your personal and business needs. You can activate your business tools when you're ready.",
  },
  {
    question: "Is business setup free?",
    answer:
      "Yes. Setting up your business on Kairo is free. Access to business tools is based on a minimum credit purchase.",
  },
  {
    question: "What are Kairo credits?",
    answer:
      "Credits give you access to Kairo's business tools and are used as you use those tools. You only pay for what you use rather than paying a fixed subscription for features you may not need.",
  },
  {
    question: "Do I have to pay a monthly subscription?",
    answer:
      "No. Kairo's business model is designed around usage, so you can use credits as you need different business tools rather than paying a fixed monthly fee.",
  },
  {
    question: "Do I need to be a registered business to use Kairo?",
    answer:
      "You can use Kairo for your personal financial needs without setting up a business. Business requirements may vary depending on the business features you want to activate.",
  },
  {
    question: "Is my money safe with Kairo?",
    answer:
      "Kairo is designed with security, governance, and operational controls in mind. Your financial activities are handled through the systems and financial infrastructure that power Kairo.",
  },
];

export function FaqSection() {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="relative isolate overflow-clip bg-[#fffcfa] py-20 lg:pb-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-33.5 left-0 -z-10 h-310.25 w-[max(100%,1862px)] bg-[url('/landing-page/hero/grid.webp')] bg-cover bg-center bg-no-repeat opacity-8 mix-blend-multiply"
      />
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[405fr_830fr] lg:gap-16 xl:gap-24">
        <Reveal animation="left" className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-5.75 text-lg leading-7 font-medium tracking-[-0.03em] text-orange max-md:text-center">
            FAQs
          </p>
          <h2
            id={`${id}-heading`}
            className=" text-3xl max-md:text-center leading-tight! font-medium tracking-[-0.02em] text-[#1a1a1a] sm:text-4xl lg:text-5xl lg:leading-15!"
          >
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal animation="bottom" className="min-w-0 space-y-4 lg:pt-2.25">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${id}-question-${index}`;
            const panelId = `${id}-answer-${index}`;
            return (
              <div
                key={question}
                className="rounded-3xl border border-[#f1f1f1] bg-white px-5 transition-shadow duration-300 hover:shadow-sm sm:px-9 motion-reduce:transition-none"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl pt-6 text-left text-lg leading-7 font-semibold tracking-[-0.02em] text-[#1a1a1a] outline-offset-4 focus-visible:outline-2 focus-visible:outline-orange sm:pt-7.5 sm:text-[26px] sm:leading-10 ${isOpen ? "pb-4" : "pb-6 sm:pb-7.5"}`}
                  >
                    <span>{question}</span>
                    <span
                      className="relative size-7.5 shrink-0"
                      aria-hidden="true"
                    >
                      <Image
                        src="/landing-page/faq/plus.svg"
                        alt=""
                        width={30}
                        height={30}
                        className={`absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none ${isOpen ? "rotate-45 opacity-0" : "opacity-100"}`}
                      />
                      <Image
                        src="/landing-page/faq/close.svg"
                        alt=""
                        width={30}
                        height={30}
                        className={`absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none ${isOpen ? "opacity-100" : "-rotate-45 opacity-0"}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-7.5 text-base leading-7 font-medium tracking-[-0.03em] text-secondary sm:text-xl sm:leading-8.25">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default FaqSection;
