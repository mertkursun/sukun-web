import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { P } from './theme.js';
import { Phone, Sparkles, ArrowUpRight, LOGO } from './components/common.jsx';
import { useLang } from './i18n.jsx';
import { useIsMobile } from './hooks/useIsMobile.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const CHAPTER_KEYS = ['c01', 'c02', 'c03', 'c04', 'c05'];
const SCREENS = ['vakitler', 'kible', 'kuran', 'tesbih', 'diger'];

function Hero() {
  const { t } = useLang();
  const mob = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ySide = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scaleMid = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <div ref={ref}>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: mob ? '40px 20px 10px' : '60px 56px 10px', maxWidth: 1280, margin: '0 auto' }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Sparkles color={P.gold} opacity={0.5} />
        </div>

        <motion.div
          variants={fadeUp}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: P.gold, fontSize: 10, letterSpacing: '.42em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 18, position: 'relative' }}
        >
          <span>●</span> {t('hero.badge')} <span>●</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: mob ? 'clamp(48px, 12vw, 80px)' : 'clamp(80px, 10vw, 156px)', lineHeight: 0.92, letterSpacing: '-.04em', margin: 0, color: '#fff' }}
        >
          {t('hero.h1a')}<br />
          <span style={{ color: P.gold, fontWeight: 300, fontStyle: 'italic', fontFamily: 'Fraunces' }}>{t('hero.h1b')}</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          style={{ maxWidth: 560, margin: '28px auto 0', fontSize: mob ? 15 : 17, lineHeight: 1.6, color: 'rgba(245,238,226,.7)' }}
        >
          {t('hero.subtitle')}
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: 12, marginTop: 30, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="https://apps.apple.com/us/app/suk%C3%BBn/id6761861804"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ background: P.gold, color: P.night, border: 'none', padding: mob ? '14px 22px' : '15px 26px', fontSize: mob ? 11 : 12, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', borderRadius: 999, textDecoration: 'none', display: 'inline-block' }}
          >
            {t('hero.appstore')}
          </motion.a>
          <motion.button
            disabled
            style={{ background: 'transparent', color: 'rgba(255,255,255,.4)', border: '1px solid rgba(245,238,226,.15)', padding: mob ? '14px 22px' : '15px 26px', fontSize: mob ? 11 : 12, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 600, cursor: 'not-allowed', borderRadius: 999, opacity: 0.5 }}
          >
            {t('hero.googleplay')}
          </motion.button>
        </motion.div>
      </motion.div>

      {mob ? (
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', marginTop: 32, padding: '0 20px 40px' }}>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Phone screen="vakitler" scale={0.75} />
          </motion.div>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', marginTop: 40, padding: '0 56px 40px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 1040, height: 620, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -10 }}
              animate={{ opacity: 0.85, x: 0, rotate: -6 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', left: '18%', bottom: 0, y: ySide, zIndex: 1, transformOrigin: 'bottom center' }}
            >
              <div style={{ transform: 'translateY(36px)' }}>
                <Phone screen="diger" scale={0.7} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: -10, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', zIndex: 3, y: yMid, scale: scaleMid }}
            >
              <Phone screen="vakitler" scale={0.92} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 10 }}
              animate={{ opacity: 0.85, x: 0, rotate: 6 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', right: '18%', bottom: 0, y: ySide, zIndex: 1, transformOrigin: 'bottom center' }}
            >
              <div style={{ transform: 'translateY(36px)' }}>
                <Phone screen="kible" scale={0.7} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

function Chapter({ ck, screen, i }) {
  const { t } = useLang();
  const mob = useIsMobile();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerParent}
      style={{
        display: 'grid',
        gridTemplateColumns: mob ? '1fr' : '1fr 1fr',
        alignItems: 'center',
        gap: mob ? 28 : 40,
        padding: mob ? '40px 20px' : '70px 100px',
        maxWidth: 1320,
        margin: '0 auto',
        direction: !mob && i % 2 === 1 ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ direction: 'ltr', textAlign: mob ? 'center' : 'left' }}>
        <motion.div variants={fadeUp} style={{ color: P.gold, fontSize: 10, letterSpacing: '.42em', fontWeight: 700, marginBottom: 14 }}>
          {String(i + 1).padStart(2, '0')} · {t(`${ck}.label`)}
        </motion.div>
        <motion.h3
          variants={fadeUp}
          style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: mob ? 36 : 64, lineHeight: 0.98, letterSpacing: '-.03em', margin: 0, color: '#fff' }}
        >
          {t(`${ck}.title`)}
        </motion.h3>
        <motion.p
          variants={fadeUp}
          style={{ maxWidth: mob ? '100%' : 430, marginTop: 18, fontSize: mob ? 14 : 15, lineHeight: 1.7, color: 'rgba(245,238,226,.7)', marginLeft: mob ? 'auto' : 0, marginRight: mob ? 'auto' : 0 }}
        >
          {t(`${ck}.desc`)}
        </motion.p>
        <motion.div
          variants={fadeUp}
          whileHover={{ x: 6 }}
          style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: P.gold, fontWeight: 700, cursor: 'pointer' }}
        >
          {t('chapter.explore')} <ArrowUpRight size={12} color={P.gold} />
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60, rotate: mob ? 0 : (i % 2 === 0 ? 4 : -4) },
          show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
        }}
        whileHover={mob ? {} : { y: -8, transition: { duration: 0.4 } }}
        style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}
      >
        <Phone screen={screen} scale={mob ? 0.65 : 0.8} />
      </motion.div>
    </motion.div>
  );
}

function FinalCTA() {
  const { t } = useLang();
  const mob = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', zIndex: 2, margin: mob ? '20px 16px 40px' : '20px 56px 40px', padding: mob ? '40px 20px' : '60px 40px', background: P.card, border: `1px solid ${P.stroke}`, borderRadius: 20, textAlign: 'center', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Sparkles color={P.gold} opacity={0.25} />
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 10, letterSpacing: '.42em', color: P.gold, fontWeight: 700 }}>{t('cta.badge')}</div>
        <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: mob ? 36 : 64, letterSpacing: '-.03em', margin: '14px 0 6px', color: '#fff' }}>
          <span style={{ fontWeight: 300, fontStyle: 'italic', fontFamily: 'Fraunces', color: P.gold }}>{t('cta.h2a')}</span>{' '}{t('cta.h2b')}
        </h3>
        <div style={{ color: P.muted, fontSize: mob ? 13 : 14 }}>{t('cta.sub')}</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="https://apps.apple.com/us/app/suk%C3%BBn/id6761861804"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ background: P.gold, color: P.night, border: 'none', padding: mob ? '14px 22px' : '16px 28px', fontSize: mob ? 11 : 12, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', borderRadius: 999, textDecoration: 'none', display: 'inline-block' }}
          >
            {t('hero.appstore')}
          </motion.a>
          <motion.button
            disabled
            style={{ background: 'rgba(255,255,255,.3)', color: P.night, border: 'none', padding: mob ? '14px 22px' : '16px 28px', fontSize: mob ? 11 : 12, letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'not-allowed', borderRadius: 999, opacity: 0.5 }}
          >
            {t('hero.googleplay')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { t, toggle } = useLang();
  const mob = useIsMobile();
  return (
    <section style={{ minHeight: '100vh', background: P.night, color: P.text, fontFamily: "'Inter', system-ui", position: 'relative', overflow: 'hidden' }}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'flex', justifyContent: 'space-between', padding: mob ? '16px 20px' : '24px 56px', alignItems: 'center', borderBottom: `1px solid ${P.stroke}`, position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11,21,51,.85)', backdropFilter: 'blur(12px)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={LOGO} alt="Sûkun" style={{ width: 28, height: 28, borderRadius: 6 }} />
          <span style={{ fontSize: mob ? 14 : 18, letterSpacing: '.35em', fontWeight: 700, color: P.gold }}>SÛKUN</span>
        </div>
        <div style={{ display: 'flex', gap: mob ? 14 : 24, alignItems: 'center', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,238,226,.7)', fontWeight: 500 }}>
          <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>{t('nav.privacy')}</Link>
          <button
            onClick={toggle}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: P.gold, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'inherit' }}
          >
            {t('nav.lang')}
          </button>
        </div>
      </motion.nav>

      <Hero />

      <div style={{ position: 'relative', zIndex: 2, padding: '30px 0' }}>
        {CHAPTER_KEYS.map((ck, i) => (
          <Chapter key={ck} ck={ck} screen={SCREENS[i]} i={i} />
        ))}
      </div>

      <FinalCTA />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ textAlign: 'center', padding: '20px 0 60px', color: 'rgba(232,182,90,.55)', fontSize: 24, letterSpacing: '.35em', fontFamily: "'Amiri', serif" }}
      >
        ﷽
      </motion.div>
    </section>
  );
}
