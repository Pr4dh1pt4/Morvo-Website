'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'produk', label: 'Produk' },
  { id: 'tim', label: 'Tim' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [active, setActive] = useState('tentang');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="menu-utama"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles['burger-line']} />
          <span className={styles['burger-line']} />
          <span className={styles['burger-line']} />
        </button>

        <nav aria-label="Navigasi utama">
          <ul id="menu-utama" className={`${styles.menu} ${open ? styles['menu--open'] : ''}`}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.link} ${active === link.id ? styles['link--active'] : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a href="#beranda" className={styles.logo} aria-label="Morvo — kembali ke beranda">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo-putih.png" alt="Morvo" width={64} height={67} />
      </a>

      <div className={styles.right}>
        <a href="#kontak" className={`btn btn--brand ${styles.cta}`}>
          Hubungi Kami
        </a>
      </div>
    </header>
  );
}
