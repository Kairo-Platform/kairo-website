"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Reveal } from "@/app/components";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { businessMailto } from "@/app/constants/contact";

const ASSET = "/landing-page/everything-you-need";

function CheckMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG icon
    <img
      src={`${ASSET}/check-mark.svg`}
      alt=""
      width={16}
      height={16}
      className={`inline-block size-4 shrink-0 ${className}`}
      aria-hidden
    />
  );
}

function ChatBubble({
  align,
  children,
  className = "",
  animationClass = "",
}: {
  align: "left" | "right";
  children: ReactNode;
  className?: string;
  animationClass?: string;
}) {
  return (
    <div
      className={[
        "eyn-bubble relative max-w-[min(100%,24rem)] rounded-2xl bg-white px-4 py-3 text-[15px] leading-snug tracking-tight text-[#1a1a1a] shadow-[0_4px_24px_rgba(38,16,4,0.08)] sm:text-base sm:leading-[1.4]",
        align === "right" ? "eyn-bubble--right ml-auto" : "eyn-bubble--left mr-auto",
        animationClass,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function useFeatureCardInView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function FeatureCard({
  title,
  subtitle,
  children,
  className = "",
  stageClassName = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  stageClassName?: string;
}) {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`flex h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-gray-02 ${isInView ? "eyn-in-view" : ""} ${className}`}
    >
      <header className="relative z-10 shrink-0 px-6 pt-8 sm:px-10 sm:pt-12">
        <h3 className="text-balance text-2xl font-medium tracking-tight text-black sm:text-[1.875rem] sm:leading-tight">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-1.5 text-pretty text-lg font-medium leading-snug tracking-tight text-secondary sm:text-2xl sm:leading-8">
            {subtitle}
          </p>
        ) : null}
      </header>
      <div
        className={`relative mt-6 flex min-h-64 flex-1 flex-col justify-end overflow-hidden px-4 pb-6 sm:mt-8 sm:min-h-72 sm:px-8 sm:pb-8 ${stageClassName}`}
      >
        {children}
      </div>
    </article>
  );
}

function SendReceiveCard() {
  return (
    <FeatureCard
      title="Send & receive money"
      subtitle="Transfer to anyone — by name, number, or account."
      className="lg:min-h-[37rem]"
      stageClassName="gap-4"
    >
      <ChatBubble align="right" animationClass="eyn-anim-send-request">
        Send ₦25,000 to David.
      </ChatBubble>

      <ChatBubble align="left" animationClass="eyn-anim-send-success" className="max-w-[min(100%,26rem)]">
        <p>
          <CheckMark className="mr-1.5 translate-y-0.5" />
          Transfer of <strong>₦25,000</strong> to{" "}
          <strong>David Johnson Olanrewaju</strong> (
          <span className="underline decoration-from-font">0430******238</span>){" "}
          <strong>GTBank</strong> was successful.
        </p>
      </ChatBubble>

      <div className="pointer-events-none relative mx-auto mt-2 w-full max-w-xs sm:max-w-sm" aria-hidden>
        <Image
          src={`${ASSET}/send-phone-top.webp`}
          alt=""
          width={954}
          height={280}
          className="h-auto w-full object-contain object-bottom"
          sizes="(max-width: 768px) 80vw, 320px"
        />
      </div>
      <span className="sr-only">
        Phone preview showing the Kairo chat conversation header.
      </span>
    </FeatureCard>
  );
}

function PayBillsCard() {
  return (
    <FeatureCard
      title="Pay bills instantly"
      subtitle="Take a photo of any account slip or invoice."
      className="lg:min-h-[37rem]"
      stageClassName="gap-4"
    >
      <ChatBubble align="right" animationClass="eyn-anim-bill-request" className="w-full max-w-md p-3 sm:p-4">
        <figure className="space-y-3">
          <Image
            src={`${ASSET}/bill-slip.webp`}
            alt="Ikeja Electric bill showing meter number 4728 2929 and total due of ₦15,000.00"
            width={710}
            height={370}
            className="h-auto w-full rounded-xl object-cover"
            sizes="(max-width: 768px) 85vw, 360px"
          />
          <figcaption className="px-1 text-[15px] sm:text-base">Pay my bill</figcaption>
        </figure>
      </ChatBubble>

      <ChatBubble align="left" animationClass="eyn-anim-bill-success">
        <p>
          <span aria-hidden>🎉 </span>
          Your bill payment was successful.
        </p>
        <p className="mt-0.5">
          Token: <strong>4929 2847 9283 7272</strong>
        </p>
      </ChatBubble>
    </FeatureCard>
  );
}

function ReceivePaymentsCard() {
  return (
    <FeatureCard
      title={
        <>
          Receive payments, pay
          <br className="hidden sm:block" /> suppliers,
        </>
      }
      subtitle="track every transaction."
      className="lg:min-h-[32rem]"
      stageClassName="justify-center gap-5 sm:justify-end"
    >
      <ChatBubble align="left" animationClass="eyn-anim-receive-pulse" className="z-10">
        <p>
          <CheckMark className="mr-1.5 translate-y-0.5" />
          <strong>₦180,000</strong> received from Blessing
        </p>
      </ChatBubble>

      <div
        className="eyn-anim-tx-shake relative z-0 ml-auto w-full max-w-xs rounded-xl bg-white px-6 py-4 shadow-[0_4px_50px_-27px_rgba(38,16,4,0.12)] sm:max-w-[21rem]"
        role="img"
        aria-label="Transactions list showing three successful transfers"
      >
        <p className="text-[15px] font-medium tracking-tight text-[#0a0a0a]">
          Transactions
        </p>
        <ul className="mt-3 space-y-3">
          {[0, 1, 2].map((i) => (
            <li key={i} className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- local SVG icon */}
              <img
                src={`${ASSET}/switch-icon.svg`}
                alt=""
                width={20}
                height={20}
                className="size-5 shrink-0"
                aria-hidden
              />
              <span className="h-[18px] w-28 rounded-sm bg-[#f1f1f1]" aria-hidden />
              <span className="ml-auto rounded-full border border-[#ddf5da] bg-green-light px-3 py-0.5 text-[13px] font-medium tracking-tight text-green">
                Successful
              </span>
            </li>
          ))}
        </ul>
      </div>
    </FeatureCard>
  );
}

function InvoiceCard() {
  const rows = [
    { item: "Spices ebook", qty: "1", unit: "5000", total: "5000" },
    { item: "Health guide ebook", qty: "1", unit: "5000", total: "5000" },
    { item: "Health guide ebook", qty: "1", unit: "5000", total: "5000" },
    { item: "Health guide ebook", qty: "1", unit: "5000", total: "5000" },
  ] as const;

  return (
    <FeatureCard
      title="Create a professional invoice in 30 seconds"
      subtitle="and get paid."
      className="lg:min-h-[32rem]"
      stageClassName="items-center justify-center"
    >
      <div className="relative w-full max-w-[22rem]">
        <div className="overflow-hidden rounded-lg bg-white shadow-[0_4px_50px_-27px_rgba(38,16,4,0.12)]">
          <div className="flex items-start justify-between px-5 pt-5">
            <Icon icon="mdi:star" className="size-5 text-black" aria-hidden />
            <p className="text-sm font-bold tracking-wide text-black">INVOICE</p>
          </div>
          <div className="mt-6 space-y-1 px-5 text-[11px] leading-relaxed text-black sm:text-xs">
            <p className="font-bold">Billed to</p>
            <p>Kehinde Femi Enterprise</p>
            <p className="break-all">kehindefemienterprise@gmail.com</p>
            <p>Anywhere, Phase 3 junction, Lagos</p>
          </div>
          <div className="mt-5 overflow-x-auto px-3 pb-6 sm:px-5">
            <table className="w-full min-w-[16rem] border-collapse text-left text-[9px] text-black sm:text-[10px]">
              <caption className="sr-only">
                Sample invoice line items totaling 20,000 Naira
              </caption>
              <thead>
                <tr className="border-b border-black">
                  <th scope="col" className="py-1.5 font-medium">
                    Item
                  </th>
                  <th scope="col" className="border-l border-black px-1.5 py-1.5 font-medium">
                    Quantity
                  </th>
                  <th scope="col" className="border-l border-black px-1.5 py-1.5 font-medium">
                    Unit price (NGN)
                  </th>
                  <th scope="col" className="border-l border-black px-1.5 py-1.5 font-medium">
                    Total (NGN)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-black/40">
                    <td className="py-1.5">{row.item}</td>
                    <td className="border-l border-black/40 px-1.5 py-1.5">{row.qty}</td>
                    <td className="border-l border-black/40 px-1.5 py-1.5">{row.unit}</td>
                    <td className="border-l border-black/40 px-1.5 py-1.5">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="eyn-anim-paid-toast eyn-bubble eyn-bubble--left absolute -right-1 top-[42%] z-10 flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 shadow-[0_4px_24px_rgba(38,16,4,0.1)] sm:-right-4"
          role="status"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green">
            <Icon
              icon="eva:checkmark-outline"
              className="size-5 text-white"
              aria-hidden
            />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="text-[15px] font-bold tracking-tight text-black">Paid 20k</p>
            <p className="truncate text-[13px] tracking-tight text-black/80">
              Adeola Emmanuel
            </p>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
}

function StorefrontCard() {
  return (
    <FeatureCard
      title={
        <>
          Storefront for your
          <br /> business
        </>
      }
      subtitle="and sub-domain"
      className="lg:min-h-[32rem]"
      stageClassName="items-center justify-center px-2"
    >
      <div
        className="relative mx-auto w-full max-w-lg"
        style={{ aspectRatio: "623 / 300" }}
        role="img"
        aria-label="Stacked storefront previews: fashion and grocery sites blurred behind a sharp Skyline Real Estate site"
      >
        {/* Left — Fashion (blurred, behind) */}
        <div
          aria-hidden
          className="absolute top-[12%] left-[7.7%] z-0 h-[73%] w-[23.1%] overflow-hidden bg-white opacity-70 shadow-[0_4px_12px_6px_rgba(0,0,0,0.07)] blur-[1.75px]"
        >
          <Image
            src={`${ASSET}/storefront-fashion.webp`}
            alt=""
            width={204}
            height={438}
            className="h-full w-full scale-110 object-cover object-left-top"
            sizes="120px"
          />
        </div>

        {/* Right — Groceries (blurred, behind) */}
        <div
          aria-hidden
          className="absolute top-[8%] right-[9%] z-0 h-[73%] w-[23.1%] overflow-hidden bg-white opacity-70 shadow-[0_4px_12px_6px_rgba(0,0,0,0.07)] blur-[1.75px]"
        >
          <Image
            src={`${ASSET}/storefront-groceries.webp`}
            alt=""
            width={206}
            height={438}
            className="h-full w-full scale-110 object-cover object-right-top"
            sizes="120px"
          />
        </div>

        {/* Center — Real estate (sharp, on top) */}
        <div className="absolute top-0 left-[24%] z-10 h-full w-[50.4%] overflow-hidden bg-white shadow-[0_4px_14px_6px_rgba(0,0,0,0.13)]">
          <Image
            src={`${ASSET}/storefront-real-estate.webp`}
            alt="Skyline Real Estate storefront with hero listing and featured properties"
            width={628}
            height={586}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 50vw, 280px"
          />
        </div>
      </div>
    </FeatureCard>
  );
}

function PromotionsCard() {
  const customers = [
    { name: "Ademola Bankole", delay: "eyn-anim-check-1" },
    { name: "Chidinma Joy", delay: "eyn-anim-check-2" },
    { name: "Musa Isa", delay: "eyn-anim-check-3" },
  ] as const;

  return (
    <FeatureCard
      title="Send promotions to your customer list in one message"
      className="lg:min-h-[32rem]"
      stageClassName="gap-5 justify-center"
    >
      <ChatBubble
        align="right"
        animationClass="eyn-anim-promo-drop"
        className="max-w-[min(100%,24rem)]"
      >
        <p>Send this message to my customers</p>
        <p className="mt-1 font-bold">Thursday Special!!!</p>
        <p className="font-bold">
          Buy 2 plates, get 1 free — today only. Order now!
        </p>
      </ChatBubble>

      <div className="w-full max-w-sm rounded-xl bg-white px-6 py-4 shadow-[0_4px_50px_-27px_rgba(38,16,4,0.12)]">
        <p className="text-[13px] font-medium tracking-tight text-secondary">
          Customers
        </p>
        <ul className="mt-3 space-y-3">
          {customers.map((customer) => (
            <li
              key={customer.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="flex min-w-0 items-center gap-1">
                <Icon
                  icon="mingcute:user-4-fill"
                  className="size-4 shrink-0 text-secondary"
                  aria-hidden
                />
                <span className="truncate text-[15px] font-medium tracking-tight text-black">
                  {customer.name}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="h-[18px] w-20 rounded-sm bg-[#f1f1f1] sm:w-28" aria-hidden />
                <Icon
                  icon="mdi:check"
                  className={`size-3.5 text-green ${customer.delay}`}
                  aria-label="Selected"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </FeatureCard>
  );
}

export function EverythingYouNeedSection() {
  return (
    <section className="section-padding" aria-labelledby="everything-you-need-heading">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
          <h2
            id="everything-you-need-heading"
            className="max-w-xl text-balance text-3xl font-medium leading-snug sm:text-4xl md:max-w-2xl lg:max-w-4xl lg:text-5xl"
          >
            Everything you need, all in one place.
          </h2>
          <a
            href={businessMailto("Start on WhatsApp with Kairo Personal")}
            className="cta-button shrink-0"
          >
            <Icon icon="ic:baseline-whatsapp" aria-hidden="true" />
            Start on WhatsApp
          </a>
        </Reveal>

        <div className="eyn-features grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          <Reveal animation="bottom" className="min-w-0 lg:col-span-6">
            <SendReceiveCard />
          </Reveal>
          <Reveal animation="bottom" className="min-w-0 lg:col-span-6">
            <PayBillsCard />
          </Reveal>
          <Reveal animation="bottom" className="min-w-0 lg:col-span-7">
            <ReceivePaymentsCard />
          </Reveal>
          <Reveal animation="bottom" className="min-w-0 lg:col-span-5">
            <InvoiceCard />
          </Reveal>
          <Reveal animation="bottom" className="min-w-0 lg:col-span-6">
            <StorefrontCard />
          </Reveal>
          <Reveal animation="bottom" className="min-w-0 lg:col-span-6">
            <PromotionsCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default EverythingYouNeedSection;
