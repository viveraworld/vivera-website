import styles from "./Mission.module.css";

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
        <radialGradient id={`${id}-gradient`} cx="28%" cy="22%" r="78%">
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

function SemanticRule({ id }: { id: string }) {
  return (
    <div className={styles.semanticRule} aria-hidden="true">
      <span className={styles.semanticRuleLine} />

      <MetallicSphere
        id={id}
        className={styles.semanticRuleSphere}
      />
    </div>
  );
}

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <div
          className={styles.verticalLine}
          aria-hidden="true"
        />

        <div className={styles.leftColumn}>
          <div className={styles.missionHeading}>
            <h2>МИССИЯ VÍVERA</h2>

            <div className={styles.headingLine}>
              <span className={styles.headingLineFill} />

              <MetallicSphere
                id="mission-heading"
                className={styles.headingSphere}
              />
            </div>
          </div>

          <div className={styles.leftStatement}>
            <p className={styles.statementBlack}>
              Мы — не первое поколение,
              <br />
              которое может жить долго.
            </p>

            <p className={styles.statementGold}>
              Но мы — первые,
              <br />
              кому досталась эпоха, в которой
              <br />
              можно прожить качественно.
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <section className={styles.ageBlock}>
            <h2>
              Возраст — больше не диагноз. И уже не оправдание.
            </h2>

            <p>
              Женщина после сорока может успешно создавать бизнес,
              после пятидесяти — получать очередное образование,
              в шестьдесят — начать заниматься спортом,
              в семьдесят — завязать новые отношения, в восемьдесят —
              активно путешествовать и осваивать технологии,
              а в девяносто — планировать десятилетия яркой и активной жизни.
            </p>
          </section>

          <SemanticRule id="mission-rule-age-energy" />

          <section className={styles.energyBlock}>
            <h2>
              VÍVERA не про молодость.
              <br />
              VÍVERA про энергию.
            </h2>

            <p>
              Не про то, как жить без морщин и «после менопаузы».
              <br />
              А про то, как быть живой —
              <span className={styles.goldInline}>
                телом, умом, вкусом и смелостью.
              </span>
            </p>
          </section>

          <SemanticRule id="mission-rule-energy-system" />

          <section className={styles.systemBlock}>
            <p>
              Здесь мы собрали то, что обычно живёт порознь:
              медицину, технологии, психологию, движение,
              эстетику, философию, повседневные привычки —
              и сделали из этого единую Систему.
            </p>

            <h2>
              VÍVERA — это среда, где мы вместе создаем
              <br />
              <span>НОВУЮ КУЛЬТУРУ ВЗРОСЛОЙ ЖИЗНИ.</span>
            </h2>
          </section>

          <section className={styles.cultureBlock}>
            <p>
              Культуру, в которой современная наука о долголетии
              становится не сложной теорией,
              <br />
              а естественной частью каждого дня.
            </p>

            <p>
              Где здоровье дает свободу.
              <br />
              Красота рождается из заботы о себе.
              <br />
              Любопытство остается главным двигателем развития.
              <br />
              А возраст перестает определять возможности.
            </p>
          </section>

          <section className={styles.womenBlock}>
            <p className={styles.emphasis}>
              В VÍVERA женщины не ждут разрешения.
              <br />
              В VÍVERA женщины задают неудобные вопросы.
              <br />
              В VÍVERA женщины создают свои правила.
            </p>
          </section>

          <SemanticRule id="mission-rule-women-ending" />

          <section className={styles.ending}>
            <p className={styles.french}>IDSWN</p>
            <p className={styles.russian}>Почему бы и нет?!)</p>
          </section>
        </div>
      </div>

      <p className={styles.missionExplanation}>
        IDSWN (I don&apos;t see why not) - главный девиз VÍVERA. Так отвечала  журналистам про свой возраст Жанна Кальман (Jeanne Calment ) -  официально подтвержденная рекордсменка мира по продолжительности жизни  (122 года и 164 дня)
      </p>
    </section>
  );
}