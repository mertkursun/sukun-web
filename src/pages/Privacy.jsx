import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { P } from '../theme.js';
import { LOGO } from '../components/common.jsx';
import { useLang } from '../i18n.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const Section = ({ n, title, children }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
    style={{ marginTop: 56 }}
  >
    <motion.h2
      variants={fadeUp}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: '-.01em',
        color: '#fff',
        margin: '0 0 14px',
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
      }}
    >
      <span style={{ color: P.gold, fontSize: 11, letterSpacing: '.3em', fontWeight: 700 }}>{n}</span>
      {title}
    </motion.h2>
    <motion.div variants={fadeUp}>{children}</motion.div>
  </motion.div>
);

const linkStyle = {
  color: P.gold,
  textDecoration: 'none',
  borderBottom: '1px solid rgba(232,182,90,.35)',
};

const paragraph = { fontSize: 15.5, color: 'rgba(245,238,226,.78)', margin: '0 0 14px', lineHeight: 1.7 };

export default function Privacy() {
  const { t, toggle } = useLang();
  return (
    <div style={{ minHeight: '100vh', background: P.night, color: P.text }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 48px',
          borderBottom: `1px solid ${P.stroke}`,
          position: 'sticky',
          top: 0,
          background: 'rgba(11,21,51,.92)',
          backdropFilter: 'blur(12px)',
          zIndex: 10,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: P.gold }}>
          <img src={LOGO} alt="Sûkun" style={{ width: 28, height: 28, borderRadius: 6 }} />
          <span style={{ letterSpacing: '.35em', fontWeight: 700, fontSize: 15 }}>SÛKUN</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <button
            onClick={toggle}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: P.gold, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'inherit' }}
          >
            {t('nav.lang')}
          </button>
          <Link
            to="/"
            style={{
              fontSize: 11,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: P.muted,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            {t('privacy.back')}
          </Link>
        </div>
      </header>

      <motion.main
        initial="hidden"
        animate="show"
        variants={stagger}
        style={{ maxWidth: 720, margin: '0 auto', padding: '72px 28px 96px' }}
      >
        <motion.div
          variants={fadeUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 10,
            letterSpacing: '.42em',
            textTransform: 'uppercase',
            color: P.gold,
            fontWeight: 700,
            marginBottom: 22,
          }}
        >
          {t('privacy.badge')}
        </motion.div>
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(44px, 6vw, 68px)',
            letterSpacing: '-.03em',
            lineHeight: 1,
            margin: '0 0 10px',
            color: '#fff',
          }}
        >
          {t('privacy.h1a')}{' '}
          <em style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic', fontWeight: 300, color: P.gold }}>
            {t('privacy.h1b')}
          </em>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          style={{
            color: P.muted,
            fontSize: 12,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            fontWeight: 500,
            margin: '0 0 40px',
            paddingBottom: 28,
            borderBottom: `1px solid ${P.stroke}`,
          }}
        >
          {t('privacy.updated')}
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 22,
            lineHeight: 1.45,
            color: 'rgba(245,238,226,.88)',
            margin: '0 0 48px',
          }}
        >
          {t('privacy.intro')}
        </motion.p>

        <Section n="01" title={t('privacy.s1.title')}>
          <ul style={{ paddingLeft: 22, margin: '0 0 14px', color: 'rgba(245,238,226,.78)', lineHeight: 1.7 }}>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>{t('privacy.s1.location.label')}</strong>{' '}
              {t('privacy.s1.location.desc')}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>{t('privacy.s1.motion.label')}</strong>{' '}
              {t('privacy.s1.motion.desc')}
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>{t('privacy.s1.notif.label')}</strong>{' '}
              {t('privacy.s1.notif.desc')}
            </li>
          </ul>
        </Section>

        <Section n="02" title={t('privacy.s2.title')}>
          <p style={paragraph}>{t('privacy.s2.desc')}</p>
        </Section>

        <Section n="03" title={t('privacy.s3.title')}>
          <ul style={{ paddingLeft: 22, color: 'rgba(245,238,226,.78)', lineHeight: 1.7 }}>
            <li style={{ marginBottom: 10 }}>
              <a href="https://aladhan.com" style={linkStyle}>Aladhan API</a> — {t('privacy.s3.aladhan')}
            </li>
            <li style={{ marginBottom: 10 }}>
              <a href="https://quran.com" style={linkStyle}>Quran.com API</a> — {t('privacy.s3.quran')}
            </li>
          </ul>
        </Section>

        <Section n="04" title={t('privacy.s4.title')}>
          <p style={paragraph}>{t('privacy.s4.desc')}</p>
        </Section>

        <Section n="05" title={t('privacy.s5.title')}>
          <p style={paragraph}>
            <a href="mailto:destek@sukun.app" style={linkStyle}>destek@sukun.app</a>
          </p>
        </Section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            textAlign: 'center',
            fontFamily: "'Amiri', 'Fraunces', serif",
            fontSize: 28,
            color: 'rgba(232,182,90,.45)',
            letterSpacing: '.35em',
            marginTop: 72,
          }}
        >
          ﷽
        </motion.div>
      </motion.main>

    </div>
  );
}
