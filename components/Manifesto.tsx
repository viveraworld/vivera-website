/* =========================================================
   VÍVERA — MANIFESTO
   ========================================================= */

import styles from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={styles.manifesto}>

      {/* =====================================================
          DECORATIVE GRID
          ===================================================== */}

      <div
        className={styles.decor}
        aria-hidden="true"
      >

        {/* -----------------------------------------------
            SINGLE VERTICAL METALLIC LINE
            ----------------------------------------------- */}

        <div className={styles.verticalLine} />


        {/* -----------------------------------------------
            LEFT HORIZONTAL METALLIC LINE
            ----------------------------------------------- */}

        <div className={styles.leftLine} />


        {/* -----------------------------------------------
            RIGHT HORIZONTAL METALLIC LINE
            ----------------------------------------------- */}

        <div className={styles.rightLine} />


        {/* -----------------------------------------------
            UPPER GOLD SPHERE
            Between:
            "Не ради идеального здоровья"
            "Не ради вечной молодости"
            ----------------------------------------------- */}

        <svg
          className={`${styles.sphere} ${styles.sphereUpper}`}
          viewBox="0 0 12 12"
          preserveAspectRatio="xMidYMid meet"
        >

          <defs>

            <radialGradient
              id="manifestoUpperSphere"
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
              id="manifestoUpperShadow"
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

          <g filter="url(#manifestoUpperShadow)">

            <circle
              cx="6"
              cy="6"
              r="4.5"
              fill="url(#manifestoUpperSphere)"
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


        {/* -----------------------------------------------
            LOWER GOLD SPHERE
            Intersection of vertical + left horizontal
            ----------------------------------------------- */}

        <svg
          className={`${styles.sphere} ${styles.sphereLower}`}
          viewBox="0 0 12 12"
          preserveAspectRatio="xMidYMid meet"
        >

          <defs>

            <radialGradient
              id="manifestoLowerSphere"
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
              id="manifestoLowerShadow"
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

          <g filter="url(#manifestoLowerShadow)">

            <circle
              cx="6"
              cy="6"
              r="4.5"
              fill="url(#manifestoLowerSphere)"
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


      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className={styles.content}>

        {/* ===================================================
            LEFT TITLE
            =================================================== */}

        <div className={styles.leftTitle}>

          <span>Когда наука</span>

          <span>становится</span>

          <span>образом жизни</span>

        </div>


        {/* ===================================================
            RIGHT TOP
            =================================================== */}

        <div className={styles.rightTop}>

          <p>
            Не ради идеального здоровья
          </p>

          <p>
            Не ради вечной молодости
          </p>

        </div>


        {/* ===================================================
            RIGHT BOTTOM
            =================================================== */}

        <div className={styles.rightBottom}>

          <p>
            Ради будущего,<br />
            которое с каждым годом<br />
            всё ярче и интереснее
          </p>

        </div>

      </div>

    </section>
  );
}