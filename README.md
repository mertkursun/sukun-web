# Sûkun — Landing Page (Vite + React)

Günde beş sessizlik. Namaz vakitleri, kıble, Kur'an ve zikir için tek yerde — bu repo, Sûkun uygulamasının tanıtım sayfasının React/Vite kaynak kodudur.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcı `http://localhost:5173` üzerinde açılır.

Prod build:

```bash
npm run build
npm run preview
```

## Stack

- **React 18** + **Vite 5** — hızlı dev server + optimize build
- **Framer Motion** — hero intro, parallax, scroll-triggered reveals, chapter slide-up
- **React Router** — `/` (landing) ve `/privacy` (gizlilik politikası)
- Google Fonts: **Inter** (display + body) + **Fraunces** (italic accent) + **Amiri** (Arabic bismillah)

## Yapı

```
sukun-react/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx            # Router entry
   ├─ App.jsx             # Landing page
   ├─ styles.css          # Global CSS vars & reset
   ├─ theme.js            # Color tokens (P)
   ├─ components/
   │  └─ common.jsx       # Phone, Sparkles, ArrowUpRight, Screens
   ├─ pages/
   │  └─ Privacy.jsx      # Gizlilik sayfası
   └─ assets/
      ├─ sukun-logo.png
      └─ screen-0[1-5]-*.png
```

## Animasyon haritası

- **Nav** — üstten fade+slide (on mount)
- **Hero** — staggered fade-up (eyebrow → başlık → açıklama → butonlar)
- **Phone'lar** — yan telefonlar yana/rotasyonla gelir, orta telefon alttan çıkar; scroll'da hafif parallax
- **Butonlar** — `whileHover` scale + y, `whileTap` scale down
- **Ticker** — viewport'a girince item'lar sırayla fade-in
- **Chapter'lar** — telefon ekranı rotasyonlu slide-up, metin staggered
- **Final CTA** — alttan scale-in
- `prefers-reduced-motion` saygı gösterir (styles.css)

## Değiştirmek istediğin yerler

- **Renkler** → `src/theme.js`
- **Chapter içeriği** → `src/App.jsx` içindeki `chapters` array'i
- **Gizlilik metni** → `src/pages/Privacy.jsx`
- **Ekran görüntüleri** → `src/assets/` içine yenisini koy, `common.jsx` içinde import et

## Deploy

Statik hosting (Vercel, Netlify, Cloudflare Pages) direkt çalışır:

```bash
npm run build
# dist/ klasörünü host et
```

SPA olduğu için `/privacy` gibi rotaların 404 vermemesi için hosting'de tüm istekleri `index.html`'e yönlendir.

---

Made with sabır · © MMXXVI
