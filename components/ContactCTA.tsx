import styles from './ContactCTA.module.css';

const EMAIL = 'hello@morvo.id';
const PHONE = '+62 8xx-xxxx-xxxx';

export default function ContactCTA() {
  return (
    <section id="kontak" className={`section ${styles.wrap}`} aria-labelledby="kontak-title">
      <div className={`section__inner ${styles.inner}`}>
        <h2 id="kontak-title" className={`section-title ${styles.title}`}>
          Tertarik Berkolaborasi dengan Morvo?
        </h2>
        <a href={`mailto:${EMAIL}`} className="btn btn--primary">
          Hubungi Kami
        </a>
        <p className={styles.contact}>
          <a href={`mailto:${EMAIL}`} className={styles.link}>
            {EMAIL}
          </a>{' '}
          <span aria-hidden="true">·</span> {PHONE}
        </p>
      </div>
    </section>
  );
}
