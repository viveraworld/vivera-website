import Image from "next/image";
import styles from "./Partnerships.module.css";

const cards = [
  {
    title: "для КЛИНИК",
    image: "/images/partnerships/clinics.png",
  },
  {
    title: "для БРЕНДОВ",
    image: "/images/partnerships/brands.png",
  },
  {
    title: "для ИССЛЕДОВАТЕЛЕЙ",
    image: "/images/partnerships/research.png",
  },
  {
    title: "для СМИ",
    image: "/images/partnerships/media.png",
  },
];

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

export default function Partnerships() {
  return (
    <section
      className={styles.section}
      id="partnership"
    >
      <div className={styles.inner}>

        {/* =====================================================
            ЗАГОЛОВОК
            ===================================================== */}

        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            СОТРУДНИЧЕСТВО
          </h2>

          <div
            className={styles.titleLine}
            aria-hidden="true"
          >
            <span className={styles.titleLineFill} />

            <MetallicSphere
              id="partnerships-title"
            />
          </div>
        </div>


        {/* =====================================================
            КАРТОЧКИ
            ===================================================== */}

        <div className={styles.grid}>

          {cards.map((card) => (
            <article
              className={styles.card}
              key={card.title}
            >

              {/* IMAGE */}

              <div className={styles.imageWrap}>
                <Image
                  src={card.image}
                  width={1254}
                  height={1254}
                  sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) calc(50vw - 52px), 260px"
                  alt={card.title}
                  className={styles.image}
                />
              </div>


              {/* TITLE */}

              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>


              {/* BUTTON */}

              <a
                href="https://t.me/abichurina"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>
                  Связаться
                </span>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
