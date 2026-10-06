import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <p className={styles.name}>Morvo</p>
        <p className={styles.text}>Filamen 3D printing dari botol plastik bekas.</p>
      </div>
      <p className={styles.text}>© 2026 Morvo Team</p>
    </footer>
  );
}
