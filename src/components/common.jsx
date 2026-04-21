import { P } from '../theme.js';

// Import phone screens and logo so Vite bundles them
import logoUrl from '../assets/sukun-logo.png';
import vakitlerUrl from '../assets/screen-01-vakitler.png';
import kibleUrl from '../assets/screen-02-kible.png';
import kuranUrl from '../assets/screen-03-kuran.png';
import tesbihUrl from '../assets/screen-04-tesbih.png';
import digerUrl from '../assets/screen-05-diger.png';

export const LOGO = logoUrl;

export const Screens = {
  vakitler: { src: vakitlerUrl, label: 'Vakitler' },
  kible:    { src: kibleUrl,    label: 'Kıble' },
  kuran:    { src: kuranUrl,    label: "Kur'an" },
  tesbih:   { src: tesbihUrl,   label: 'Tesbih' },
  diger:    { src: digerUrl,    label: 'Diğer' },
};

// ── Sparkles decorative SVG ──
export const Sparkles = ({ color = P.gold, opacity = 0.5 }) => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }}
    viewBox="0 0 400 400"
    preserveAspectRatio="none"
    aria-hidden
  >
    <g fill={color}>
      <circle cx="40" cy="40" r="1.5" />
      <circle cx="360" cy="60" r="2" />
      <circle cx="120" cy="90" r="1" />
      <circle cx="280" cy="30" r="1.2" />
      <circle cx="70" cy="150" r="1" />
      <circle cx="330" cy="130" r="1.5" />
    </g>
    <g fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".8">
      <path d="M 180 10 Q 200 40 170 80" />
      <path d="M 220 10 Q 240 50 260 90" />
      <path d="M 150 20 Q 170 55 200 85" />
      <path d="M 250 10 Q 240 45 220 80" />
    </g>
  </svg>
);

// ── Arrow icon ──
export const ArrowUpRight = ({ size = 12, color = P.gold }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" aria-hidden>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

// ── Phone frame wrapping a screenshot ──
// Screenshots are 1179×2556 → aspect .4613
const PHONE_ASPECT = 1179 / 2556;

export const Phone = ({ screen = 'vakitler', scale = 1, shadow = true }) => {
  const width = 300 * scale;
  const height = width / PHONE_ASPECT;
  const bezel = 6 * scale;
  const s = Screens[screen];

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 46 * scale,
        background: 'linear-gradient(180deg, #22262C, #0a0a0c)',
        padding: bezel,
        boxShadow: shadow
          ? '0 40px 80px -30px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.05) inset'
          : 'none',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 40 * scale,
          overflow: 'hidden',
          background: '#0B1533',
          position: 'relative',
        }}
      >
        <img
          src={s.src}
          alt={s.label}
          draggable="false"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </div>
  );
};
