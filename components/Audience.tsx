import styles from "./Audience.module.css";


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

        {/* =================================================
            MANIFESTO METALLIC GOLD GRADIENT
            ================================================= */}

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


        {/* =================================================
            MANIFESTO SPHERE SHADOW
            ================================================= */}

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


      {/* =================================================
          METALLIC SPHERE
          ================================================= */}

      <g filter={`url(#${id}-shadow)`}>

        <circle
          cx="6"
          cy="6"
          r="4.5"
          fill={`url(#${id}-gradient)`}
          stroke="#FFF0C0"
          strokeWidth="0.45"
        />


        {/* HARD SPECULAR HIGHLIGHT */}

        <circle
          cx="4.7"
          cy="4.7"
          r="0.95"
          fill="#FFFFFF"
          opacity="0.98"
        />


        {/* WARM REFLECTED LIGHT */}

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


export default function Audience() {
  return (
    <section
      className={styles.section}
      id="audience"
    >

      {/* =====================================================
          CONTENT CARD
          ===================================================== */}

      <div className={styles.card}>

        <div className={styles.content}>


          {/* =================================================
              TITLE
              ================================================= */}

          <h2 className={styles.kicker}>
            Для кого VÍVERA
          </h2>


          {/* =================================================
              GOLD LINE UNDER TITLE
              MANIFESTO METALLIC LINE + CENTERED SPHERE
              ================================================= */}

          <div className={styles.goldLine}>

            <span className={styles.goldLineFill} />

            <MetallicSphere
              id="audience-heading"
              className={styles.headingSphere}
            />

          </div>


          {/* =================================================
              TEXT
              ================================================= */}

          <div className={styles.text}>

            <p className={styles.intro}>
              Для женщин <span>40+</span>, которые однажды поняли:
            </p>

            <p className={styles.mainText}>
              впереди еще очень долгая жизнь
            </p>

            <p className={styles.mainText}>
              и хочется прожить ее{" "}
              <span>ярко и здоро́во</span>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}