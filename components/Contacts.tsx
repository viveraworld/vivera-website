"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !consent) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          consent: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Subscription failed");
      }

      setEmail("");
      setConsent(false);

      if (data?.alreadySubscribed) {
        setStatus("already");
      } else {
        setStatus("success");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  }

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.inner}>

        {/* =====================================================
            NEWSLETTER
            ===================================================== */}

        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            Следить за новостями VÍVERA
          </h2>

          <div
            className={styles.titleLine}
            aria-hidden="true"
          >
            <span className={styles.titleLineFill} />

            <svg
              className={styles.sphere}
              viewBox="0 0 12 12"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <radialGradient
                  id="contacts-title-gradient"
                  cx="28%"
                  cy="22%"
                  r="78%"
                >
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="8%" stopColor="#FFF8DC" />
                  <stop offset="18%" stopColor="#F5D98A" />
                  <stop offset="34%" stopColor="#D6A54F" />
                  <stop offset="50%" stopColor="#A86F25" />
                  <stop offset="66%" stopColor="#613D14" />
                  <stop offset="80%" stopColor="#D19A42" />
                  <stop offset="100%" stopColor="#3D250D" />
                </radialGradient>

                <filter
                  id="contacts-title-shadow"
                  x="-150%"
                  y="-150%"
                  width="400%"
                  height="400%"
                >
                  <feDropShadow
                    dx="0"
                    dy="1"
                    stdDeviation="1.2"
                    floodColor="#4D3010"
                    floodOpacity="0.45"
                  />
                </filter>
              </defs>

              <g filter="url(#contacts-title-shadow)">
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  fill="url(#contacts-title-gradient)"
                  stroke="#FFF0C0"
                  strokeWidth="0.45"
                />

                <circle
                  cx="4.7"
                  cy="4.7"
                  r="0.95"
                  fill="#FFFFFF"
                  opacity="0.98"
                />

                <ellipse
                  cx="5.5"
                  cy="8.9"
                  rx="1.6"
                  ry="0.6"
                  fill="#F7D88D"
                  opacity="0.52"
                />
              </g>
            </svg>
          </div>
        </div>

        <p className={styles.text}>
          Мы расскажем всё, что нового мы узнали
        </p>

        {/* =====================================================
            FORM
            ===================================================== */}

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="vivera-email"
            className={styles.label}
          >
            Введите ваш e-mail
          </label>

          <div className={styles.field}>
            <input
              id="vivera-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              aria-describedby="vivera-consent vivera-email-status"
            />

            <button
              type="submit"
              disabled={status === "loading" || !consent}
            >
              {status === "loading"
                ? "..."
                : "Подписаться ↗"}
            </button>
          </div>

          {/* ===================================================
              CONSENT
              =================================================== */}

          <label className={styles.consent}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) =>
                setConsent(event.target.checked)
              }
            />

            <span id="vivera-consent">
              Я даю VÍVERA{" "}
              <a
                href="/consent-newsletter"
                target="_blank"
                rel="noopener noreferrer"
              >
                согласие
              </a>{" "}
              получать информационные и рекламные рассылки.
            </span>
          </label>

          {/* ===================================================
              STATUS
              =================================================== */}

          <p
            id="vivera-email-status"
            className={`${styles.status} ${
              status === "success"
                ? styles.success
                : status === "already"
                  ? styles.already
                  : status === "error"
                    ? styles.error
                    : ""
            }`}
            aria-live="polite"
          >
            {status === "success" &&
              "Готово. Будем присылать вам новости VÍVERA."}

            {status === "already" &&
              "Этот e-mail уже подписан на новости VÍVERA."}

            {status === "error" &&
              "Не удалось сохранить e-mail. Попробуйте ещё раз."}
          </p>
        </form>

        {/* =====================================================
            FOOTER
            ===================================================== */}

        <footer className={styles.footer}>
          <div className={styles.footerTop}>

            {/* =================================================
                LOGO
                ================================================= */}

            <div className={styles.brand}>
              <Image
                src="/images/brand/vivera-logo.png"
                alt="VÍVERA"
                width={180}
                height={52}
                className={styles.logo}
              />
            </div>

            {/* =================================================
                SOCIALS
                ================================================= */}

            <div className={styles.socials}>

              {/* TELEGRAM */}

              <a
                href="https://t.me/Gtime120_bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VÍVERA в Telegram"
                className={styles.social}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.4 3.2 18.2 20c-.24 1.19-.88 1.48-1.78.92l-4.9-3.61-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.99 9.08-8.2c.4-.35-.09-.55-.62-.2L5.76 13.6.95 12.09c-1.05-.33-1.07-1.05.22-1.55L19.96 3.1c.88-.33 1.66.2 1.44.1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/vivera.world"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VÍVERA в Instagram"
                className={styles.social}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <circle
                    cx="17.5"
                    cy="6.7"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* ===================================================
              COPYRIGHT
              =================================================== */}

          <div className={styles.copyright}>
            © {new Date().getFullYear()} сайт создан командой VÍVERA
          </div>
        </footer>

      </div>
    </section>
  );
}