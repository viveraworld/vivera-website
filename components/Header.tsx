"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>

      {/* =====================================================
          LOGO
          ===================================================== */}

      <div className={styles.headerLogo}>
        <Image
          src="/images/brand/vivera-logo.png"
          alt="VÍVERA"
          width={260}
          height={76}
          priority
          className={styles.headerLogoImage}
        />
      </div>


      {/* =====================================================
          MAIN NAVIGATION
          ===================================================== */}

      <nav
        className={`${styles.headerNav} ${
          menuOpen ? styles.headerNavOpen : ""
        }`}
      >
        <a
          href="#community"
          className={styles.headerNavLink}
          onClick={() => setMenuOpen(false)}
        >
          СООБЩЕСТВО
        </a>

        <a
          href="#partnership"
          className={styles.headerNavLink}
          onClick={() => setMenuOpen(false)}
        >
          ПАРТНЁРСТВО
        </a>

        <a
          href="#contacts"
          className={styles.headerNavLink}
          onClick={() => setMenuOpen(false)}
        >
          КОНТАКТЫ
        </a>
      </nav>


      {/* =====================================================
          JOIN BUTTON
          ===================================================== */}

      <a
        href="https://t.me/Gtime120_bot"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.headerJoin}
      >
        Присоединиться к VÍVERA
      </a>


      {/* =====================================================
          HAMBURGER
          ===================================================== */}

      <button
        className={styles.headerMenu}
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}