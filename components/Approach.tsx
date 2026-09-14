"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Approach.module.css";

type Direction = {
  title: string;
  icon: string;
};

const directions: Direction[] = [
  {
    title: "Долголетие и\nгеронтология",
    icon: "longevity.png",
  },
  {
    title: "Превентивная и\nэкстренная медицина",
    icon: "medicine.png",
  },
  {
    title: "Эндокринология и\nменопауза",
    icon: "hormones.png",
  },
  {
    title: "Нейронауки и\nкогнитивное здоровье",
    icon: "neuroscience.png",
  },
  {
    title: "Сон и профилактика\nнейродегенераций",
    icon: "sleep.png",
  },
  {
    title: "Питание и\nмикробиом",
    icon: "nutrition.png",
  },
  {
    title: "Биомеханика\nдвижений",
    icon: "movement.png",
  },
  {
    title: "Психология поведения\nи эмоции",
    icon: "psychology.png",
  },
  {
    title: "Биомаркеры\nи диагностика",
    icon: "biomarkers.png",
  },
  {
    title: "Современные технологии\nи технологии будущего",
    icon: "technology.png",
  },
  {
    title: "Искусственный\nинтеллект",
    icon: "ai.png",
  },
  {
    title: "Красота\nи отношения",
    icon: "beauty.png",
  },
  {
    title: "Путешествия\nи культура",
    icon: "travel.png",
  },
  {
    title: "Философия\nи искусство",
    icon: "philosophy.png",
  },
  {
    title: "Деньги\nи безопасность",
    icon: "money.png",
  },
];


/* =========================================================
   MANIFESTO-IDENTICAL METALLIC SPHERE
   ========================================================= */

function MetallicSphere({
  className = "",
  id,
}: {
  className?: string;
  id: string;
}) {
  return (
    <svg
      className={`${styles.sphere} ${className}`}
      viewBox="0 0 12 12"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >

      <defs>

        <radialGradient
          id={`${id}-gradient`}
          cx="28%"
          cy="22%"
          r="78%"
        >
          <stop
            offset="0%"
            stopColor="#FFFFFF"
          />

          <stop
            offset="8%"
            stopColor="#FFF8DC"
          />

          <stop
            offset="18%"
            stopColor="#F5D98A"
          />

          <stop
            offset="34%"
            stopColor="#D6A54F"
          />

          <stop
            offset="50%"
            stopColor="#A86F25"
          />

          <stop
            offset="66%"
            stopColor="#613D14"
          />

          <stop
            offset="80%"
            stopColor="#D19A42"
          />

          <stop
            offset="100%"
            stopColor="#3D250D"
          />
        </radialGradient>


        <filter
          id={`${id}-shadow`}
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


      <g filter={`url(#${id}-shadow)`}>

        <circle
          cx="6"
          cy="6"
          r="4.5"
          fill={`url(#${id}-gradient)`}
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
  );
}


export default function Approach() {

  const trackRef =
    useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);


  const updateActiveIndex = () => {

    const track = trackRef.current;

    if (!track) return;

    const maxScroll =
      track.scrollWidth -
      track.clientWidth;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress =
      track.scrollLeft / maxScroll;

    setActiveIndex(
      Math.round(
        progress *
        (directions.length - 1)
      )
    );
  };


  const scrollCards = (
    direction: "prev" | "next"
  ) => {

    const track = trackRef.current;

    if (!track) return;

    const card =
      track.querySelector<HTMLElement>(
        `.${styles.card}`
      );

    if (!card) return;

    const gap = 16;

    const amount =
      card.offsetWidth + gap;

    track.scrollBy({
      left:
        direction === "next"
          ? amount
          : -amount,

      behavior: "smooth",
    });
  };


  return (
    <section className={styles.approach}>


      {/* =================================================
          HEADER
          ================================================= */}

      <header className={styles.intro}>

        <div className={styles.eyebrowviv}>
          VÍVERA
        </div>


        <div className={styles.headingGroup}>

          <h2 className={styles.eyebrow}>
            НАШ ПОДХОД
          </h2>


          <div className={styles.headingRule}>

            <span
              className={
                styles.headingRuleLine
              }
            />

            <MetallicSphere
              id="approach-heading"
              className={
                styles.headingSphere
              }
            />

          </div>

        </div>


        <p className={styles.lead}>
          Мы изучаем современные достижения:
        </p>

      </header>


      {/* =================================================
          CAROUSEL
          ================================================= */}

      <div className={styles.cardsOuter}>

        <div
          ref={trackRef}
          className={styles.cardsTrack}
          onScroll={updateActiveIndex}
        >

          {directions.map(
            (direction) => {

              const lines =
                direction.title.split("\n");

              return (
                <article
                  className={styles.card}
                  key={direction.title}
                >

                  <div
                    className={styles.icon}
                  >

                    <Image
                      src={`/images/approach/${direction.icon}`}
                      alt=""
                      width={1254}
                      height={1254}
                      sizes="132px"
                      className={
                        styles.iconImage
                      }
                      aria-hidden="true"
                      draggable={false}
                    />

                  </div>


                  <h3
                    className={
                      styles.cardTitle
                    }
                  >

                    <span>
                      {lines[0]}
                    </span>

                    <span>
                      {lines[1]}
                    </span>

                  </h3>

                </article>
              );
            }
          )}

        </div>


        {/* =================================================
            NAVIGATION
            ================================================= */}

        <div
          className={
            styles.carouselControl
          }
        >

          <button
            type="button"
            className={styles.arrow}
            onClick={() =>
              scrollCards("prev")
            }
            aria-label="Предыдущие направления"
          >
            ←
          </button>


          <div
            className={
              styles.progressLine
            }
          >

            {directions.map(
              (direction, index) => (
                <span
                  key={direction.title}
                  className={
                    index === activeIndex
                      ? styles.progressActive
                      : styles.progressItem
                  }
                />
              )
            )}

          </div>


          <button
            type="button"
            className={styles.arrow}
            onClick={() =>
              scrollCards("next")
            }
            aria-label="Следующие направления"
          >
            →
          </button>

        </div>

      </div>


      {/* =================================================
          SUBTITLE
          ================================================= */}

      <div
        className={styles.subtitle}
      >

        <span>—</span>

        <p>
          ведь жизнь не делится
          на отдельные дисциплины
        </p>

      </div>


      {/* =================================================
          FINAL STATEMENT
          ================================================= */}

      <div
        className={styles.statement}
      >

        <div
          className={
            styles.statementLine
          }
        >

          <span
            className={
              styles.statementLineFill
            }
          />

          <MetallicSphere
            id="approach-statement"
            className={
              styles.statementSphere
            }

          />

        </div>


        <p>
          И переводим исследования
          в систему{" "}
          <strong>
            ПРОСТЫХ БЫТОВЫХ ПРИВЫЧЕК
          </strong>
        </p>

      </div>


      {/* =====================================================
          BOTTOM BRAND LINE
          ===================================================== */}

      <div className={styles.footer}>

        <div className={styles.footerText}>
          VÍVERA
        </div>

        <div className={styles.footerLine} />

        <div className={styles.footerText}>
          IDSWN
        </div>

      </div>


    </section>
  );
}
