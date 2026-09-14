"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Founder.module.css";

type Diploma = {
  title: string;
  file: string;
};

const diplomas: Diploma[] = [
  {
    title:
      "Первый Московский государственный медицинский университет им. И.М.Сеченова (Сеченовский Университет) — специальность: Антиэйджинг – теоретические и практические подходы к диагностике и профилактике старения",
    file: "/documents/diploma-sechenov.jpg",
  },
  {
    title:
      "American College of Lifestyle Medicine (ACLM) — курс: Lifestyle Medicine & Food as Medicine Essentials",
    file: "/documents/diploma-aclm.jpg",
  },
  {
    title:
      "ОЧУ ДПО «Институт междисциплинарной медицины» — программа: Нейробиомедицина",
    file: "/documents/diploma-neurobiomedicine.jpg",
  },
  {
    title:
      "UEMS–EACCME® (European Accreditation Council for Continuing Medical Education) — курс: Detection, Prevention and Treatment of Gut Microbiome Dysbiosis",
    file: "/documents/diploma-uems.jpg",
  },
  {
    title:
      "Биомеханика: методы работы с телом для коррекции соматического и психического здоровья 2.0 — модуль: Субботин Ф.А",
    file: "/documents/diploma-biomechanics.jpg",
  },
  {
    title:
      "Стресс-менеджмент: технология обучения навыкам саморегуляции 2.0 — модуль: Бочавер К.А",
    file: "/documents/diploma-stress-management.jpg",
  },
  {
    title:
      "Хрономедицина: резервные возможности повышения эффективности методов превентивной медицины 2.0 — модуль: Воробьева Ю.Д",
    file: "/documents/diploma-chronomedicine.jpg",
  },
  {
    title:
      "Брейнфитнес: технологии улучшения работы мозга 2.0 — модуль: Бочавер К.А",
    file: "/documents/diploma-brainfitness.jpg",
  },
  {
    title:
      "Universidad Nacional Autónoma de México (UNAM) — курс: Nutrición y obesidad: control de sobrepeso",
    file: "/documents/diploma-unam.jpg",
  },
  {
    title:
      "Stanford University School of Medicine — курс: Introduction to Food and Health",
    file: "/documents/diploma-stanford.jpg",
  },
  {
    title:
      "Imperial College London — курс: Health Coaching Conversations",
    file: "/documents/diploma-imperial.jpg",
  },
  {
    title:
      "Emory University School of Medicine — курс: Weight Management: Beyond Balancing Calories",
    file: "/documents/diploma-emory.jpg",
  },
  {
    title:
      "ФГБУН ФИЦ питания и биотехнологии — программа: Законы науки о питании",
    file: "/documents/diploma-nutrition.jpg",
  },
  {
    title:
      "Школа иммунологии проф. Е.Чуриной — курс: Иммунология 2.0 и Аллергология",
    file: "/documents/diploma-immunology.jpg",
  },
  {
    title:
      "UNIC: Университет нейропсихологии и интегрального коучинга — программа: Нейрокоучинг: технологии консультирования и сопровождения клиента",
    file: "/documents/diploma-neurocoaching.jpg",
  },
  {
    title:
      "Университет нейропсихологии и интегрального коучинга — программа: Нейрокоучинг: технологии консультирования и сопровождения клиента",
    file: "/documents/diploma-neuromarketing.jpg",
  },
  {
    title:
      "Московский государственный университет сервиса — специальность: гражданское право",
    file: "/documents/diploma-law.jpg",
  },
  {
    title:
      "Томский политехнический университет — специальность: экономика и управление на предприятии",
    file: "/documents/diploma-econonic.jpg",
  },
];


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


export default function Founder() {
  const [documentsOpen, setDocumentsOpen] = useState(false);

  const [selectedDocument, setSelectedDocument] =
    useState<Diploma | null>(null);

  return (
    <>
      <section
        className={styles.section}
        id="founder"
      >

        <div className={styles.container}>

          {/* =================================================
              PHOTO
              ================================================= */}

          <div className={styles.photoSide}>

            <div className={styles.photoWrap}>

              <Image
                src="/images/brand/me.png"
                width={1023}
                height={1537}
                sizes="(max-width: 720px) 100vw, 450px"
                alt="Основатель VÍVERA — Алеся Бичурина"
                className={styles.photo}
                draggable={false}
              />

            </div>

          </div>


          {/* =================================================
              CONTENT
              ================================================= */}

          <div className={styles.content}>

            {/* =================================================
                TITLE
                ================================================= */}

            <div className={styles.titleBlock}>

              <h2 className={styles.label}>
                ОСНОВАТЕЛЬ VÍVERA
              </h2>


              <div
                className={styles.titleLine}
                aria-hidden="true"
              >

                <span className={styles.titleLineFill} />

                <MetallicSphere
                  id="founder-title"
                  className={styles.titleSphere}
                />

              </div>

            </div>


            {/* =================================================
                NAME
                ================================================= */}

            <h3 className={styles.name}>
              Алеся Бичурина
            </h3>


            <div className={styles.transcription}>
              (Aleysa Bichurina)
            </div>


            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p className={styles.description}>
              Исследователь, куратор,
              <br />
              популяризатор современных подходов
              <br />
              к здоровому долголетию
            </p>


            {/* =================================================
                EDUCATION
                ================================================= */}

            <div className={styles.education}>

              <div
                className={styles.educationDecor}
                aria-hidden="true"
              >

                <span className={styles.educationLine} />

                <MetallicSphere
                  id="founder-education"
                  className={styles.educationSphere}
                />

              </div>


              <div className={styles.educationContent}>

                <div className={styles.educationLabel}>
                  Образование и профессиональное развитие
                </div>


                <button
                  type="button"
                  className={styles.documentsButton}
                  onClick={() =>
                    setDocumentsOpen(
                      (current) => !current
                    )
                  }
                  aria-expanded={documentsOpen}
                  aria-controls="founder-documents"
                >

                  <span>
                    {documentsOpen
                      ? "Скрыть документы"
                      : "Смотреть документы"}
                  </span>

                  <span
                    className={`${styles.buttonArrow} ${
                      documentsOpen
                        ? styles.buttonArrowOpen
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>

                </button>

              </div>

            </div>


            {/* =================================================
                DOCUMENT LIST
                ================================================= */}

            {documentsOpen && (

              <div
                className={styles.documents}
                id="founder-documents"
              >

                {diplomas.map((diploma) => (

                  <button
                    type="button"
                    key={diploma.file}
                    className={styles.document}
                    onClick={() =>
                      setSelectedDocument(diploma)
                    }
                  >

                    <span
                      className={styles.documentTitle}
                    >
                      {diploma.title}
                    </span>

                    <span
                      className={styles.documentArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </button>

                ))}

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          DOCUMENT VIEWER
          ========================================================= */}

      {selectedDocument && (

        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedDocument.title}
          onClick={() =>
            setSelectedDocument(null)
          }
        >

          <div
            className={styles.modalInner}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className={styles.modalClose}
              onClick={() =>
                setSelectedDocument(null)
              }
              aria-label="Закрыть"
            >
              ×
            </button>


            <div className={styles.modalTitle}>
              {selectedDocument.title}
            </div>


            <div className={styles.modalImageWrap}>

              <Image
                src={selectedDocument.file}
                width={1754}
                height={1241}
                unoptimized
                alt={selectedDocument.title}
                className={styles.modalImage}
                draggable={false}
                onContextMenu={(event) =>
                  event.preventDefault()
                }
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
}
