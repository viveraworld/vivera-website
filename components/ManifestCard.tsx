"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ManifestCard.module.css";

export default function ManifestCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.manifestSection}>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className={styles.container}>

        <div className={styles.documentArea}>

          {/* =================================================
              DOCUMENT
              ================================================= */}

          <div
            className={`${styles.document} ${
              open
                ? styles.documentOpen
                : styles.documentClosed
            }`}
          >

            <Image
              src="/manifesto/manifesto.png"
              width={1055}
              height={1491}
              sizes="(max-width: 900px) calc(100vw - 80px), 760px"
              alt="Манифест VÍVERA"
              className={styles.manifestImage}
            />

            {!open && (
              <div
                className={styles.fade}
                aria-hidden="true"
              />
            )}

          </div>


          {/* =================================================
              BUTTON
              ================================================= */}

          <button
            type="button"
            className={styles.button}
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-expanded={open}
          >

            <span>
              {open
                ? "СВЕРНУТЬ МАНИФЕСТ"
                : "ЧИТАТЬ ПОЛНОСТЬЮ"}
            </span>

            <span
              className={styles.arrow}
              aria-hidden="true"
            >
              {open ? "↑" : "→"}
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}
