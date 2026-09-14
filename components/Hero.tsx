import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* =====================================================
          WATERMARK
          ===================================================== */}

      <div
        className={styles.watermark}
        aria-hidden="true"
      />


      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className={styles.content}>

        {/* =================================================
            MAIN LOGO
            ================================================= */}

        <div className={styles.brand}>
          <Image
            src="/images/brand/vivera-logo.png"
            alt="VÍVERA"
            width={650}
            height={190}
            priority
            className={styles.logo}
          />
        </div>


        {/* =================================================
            TITLE + GOLD LINE
            ================================================= */}

        <div className={styles.titleGroup}>

          <h1 className={styles.title}>
            НОВАЯ КУЛЬТУРА ВЗРОСЛОЙ ЖИЗНИ
          </h1>


          {/* -----------------------------------------------
              GOLD HORIZONTAL LINE + CENTER SPHERE
              ----------------------------------------------- */}

          <div
            className={styles.line}
            aria-hidden="true"
          >

            <span className={styles.lineFill} />

            <svg
              className={styles.lineSphere}
              viewBox="0 0 12 12"
              aria-hidden="true"
            >

              <defs>

                <radialGradient
                  id="heroTitleSphere"
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
                  id="heroTitleSphereShadow"
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


              <g filter="url(#heroTitleSphereShadow)">

                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  fill="url(#heroTitleSphere)"
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


        {/* =================================================
            SUBTITLE
            ================================================= */}

        <p className={styles.subtitle}>
          <span>ИНТЕЛЛЕКТУАЛЬНЫЙ LIFESTYLE</span>
          <span>СОВРЕМЕННОЙ ЖЕНЩИНЫ</span>
        </p>


        {/* =================================================
            DESCRIPTION
            ================================================= */}

        <div className={styles.description}>

          {/* -----------------------------------------------
              METALLIC VERTICAL THREAD
              ----------------------------------------------- */}

          <div
            className={styles.descriptionThread}
            aria-hidden="true"
          />


          {/* -----------------------------------------------
              METALLIC GOLD SPHERE ON VERTICAL THREAD
              ----------------------------------------------- */}

          <svg
            className={styles.descriptionSphere}
            viewBox="0 0 12 12"
            aria-hidden="true"
          >

            <defs>

              <radialGradient
                id="heroDescriptionSphere"
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
                id="heroDescriptionSphereShadow"
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


            <g filter="url(#heroDescriptionSphereShadow)">

              <circle
                cx="6"
                cy="6"
                r="4.5"
                fill="url(#heroDescriptionSphere)"
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
              DESCRIPTION TEXT
              ----------------------------------------------- */}

          <span>
            МЫ ДЕЛАЕМ НОВЫЕ ЗНАНИЯ
          </span>

          <span>
            О ЗДОРОВОМ ДОЛГОЛЕТИИ
          </span>

          <span>
            ПОНЯТНЫМИ И ПРИМЕНИМЫМИ
          </span>

        </div>


        {/* =================================================
            AUDIENCE
            ================================================= */}

        <div className={styles.audience}>
          ДЛЯ ЖЕНЩИН 40+∞
        </div>

      </div>

    </section>
  );
}