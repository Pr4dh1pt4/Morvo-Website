/* eslint-disable @next/next/no-img-element */
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  return (
    <section id="tentang" className={`section ${styles.wrap}`} aria-labelledby="tentang-title">
      <div className={`section__inner ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.label}>MASALAH</p>
          <h2 id="tentang-title" className={styles.title}>
            Sampah Plastik Menumpuk, Filamen 3D Printing Masih Impor
          </h2>
          <p className={styles.label}>SOLUSI</p>
          <p className={styles.body}>
            Morvo mengolah botol plastik bekas melalui proses pencacahan dan ekstrusi menjadi
            filamen siap pakai.
          </p>
        </div>

        <figure className={styles.figure}>
          <img
            src="/images/masalah-solusi.png"
            alt="Botol plastik bekas tergeletak di antara sampah"
            width={480}
            height={300}
            loading="lazy"
            className={styles.image}
          />
          <figcaption className={styles.caption}>[Diagram Alur Proses]</figcaption>
        </figure>
      </div>
    </section>
  );
}
