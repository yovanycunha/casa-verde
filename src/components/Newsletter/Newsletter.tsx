import style from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={style.container}>
      <div className={style.headerWrapper}>
        <h1>
          Sua casa com as
          <strong>melhores plantas</strong>
        </h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </div>
      <div className={style.backgroundsWrapper}>
        <div className={style.vector} />
        <div className={style.plant} />
      </div>
    </section>
  );
}
