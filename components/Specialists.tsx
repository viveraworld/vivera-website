import styles from "./Specialists.module.css";

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

function SideLine({
  side,
  id,
}: {
  side: "left" | "right";
  id: string;
}) {
  return (
    <div
      className={`${styles.sideLine} ${
        side === "left"
          ? styles.sideLineLeft
          : styles.sideLineRight
      }`}
      aria-hidden="true"
    >
      <span className={styles.sideLineFill} />

      <MetallicSphere
        id={id}
        className={styles.sideLineSphere}
      />
    </div>
  );
}

export default function Specialists() {
  return (
    <section
      className={styles.section}
      id="specialists"
    >
      <div className={styles.inner}>

        {/* =====================================================
            ЗАГОЛОВОК
            ===================================================== */}

        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            ДЛЯ СПЕЦИАЛИСТОВ
          </h2>

          <div
            className={styles.titleLine}
            aria-hidden="true"
          >
            <span className={styles.titleLineFill} />

            <MetallicSphere
              id="specialists-title"
            />
          </div>
        </div>


        {/* =====================================================
            CONTENT
            ===================================================== */}

        <div className={styles.content}>

          {/* ===================================================
              CENTRAL LEAD
              =================================================== */}

          <div className={styles.lead}>
            <p>
              VÍVERA — независимая просветительская инициатива
              в области науки о долголетии (Longevity Science),
              объединяющая специалистов различных направлений
              и популяризирующая современные научные знания о
              здоровом старении
            </p>
          </div>


          {/* ===================================================
              TWO COLUMNS
              =================================================== */}

          <div className={styles.columns}>

            <div className={styles.column}>
              <SideLine
                side="left"
                id="specialists-left"
              />

              <p>
                Мы создаем пространство для открытого разговора
                между врачами, исследователями, экспертами и женщинами,
                которые хотят понимать, а не просто выполнять рекомендации
              </p>
            </div>


            <div className={styles.column}>
              <SideLine
                side="right"
                id="specialists-right"
              />

              <p>
                Мы открыты к сотрудничеству с медицинскими центрами,
                университетами, научными организациями и специалистами
              </p>
            </div>

          </div>


          {/* ===================================================
              BUTTON
              =================================================== */}

          <div className={styles.buttonWrap}>

            <a
              href="https://t.me/abichurina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span>
                Стать партнером
              </span>

              <span
                className={styles.buttonArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}