import styles from './Impact.module.css';

const stats = [
  { value: '1000+', label: 'Botol Plastik Didaur Ulang' },
  { value: '300 kg', label: 'Plastik Terselamatkan' },
  { value: '10', label: 'Produk Filamen Terjual' },
  { value: '10', label: 'Mitra Kolaborasi' },
];

export default function Impact() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="dampak-title">
      <div className={`section__inner ${styles.inner}`}>
        <h2 id="dampak-title" className={`section-title ${styles.title}`}>
          Dampak yang Sudah Dibuat
        </h2>
        <dl className={styles.list}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
