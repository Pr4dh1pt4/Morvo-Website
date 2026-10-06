import styles from './Products.module.css';

const products = [
  { name: 'Morvo rPET Natural', spec: 'Diameter 1.75mm · Suhu 220-250°C' },
  { name: 'Morvo rPET Color', spec: 'Diameter 1.75mm · Suhu 220-250°C' },
  { name: 'Morvo rPLA Blend', spec: 'Diameter 1.75mm · Suhu 190-210°C' },
];

export default function Products() {
  return (
    <section id="produk" className={`section ${styles.wrap}`} aria-labelledby="produk-title">
      <div className={`section__inner ${styles.inner}`}>
        <h2 id="produk-title" className={`section-title ${styles.title}`}>
          Produk Filamen Morvo
        </h2>
        <ul className={styles.list}>
          {products.map((product) => (
            <li key={product.name} className={styles.card}>
              <figure className={styles.figure}>
                <div className={styles.photo} role="img" aria-label={`Foto ${product.name}`} />
                <figcaption className={styles.caption}>[Foto Filamen]</figcaption>
              </figure>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.spec}>{product.spec}</p>
              <a href="#kontak" className="btn btn--outline-dark">
                Lihat Detail
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
