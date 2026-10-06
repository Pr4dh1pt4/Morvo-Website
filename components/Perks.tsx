/* eslint-disable @next/next/no-img-element */
import styles from './Perks.module.css';

const perks = [
  { icon: 'icon-recycling.png', width: 71, height: 66, value: '100%', label: 'Bahan Daur Ulang' },
  { icon: 'icon-diameter.png', width: 85, height: 70, value: '±0.02mm', label: 'Toleransi Diameter' },
  { icon: 'icon-carbon.png', width: 76, height: 74, value: '-40%', label: 'Jejak Karbon vs Filamen Baru' },
  { icon: 'icon-discount.png', width: 76, height: 67, value: 'Terjangkau', label: 'Harga Bersaing Pasar Lokal' },
];

export default function Perks() {
  return (
    <section className={styles.perks} aria-labelledby="perks-title">
      <div className={styles.inner}>
        <h2 id="perks-title" className={styles.title}>
          Kenapa Pilih Morvo?
        </h2>
        <ul className={styles.list}>
          {perks.map((perk) => (
            <li key={perk.label} className={styles.card}>
              <img
                src={`/images/${perk.icon}`}
                alt=""
                width={perk.width}
                height={perk.height}
                className={styles.icon}
              />
              <p className={styles.value}>{perk.value}</p>
              <p className={styles.label}>{perk.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
