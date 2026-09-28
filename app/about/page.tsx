import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.about}>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/brand/vivera-logo.png"
            alt="VÍVERA"
            width={260}
            height={76}
            priority
            className={styles.logoImage}
          />
        </Link>

        <Link href="/" className={styles.home}>
          На главную
        </Link>
      </header>


      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.heroContent}>

            <h1 className={styles.title}>
              Жить больше.
              <br />
              Жить ярче.
              <br />
              Жить дольше.
              <br />
              Жить качественнее.
            </h1>

            <div className={styles.goldLine}>
              <span className={styles.sphere} />
            </div>

            <p className={styles.body}>
              VÍVERA — закрытое сообщество для женщин 40+∞, которые хотят
              понимать, что происходит с их телом, мозгом, внешностью и
              образом жизни — и использовать современные знания не для
              борьбы с возрастом, а для того, чтобы дольше оставаться
              яркими, активными, самостоятельными, полными жизни.
            </p>

          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/images/about/me.png"
              fill
              sizes="(max-width: 760px) 82vw, 42vw"
              alt=""
              className={styles.image}
              priority
            />
            <div className={styles.imageGlow} />
          </div>

        </div>
      </section>


      <section className={styles.life}>

        <div className={styles.lifeImage}>
          <Image
            src="/images/about/home.png"
            fill
            sizes="(max-width: 760px) 100vw, 30vw"
            alt=""
            className={styles.image}
          />
        </div>

        <div className={styles.lifeText}>

          <h2 className={styles.subtitle}>
            Мы изучаем взрослую жизнь
          </h2>

          <p className={styles.smallBody}>
            Возраст в паспорте — не сценарий, который нужно просто принять.
            Это период больших изменений, когда особенно важно понимать свой
            организм и осознанно управлять тем, что действительно зависит от
            нас.
          </p>

          <p className={styles.smallBody}>
            В VÍVERA мы разбираемся в современных исследованиях и практиках,
            обсуждаем их между собой, пробуем то, что имеет смысл пробовать,
            наблюдаем за результатами и постепенно собираем собственную
            систему жизни.
          </p>

        </div>


        <div className={styles.topics}>

          <h2 className={styles.subtitle}>
            О чём VÍVERA
          </h2>

          <div className={styles.topicGrid}>

            <div>
              <p>Сон и восстановление.</p>
              <p>Гормональные изменения.</p>
              <p>Мышцы, суставы и движение.</p>
              <p>Мозг и когнитивное здоровье.</p>
              <p>Питание и метаболизм.</p>
              <p>Кожа, волосы и внешность.</p>
              <p>Эмоциональное состояние и нервная система.</p>
            </div>

            <div>
              <p>Отношения, сексуальность и социальная жизнь.</p>
              <p>Профилактика возрастных заболеваний.</p>
              <p>Долголетие и качество жизни.</p>
              <p>Технологии и искусственный интеллект.</p>
              <p>Путешествия и культура.</p>
              <p>Философия и искусство.</p>
              <p>Деньги и безопасность.</p>
            </div>

          </div>
        </div>

      </section>


      <section className={styles.not}>

        <div className={styles.notContent}>

          <div className={styles.eyebrow}>
            VÍVERA — ЭТО НЕ
          </div>

          <div className={styles.notGrid}>
            <p>Не медицинская клиника.</p>
            <p>Не марафон «стань моложе».</p>
            <p>Не культ вечной молодости.</p>
            <p>Не набор универсальных рецептов.</p>
          </div>

          <div className={styles.statementLine} />

          <p className={styles.notLead}>
            Это пространство для взрослых женщин, которые хотят лучше понимать
            себя и принимать более осознанные решения о собственной жизни.
          </p>

        </div>

      </section>


      <section className={styles.final}>

        <div className={styles.finalContent}>

          <div className={styles.finalSlogan}>

            <p>
              Жизнь с возрастом
              <br />
              не становится меньше.
            </p>

            <p className={styles.accent}>
              Она становится другой.
            </p>

            <p>
              Мы не начинаем сначала.
              <br />
              Мы начинаем с того, что уже знаем,
              <br />
              умеем и любим — и идём дальше.
            </p>

            <p className={styles.accentSmall}>
              Возраст меняется.
              <br />
              Возможностей становится больше.
            </p>

          </div>

          <div className={`${styles.statementLine} ${styles.finalLine}`}>
            <span className={styles.sphere} />
          </div>

        </div>

        <div className={styles.finalImage}>
          <Image
            src="/images/about/travel.png"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
            alt=""
            className={styles.image}
          />
        </div>

      </section>


      <footer className={styles.footer}>
        <Image
          src="/images/brand/vivera-logo.png"
          alt="VÍVERA"
          width={220}
          height={64}
          className={styles.footerLogo}
        />
        <span>vivera.live</span>
      </footer>

    </main>
  );
}