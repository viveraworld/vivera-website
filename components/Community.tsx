import styles from "./Community.module.css";

export default function Community() {
  return (
    <section id="community" className={styles.community}>
      <div className={styles.plate}>
        <div className={styles.inner}>
          <p className={styles.message}>
            <span>ЗАКРЫТОЕ СООБЩЕСТВО СОВРЕМЕННЫХ ЖЕНЩИН,</span>
            <span className={styles.messageSecondary}>
              ГДЕ ДОЛГОЛЕТИЕ ПЕРЕСТАЕТ БЫТЬ МЕДИЦИНСКИМ ПРОЕКТОМ
            </span>
            <span className={styles.messageSecondary}>
              И СТАНОВИТСЯ СПОСОБОМ ЖИТЬ
            </span>
          </p>

          <a
            href="https://t.me/viverastart_bot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <span>
              Присоединиться <br /> к VÍVERA
            </span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
