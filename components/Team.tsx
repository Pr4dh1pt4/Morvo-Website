import styles from './Team.module.css';

// Ganti nama, peran, dan tambahkan `photo` (mis. '/images/tim-1.jpg') saat data asli tersedia.
const members: { name: string; role: string; photo?: string }[] = [
  { name: 'Anggota 1', role: 'Peran/Divisi' },
  { name: 'Anggota 2', role: 'Peran/Divisi' },
  { name: 'Anggota 3', role: 'Peran/Divisi' },
  { name: 'Anggota 4', role: 'Peran/Divisi' },
  { name: 'Anggota 5', role: 'Peran/Divisi' },
];

export default function Team() {
  return (
    <section id="tim" className={`section ${styles.wrap}`} aria-labelledby="tim-title">
      <div className={`section__inner ${styles.inner}`}>
        <h2 id="tim-title" className={`section-title ${styles.title}`}>
          Kenal Lebih Dekat dengan Tim Morvo
        </h2>
        <ul className={styles.list}>
          {members.map((member) => (
            <li key={member.name} className={styles.member}>
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.photo} alt={`Foto ${member.name}`} className={`circle ${styles.avatar}`} />
              ) : (
                <div className={`circle ${styles.avatar}`} aria-hidden="true" />
              )}
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
