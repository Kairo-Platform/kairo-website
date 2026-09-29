"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Reveal } from "@/app/components";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const ASSET = "/landing-page/everything-you-need";
const STOREFRONT_INTERVAL_MS = 4500;

function useFeatureCardInView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isIntersecting = false;
    const update = () => setIsInView(isIntersecting && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        update();
      },
      // Keep animations active until the entire card leaves the viewport.
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return { ref, isInView };
}

/** Keep illustration layers aligned while the card itself uses fluid layout. */
function ScaledPreview({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

function SendReceiveCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`h-max md:h-full md:min-h-116.75 overflow-hidden rounded-3xl bg-[#d9f6f2] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)] px-6 pt-10 pb-16 sm:px-12.5 sm:pt-13.75 ${isInView ? "eyn-in-view" : ""}`}
    >
      <h3 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
        Send &amp; receive money
      </h3>
      <p className="mt-1.5 max-w-86.25 text-lg leading-7 font-medium tracking-[-0.03em] text-text-04 sm:text-xl sm:leading-7.5">
        Transfer to anyone — by name, number, or account.
      </p>
      <div className="mt-14.75 flex flex-col gap-6 text-[15px] leading-6 tracking-[-0.01em] text-[#1a1a1a]">
        <div className="eyn-chat-request ml-auto w-fit max-w-full rounded-t-xl rounded-bl-xl bg-white px-3 py-2.5 shadow-[0_4px_46.6px_-20px_#2610041a]">
          Send ₦25,000 to David.
        </div>
        <div className="eyn-chat-response mr-auto max-w-74 rounded-t-xl rounded-br-xl bg-white px-4.75 py-2.75 shadow-[0_4px_46.6px_-20px_#2610041a]">
          <Icon
            icon="fluent-emoji-flat:check-mark-button"
            className="mr-1 inline-block size-3.75 align-text-bottom"
            aria-hidden
          />
          Transfer of ₦25,000 to David Johnson Olanrewaju (0430******238) GTBank
          was successful.
        </div>
      </div>
    </article>
  );
}

function PayBillsCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`flex h-max md:h-full md:min-h-154 flex-col overflow-hidden rounded-3xl bg-[#ddf5da] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)] px-6 pt-10 pb-16 sm:px-13 sm:pt-13.25 ${isInView ? "eyn-in-view" : ""}`}
    >
      <header>
        <h3 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
          Pay bills instantly
        </h3>
        <p className="mt-2 max-w-105.5 text-lg leading-7 font-medium tracking-[-0.03em] text-secondary sm:text-xl sm:leading-7.5">
          Stay on top of your payments and never miss a due date.
        </p>
      </header>
      <div className="mt-7 flex flex-1 flex-col gap-7">
        <figure className="eyn-chat-request ml-auto w-full max-w-99.5 rounded-t-xl rounded-bl-xl bg-white px-5 py-1.5 shadow-[0_4px_46.6px_-20px_#2610041a]">
          <Image
            src={`${ASSET}/bill-slip.webp`}
            alt="Ikeja Electric bill showing meter number 4728 2929 and total due of ₦15,000.00"
            width={710}
            height={370}
            className="h-auto w-full"
            sizes="(max-width: 767px) 80vw, 355px"
          />
          <figcaption className="px-2 py-1 text-lg leading-7.5 font-medium tracking-[-0.03em] text-[#1a1a1a] sm:text-xl">
            Pay my bill
          </figcaption>
        </figure>
        <div className="eyn-chat-response mr-auto max-w-84.25 rounded-t-xl rounded-br-xl bg-white px-6 py-4 text-base leading-6.5 font-medium tracking-[-0.03em] text-[#1a1a1a] shadow-[0_4px_46.6px_-20px_#2610041a] sm:-ml-3.75 sm:text-lg">
          <p>
            <span aria-hidden>🎉 </span>Your bill payment was successful.
          </p>
          <p>
            Token: <strong>4929 2847 9283 7272</strong>
          </p>
        </div>
      </div>
    </article>
  );
}

const notifications = [
  {
    name: "Adeola",
    amount: "16,000",
    layer: "back",
    className: "top-12.5 left-7 w-77 rotate-[0.75deg] blur-[0.5px]",
    surface: "h-18.25 bg-text-03",
    opacity: 0.57,
  },
  {
    name: "Ibrahim",
    amount: "30,000",
    layer: "middle",
    className: "top-6 left-3.5 w-84 -rotate-[1.86deg]",
    surface: "h-19.75 bg-[#cbcbcb]",
    opacity: 0.99,
  },
  {
    name: "Chiamaka",
    amount: "30,000",
    layer: "front",
    className: "top-0 left-0 w-91",
    surface: "h-21.25 border border-[#e6e6e6] bg-[#f4f4f4]",
    opacity: 1,
  },
] as const;

function ReceivePaymentsCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();
  const transactions = [
    { name: "Chiamaka Ike", amount: "30,000" },
    { name: "Ibrahim Musa", amount: "40,000" },
    { name: "Adeola Ore", amount: "16,000" },
  ];

  return (
    <article
      ref={ref}
      className={`flex h-max md:h-full md:min-h-116.75 flex-col overflow-hidden rounded-3xl bg-[#ffeee4] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)] ${isInView ? "eyn-in-view" : ""}`}
    >
      <header className="px-6 pt-10 sm:px-12 sm:pt-13.5">
        <h3 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
          Receive payments, track every transaction
        </h3>
        <p className="mt-2 max-w-157 text-lg leading-7 font-medium tracking-[-0.03em] text-text-04 sm:text-xl sm:leading-7.5">
          Receive payments across channels without the manual work.
          <br className="hidden xl:block" /> Monitor transactions in real time
          and keep your business moving.
        </p>
      </header>
      <div className="relative mt-8.75 flex-1 overflow-hidden">
        <div className="hidden sm:block">
          <ScaledPreview width={926} height={274}>
            <div className="absolute top-0 left-12 h-89.5 w-122 overflow-hidden rounded-[72px] border-2 border-[#848484] bg-[#1a1a1a] bg-[linear-gradient(179deg,#0003_7%,#6663_80%)]">
              <div className="absolute top-5.25 left-45.75 h-9 w-35.25 rounded-full bg-black/50" />
              <div className="absolute top-25.25 left-15 h-34.5 w-91">
                {notifications.map((notification) => (
                  <div
                    key={notification.name}
                    className={`absolute ${notification.className} rounded-2xl`}
                  >
                    <div
                      className={`eyn-notification eyn-notification-${notification.layer} ${notification.surface} flex items-center gap-5.5 overflow-hidden rounded-2xl px-4 shadow-[0_4px_46.6px_-20px_#2610041a]`}
                      style={
                        {
                          "--notification-opacity": notification.opacity,
                        } as CSSProperties
                      }
                    >
                      <Image
                        src={`${ASSET}/payment-app-icon.webp`}
                        alt=""
                        width={48}
                        height={48}
                        className="shrink-0 rounded-lg border border-[#f1f1f1]"
                      />
                      <div className="min-w-0 leading-5 tracking-[-0.015em]">
                        <p className="text-[15px] font-bold text-[#1a1a1a]">
                          Payment received
                        </p>
                        <p className="whitespace-nowrap text-xs text-text-02">
                          {notification.name} paid for Ankara set x2 NGN
                          {notification.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1.75 left-147.25 w-71">
              <p className="mb-5 text-[13px] leading-5 tracking-[-0.01em] text-black">
                Transactions
              </p>
              <div className="eyn-transactions rounded-xl border border-[#f1f1f1] bg-white p-4 shadow-[0_8px_31.1px_#26100412]">
                <table className="w-full text-left text-[11px] leading-5 tracking-[-0.01em] text-text-04">
                  <caption className="sr-only">
                    Recent successful payments
                  </caption>
                  <thead className="border-b border-[#f1f1f1] text-xs text-black">
                    <tr>
                      <th className="pb-1 font-medium">Customer</th>
                      <th className="pb-1 font-medium">Amount</th>
                      <th className="pb-1 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.name}
                        className="border-b border-[#f1f1f1] last:border-0"
                      >
                        <td className="py-2 whitespace-nowrap">
                          {transaction.name}
                        </td>
                        <td className="py-2">NGN{transaction.amount}</td>
                        <td className="py-2">
                          <span className="rounded-full border border-[#ddf5da] bg-green-light px-3 py-0.5 text-xs text-green">
                            Successful
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScaledPreview>
        </div>
        <div className="px-6 pb-8 sm:hidden">
          <div className="relative h-64 overflow-hidden rounded-t-[48px] border-2 border-[#848484] bg-[#202020]">
            <div className="mx-auto mt-5 h-6 w-24 rounded-full bg-black/50" />
            <div className="relative mx-auto mt-9 w-[88%]">
              {notifications.map((notification, index) => (
                <div
                  key={notification.name}
                  className="absolute inset-x-0"
                  style={{
                    top: (2 - index) * 20,
                    transform: `scale(${0.86 + index * 0.07})`,
                  }}
                >
                  <div
                    className={`eyn-notification eyn-notification-${notification.layer} flex items-center gap-3 rounded-2xl bg-[#f4f4f4] p-3 shadow-lg`}
                    style={
                      {
                        "--notification-opacity": notification.opacity,
                      } as CSSProperties
                    }
                  >
                    <Image
                      src={`${ASSET}/payment-app-icon.webp`}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-xs font-bold">Payment received</p>
                      <p className="text-[10px]">
                        {notification.name} paid NGN{notification.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="eyn-transactions relative -mt-5 rounded-xl bg-white p-4 shadow-lg">
            <p className="mb-2 text-sm font-medium">Transactions</p>
            <ul className="space-y-3 text-xs">
              {transactions.map((transaction) => (
                <li
                  key={transaction.name}
                  className="flex justify-between gap-2"
                >
                  <span>{transaction.name}</span>
                  <span>NGN{transaction.amount}</span>
                  <span className="text-green">Successful</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function InvoiceCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`flex h-max md:h-full md:min-h-145.75 flex-col overflow-hidden rounded-3xl bg-[#f4e9ff] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)] ${isInView ? "eyn-in-view" : ""}`}
    >
      <header className="px-6 pt-10 sm:px-11 sm:pt-14.25">
        <h3 className="max-w-100.75 text-2xl leading-[1.1]! font-medium text-[#1a1a1a] sm:text-3xl">
          Create a professional invoice in 30 seconds
        </h3>
        <p className="mt-2 max-w-100.75 text-lg leading-7 font-medium tracking-[-0.03em] text-secondary sm:text-xl sm:leading-7.5">
          Get paid faster with simple invoices that make it easy for customers
          to pay.
        </p>
      </header>
      <div className="eyn-invoice-preview mx-auto mt-9.75 w-[75.68%] max-w-97.25">
        <Image
          src={`${ASSET}/invoice-preview.webp`}
          alt="Professional invoice for Kehinde Femi Enterprise with four ebook line items and a subtotal of NGN20,000"
          width={389}
          height={353}
          className="h-auto w-full"
          sizes="(max-width: 767px) 75vw, 389px"
        />
      </div>
    </article>
  );
}

const storefrontTemplates = [
  {
    name: "Author",
    file: "templates/author-website.webp",
    width: 1440,
    height: 1059,
  },
  {
    name: "Fashion",
    file: "templates/fashion-thumb.webp",
    width: 1288,
    height: 4096,
  },
  {
    name: "Real estate",
    file: "templates/real-estate-thumb.webp",
    width: 1440,
    height: 3493,
  },
  {
    name: "Groceries",
    file: "templates/groceries-thumb.webp",
    width: 1440,
    height: 3417,
  },
  {
    name: "Confectionery",
    file: "templates/confectionary-thumb.webp",
    width: 1240,
    height: 4096,
  },
] as const;

// Figma's five depth positions, relative to the 714px illustration canvas.
const storefrontSlots = [
  { x: 0, y: 44, width: 117, height: 187, opacity: 0.79, blur: 1.5, zIndex: 1 },
  { x: 93, y: 34, width: 144, height: 219, opacity: 0.74, blur: 1, zIndex: 2 },
  { x: 209, y: 0, width: 296, height: 288, opacity: 1, blur: 0, zIndex: 3 },
  { x: 468, y: 20, width: 144, height: 219, opacity: 0.74, blur: 1, zIndex: 2 },
  {
    x: 597,
    y: 44,
    width: 117,
    height: 187,
    opacity: 0.78,
    blur: 1.5,
    zIndex: 1,
  },
] as const;

function StorefrontCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      clearInterval(timer);
      if (isInView && !media.matches) {
        timer = setInterval(
          () =>
            setActiveIndex(
              (current) => (current + 1) % storefrontTemplates.length,
            ),
          STOREFRONT_INTERVAL_MS,
        );
      }
    };
    update();
    media.addEventListener("change", update);
    return () => {
      clearInterval(timer);
      media.removeEventListener("change", update);
    };
  }, [isInView]);

  return (
    <article
      ref={ref}
      className="flex h-max md:h-full md:min-h-145.5 flex-col overflow-hidden rounded-3xl bg-[#ffebc2] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)]"
    >
      <header className="px-6 pt-10 sm:px-13 sm:pt-14.5">
        <h3 className="text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
          Storefront for your business and sub-domain
        </h3>
        <p className="mt-2 max-w-153.5 text-lg leading-7 font-medium tracking-[-0.03em] text-secondary sm:text-xl sm:leading-7.5">
          Showcase what you offer, make it easy to order, and grow your business
          online.
        </p>
      </header>
      <div
        className="mx-auto mt-13.25 w-[85%] max-w-178.5"
        role="region"
        aria-roledescription="carousel"
        aria-label="Storefront templates"
      >
        <ScaledPreview width={714} height={288}>
          {storefrontTemplates.map((template, index) => {
            const slot = storefrontSlots[(index - activeIndex + 7) % 5];
            return (
              <div
                key={template.name}
                className="absolute top-0 left-0 overflow-hidden bg-white shadow-[0_4px_14px_6px_#00000021] transition-[transform,width,height,opacity,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{
                  transform: `translate(${slot.x}px, ${slot.y}px)`,
                  width: slot.width,
                  height: slot.height,
                  opacity: slot.opacity,
                  filter: `blur(${slot.blur}px)`,
                  zIndex: slot.zIndex,
                }}
              >
                <Image
                  src={`${ASSET}/${template.file}`}
                  alt={`${template.name} storefront template`}
                  width={template.width}
                  height={template.height}
                  className="h-full w-full object-cover object-top"
                  sizes="296px"
                />
              </div>
            );
          })}
        </ScaledPreview>
      </div>
    </article>
  );
}

function PromotionsPreview() {
  const customers = ["Ademola Bankole", "Chidinma Joy", "Musa Isa"];
  const checkAnimations = [
    "eyn-anim-check-1",
    "eyn-anim-check-2",
    "eyn-anim-check-3",
  ];

  return (
    <ScaledPreview width={691} height={390}>
      <div className="absolute -top-48.75 left-25.25 h-134 w-122 overflow-hidden rounded-[72px] border-2 border-[#848484] bg-[#1a1a1a] bg-[linear-gradient(178.45deg,#0003_7%,#6663_80%)]">
        <div className="eyn-chat-request absolute top-58.5 left-51.5 w-60.75 rounded-t-xl rounded-bl-xl bg-[#005d3b] px-3 py-2.5 text-[13px] leading-4.5 tracking-[-0.01em] text-white">
          <p>Send this message to my customers</p>
          <p>Thursday Special!!!</p>
          <p>Buy 2 plates, get 1 free — today only. Order now!</p>
        </div>
        <div className="eyn-chat-response absolute top-85.75 left-6 flex items-end gap-1.5">
          <Image
            src={`${ASSET}/promo-avatar.webp`}
            alt="Kairo"
            width={34}
            height={34}
            className="rounded-full"
          />
          <p className="w-66.25 rounded-t-xl rounded-br-xl bg-text-02 px-4.75 py-2.75 text-[13px] leading-4.5 tracking-[-0.01em] text-white">
            Sure, Promotion message successfully sent to all your customers.
          </p>
        </div>
        <Image
          src={`${ASSET}/promo-toolbar.svg`}
          alt=""
          width={491}
          height={88.1182}
          className="absolute top-111.5 -left-1.25"
        />
        <Image
          src={`${ASSET}/promo-input.svg`}
          alt=""
          width={319}
          height={33}
          className="absolute top-113.75 left-15.25"
        />
        <Image
          src={`${ASSET}/promo-plus.svg`}
          alt=""
          width={16.7648}
          height={16.7675}
          className="absolute top-115.75 left-7.75"
        />
        <Image
          src={`${ASSET}/promo-camera.svg`}
          alt=""
          width={19.8293}
          height={17.1281}
          className="absolute top-[463.606px] left-[399.668px]"
        />
        <Image
          src={`${ASSET}/promo-microphone.svg`}
          alt=""
          width={14.1509}
          height={20.8241}
          className="absolute top-[462.818px] left-[434.488px]"
        />
        <Image
          src={`${ASSET}/promo-home.svg`}
          alt=""
          width={120.779}
          height={4.50739}
          className="absolute top-[514.03px] left-[184.061px]"
        />
      </div>
      <div className="absolute top-62.25 left-103.25 w-59 rounded-xl bg-white px-6 pt-4 pb-6 text-[13px] leading-5 tracking-[-0.01em] shadow-[0_4px_46.6px_#2610041a]">
        <p className="text-secondary">Customers</p>
        <ul className="mt-2 space-y-2">
          {customers.map((name, index) => (
            <li key={name} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-1 text-[#1a1a1a]">
                <Image
                  src={`${ASSET}/promo-user.svg`}
                  alt=""
                  width={16}
                  height={16}
                />
                {name}
              </span>
              <Image
                src={`${ASSET}/promo-check.svg`}
                alt="Delivered"
                width={13.5}
                height={8}
                className={checkAnimations[index]}
              />
            </li>
          ))}
        </ul>
      </div>
    </ScaledPreview>
  );
}

function PromotionsCard() {
  const { ref, isInView } = useFeatureCardInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`flex h-max md:h-full md:min-h-154 flex-col overflow-hidden rounded-3xl bg-[#c9dcf5] bg-[linear-gradient(180deg,#fffcfa5c,#fff3ec5c)] ${isInView ? "eyn-in-view" : ""}`}
    >
      <PromotionsPreview />
      <header className="px-6 pt-8 pb-13.5 sm:px-13.75">
        <h3 className="max-w-132.25 text-2xl font-medium text-[#1a1a1a] sm:text-3xl">
          Send promotions to your customer list in one message
        </h3>
        <p className="mt-2 max-w-132.25 text-lg leading-7 font-medium tracking-[-0.03em] text-secondary sm:text-xl sm:leading-7.5">
          Reach more customers with targeted promotions, all sent at once from
          your customer list.
        </p>
      </header>
    </article>
  );
}

export function EverythingYouNeedSection() {
  return (
    <section
      className="bg-[#fffcfa] pt-20 pb-24 lg:pt-27 lg:pb-40"
      aria-labelledby="everything-you-need-heading"
    >
      <div className="container mx-auto px-4">
        <Reveal className="mb-12 lg:mb-22.25">
          <p className="mb-3.25 text-lg leading-7 font-medium tracking-[-0.03em] text-orange max-md:text-center">
            No app, No stress
          </p>
          <h2
            id="everything-you-need-heading"
            className="max-w-212.5 text-3xl  max-md:text-center text-pretty leading-tight! font-medium tracking-[-0.02em]! text-[#1a1a1a] sm:text-4xl lg:text-5xl lg:leading-15!"
          >
            Everything you need, all in one place.
          </h2>
        </Reveal>
        <div className="eyn-features space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[432fr_926fr]">
            <Reveal animation="bottom" className="min-w-0">
              <SendReceiveCard />
            </Reveal>
            <Reveal animation="bottom" className="min-w-0">
              <ReceivePaymentsCard />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[842fr_514fr]">
            <Reveal animation="bottom" className="min-w-0">
              <StorefrontCard />
            </Reveal>
            <Reveal animation="bottom" className="min-w-0">
              <InvoiceCard />
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[666fr_691fr]">
            <Reveal animation="bottom" className="min-w-0">
              <PayBillsCard />
            </Reveal>
            <Reveal animation="bottom" className="min-w-0">
              <PromotionsCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EverythingYouNeedSection;
