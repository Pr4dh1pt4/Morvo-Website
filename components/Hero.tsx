/* eslint-disable @next/next/no-img-element */
import Navbar from './Navbar';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="beranda" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.card}>
        <Navbar />

        <div className={styles.content}>
          <p className={styles.eyebrow}>MATERIAL BERKELANJUTAN UNTUK 3D PRINTING</p>
          <h1 id="hero-title" className={styles.title}>
            Mengubah Botol Plastik Bekas Menjadi Barang Yang Bernilai
          </h1>
          <p className={styles.lead}>
            Morvo mengolah limbah botol plastik menjadi filamen 3D printing ramah lingkungan tanpa
            mengorbankan kualitas cetak.
          </p>
          <div className={styles.actions}>
            <a href="#produk" className="btn btn--brand">
              Lihat Produk
            </a>
            <a href="#tentang" className="btn btn--outline">
              Tentang Kami
            </a>
          </div>
        </div>

        <div className={styles.stage} aria-hidden="true">
          <div className={styles['stage-inner']}>
            <img src="/images/hero-botol-1.png" alt="" className={`${styles.bottle} ${styles['bottle-1']}`} />
            <img src="/images/hero-botol-3.png" alt="" className={`${styles.bottle} ${styles['bottle-3']}`} />
            <img src="/images/hero-botol-2.png" alt="" className={`${styles.bottle} ${styles['bottle-2']}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
