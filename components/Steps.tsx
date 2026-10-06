import styles from './Steps.module.css';

const steps = [
  { title: 'Kumpulkan', desc: 'Botol plastik bekas dikumpulkan dari mitra dan komunitas' },
  { title: 'Cacah & Bersihkan', desc: 'Dicacah jadi serpihan dan dibersihkan dari kontaminan' },
  { title: 'Ekstrusi', desc: 'Diproses jadi filamen dengan diameter presisi 1.75mm' },
  { title: 'Siap Pakai', desc: 'Dikemas dan siap dikirim ke pelanggan' },
];

export default function Steps() {
  return (
    <section className={styles.steps} aria-labelledby="steps-title">
      <h2 id="steps-title" className={styles['visually-hidden']}>
        Proses Pembuatan Filamen
      </h2>
      <ol className={styles.list}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={`circle ${styles.number}`} aria-hidden="true">
              {index + 1}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
