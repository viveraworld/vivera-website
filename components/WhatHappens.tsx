import Image from "next/image";

export default function WhatHappens() {
  return (
    <section className="what-happens">
      <div className="what-happens-inner">
        <h2 className="what-happens-title">Что происходит в VÍVERA</h2>

        <div className="what-happens-grid">
          <article className="what-happens-card">
            <Image
              src="/images/icons/explore.png"
              alt=""
              width={1254}
              height={1254}
              sizes="96px"
              className="what-happens-icon"
            />

            <h3>Исследуем</h3>
            <p>
              Мы читаем исследования, разбираем доказательства и учимся
              отличать науку от маркетинга.
            </p>
          </article>

          <article className="what-happens-card">
            <Image
              src="/images/icons/live.png"
              alt=""
              width={1254}
              height={1254}
              sizes="96px"
              className="what-happens-icon"
            />

            <h3>Проживаем</h3>
            <p>
              Мы не откладываем жизнь «после похудения», «после менопаузы»
              или «после пенсии».
              <br />
              Мы строим её сейчас.
            </p>
          </article>

          <article className="what-happens-card">
            <Image
              src="/images/icons/discover.png"
              alt=""
              width={1254}
              height={1254}
              sizes="96px"
              className="what-happens-icon"
            />

            <h3>Открываем</h3>
            <p>
              Новые страны, новые книги
              <br />
              Новые технологии, новые способы думать
              <br />
              Новые грани себя.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
