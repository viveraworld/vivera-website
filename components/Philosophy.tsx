"use client";

import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.philosophy}>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className={styles.container}>

        {/* ================= LEFT ================= */}

        <div className={styles.content}>

          <h2 className={styles.title}>
            VÍVERA{" "}
            <span className={styles.titleAccent}>
              —
            </span>{" "}
            это пространство,
            <br />

            где наука встречается
            <br />

            с настоящей жизнью
          </h2>


          {/* ================= BODY ================= */}

          <div className={styles.body}>

            <p>
              Мы изучаем современные знания о здоровом долголетии
              <br />
              и превращаем их не в список запретов, а в привычки, идеи,
              <br />
              разговоры, путешествия, отношения, ритуалы и решения, которые
              <br />
              делают повседневную жизнь ярче
            </p>

          </div>


          {/* ================= PHILOSOPHY STATEMENT ================= */}

          <div className={styles.statement}>

            <div className={styles.statementLine}>
              <span className={styles.statementSphere} />
            </div>

            <div className={styles.statementText}>

              <p>
                Мы не учим
              </p>

              <p>
                Мы создаем{" "}
                <span>среду,</span>
              </p>

              <p>
                в которой интересно жить
              </p>

            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}

        <div className={styles.imageWrap}>

          <Image
            src="/images/philosophy/philosophy.png"
            fill
            sizes="(max-width: 760px) 82vw, 50vw"
            alt=""
            className={styles.image}
          />

          <div
            className={styles.imageGlow}
            aria-hidden="true"
          />

        </div>

      </div>

    </section>
  );
}
