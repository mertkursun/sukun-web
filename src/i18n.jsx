import { createContext, useContext, useState } from 'react';

const translations = {
  tr: {
    'nav.privacy': 'Gizlilik',
    'nav.lang': 'TR · EN',

    'hero.badge': 'BİR MANEVİ YOLDAŞ',
    'hero.h1a': 'Günde beş',
    'hero.h1b': 'sessizlik.',
    'hero.subtitle': 'Namaz, kıble, Kur\'an ve zikir için tek yerde.',
    'hero.appstore': '⇣ App Store',
    'hero.googleplay': '⇣ Google Play',

    'chapter.explore': 'Keşfet',

    'c01.label': 'NEVER MISS A PRAYER',
    'c01.title': 'Vakitleri Hiç Kaçırma',
    'c01.desc': 'GPS ile anlık namaz vakitleri. Bugünün ayeti üstte, sıradaki vakit her an gözünün önünde.',

    'c02.label': 'FIND THE QIBLA',
    'c02.title': "Kâbe'ye Yönel",
    'c02.desc': 'Hassas pusula ile Kâbe yönünü bul. 2.414 km uzaklık, 152° açı — sağa döndüğünde sana söyler.',

    'c03.label': "THE WHOLE QUR'AN",
    'c03.title': '114 Sure, Türkçe Meal',
    'c03.desc': 'Arapça metin, Türkçe meal ve yer imleri. Kaldığın yerden devam et.',

    'c04.label': 'DHIKR COUNTER',
    'c04.title': 'Zikir Sayarken Huzur Bul',
    'c04.desc': 'Titreşimli geri bildirim ile tesbih sayacı. Günlük zikir istatistiğin takip edilsin.',

    'c05.label': 'ALL IN ONE',
    'c05.title': 'Her İhtiyacın Bir Arada',
    'c05.desc': 'Dualar, Esmaül Hüsna, hatim takibi, ibadet takibi ve cami bulucu — hepsi aynı çatı altında.',

    'cta.badge': 'BUGÜN BAŞLA',
    'cta.h2a': 'Ücretsiz',
    'cta.h2b': 'indir.',
    'cta.sub': 'Reklamsız, takipsiz, fısıltı gibi.',

    'privacy.back': '← Geri dön',
    'privacy.badge': '● Legal · Policy',
    'privacy.h1a': 'Gizlilik',
    'privacy.h1b': 'politikası.',
    'privacy.updated': 'Son güncelleme · Mart 2025',
    'privacy.intro': 'Sükûn uygulamasını indirdiğiniz için teşekkür ederiz. Gizliliğiniz bizim için önemlidir.',

    'privacy.s1.title': 'Toplanan Veriler',
    'privacy.s1.location.label': 'Konum (isteğe bağlı):',
    'privacy.s1.location.desc': 'Namaz vakitleri ve kıble için yalnızca uygulama kullanımı sırasında erişilir. Sunucuya gönderilmez.',
    'privacy.s1.motion.label': 'Hareket sensörü:',
    'privacy.s1.motion.desc': 'Kıble pusulası için kullanılır, yalnızca cihazda işlenir.',
    'privacy.s1.notif.label': 'Bildirimler (isteğe bağlı):',
    'privacy.s1.notif.desc': 'Namaz vakti hatırlatıcıları için.',

    'privacy.s2.title': 'Veri Saklama',
    'privacy.s2.desc': 'Tüm veriler yalnızca cihazınızda saklanır. Sunucu veya üçüncü taraflara gönderilmez.',

    'privacy.s3.title': "Üçüncü Taraf API'ler",
    'privacy.s3.aladhan': 'Namaz vakitleri',
    'privacy.s3.quran': "Kur'an verileri ve ses",

    'privacy.s4.title': 'Reklam ve Takip',
    'privacy.s4.desc': 'Uygulama herhangi bir reklam veya kullanıcı takip sistemi içermez.',

    'privacy.s5.title': 'İletişim',

    'footer.made': 'Made with sabır',
  },

  en: {
    'nav.privacy': 'Privacy',
    'nav.lang': 'EN · TR',

    'hero.badge': 'A SPIRITUAL COMPANION',
    'hero.h1a': 'Five quiet',
    'hero.h1b': 'moments.',
    'hero.subtitle': 'Prayer times, Qibla, Qur\'an and dhikr — all in one place.',
    'hero.appstore': '⇣ App Store',
    'hero.googleplay': '⇣ Google Play',

    'chapter.explore': 'Explore',

    'c01.label': 'VAKİTLERİ HİÇ KAÇIRMA',
    'c01.title': 'Never Miss a Prayer',
    'c01.desc': 'Real-time prayer times based on your GPS location. Today\'s verse at the top, the next prayer always in view.',

    'c02.label': "KA'BE'YE YÖNEL",
    'c02.title': 'Find the Qibla',
    'c02.desc': 'Find the direction of the Kaaba with a precise compass. 1,500 miles away, 152° — it tells you when you\'re facing right.',

    'c03.label': '114 SURE, TÜRKÇE MEAL',
    'c03.title': "The Whole Qur'an",
    'c03.desc': 'Arabic text, English translation and bookmarks. Pick up right where you left off.',

    'c04.label': 'ZİKİR SAYARKEN HUZUR BUL',
    'c04.title': 'Dhikr Counter',
    'c04.desc': 'Tasbeeh counter with haptic feedback. Keep track of your daily dhikr.',

    'c05.label': 'HER İHTİYACIN BİR ARADA',
    'c05.title': 'Everything in One Place',
    'c05.desc': 'Duas, the 99 Names of Allah, Quran completion tracker, worship log and mosque finder — all under one roof.',

    'cta.badge': 'START TODAY',
    'cta.h2a': 'Free',
    'cta.h2b': 'download.',
    'cta.sub': 'No ads, no tracking, whisper-quiet.',

    'privacy.back': '← Back',
    'privacy.badge': '● Legal · Policy',
    'privacy.h1a': 'Privacy',
    'privacy.h1b': 'policy.',
    'privacy.updated': 'Last updated · March 2025',
    'privacy.intro': 'Thank you for downloading the Sûkun app. Your privacy matters to us.',

    'privacy.s1.title': 'Data We Collect',
    'privacy.s1.location.label': 'Location (optional):',
    'privacy.s1.location.desc': 'Accessed only while the app is in use, for prayer times and Qibla. Never sent to a server.',
    'privacy.s1.motion.label': 'Motion sensors:',
    'privacy.s1.motion.desc': 'Used for the Qibla compass, processed on-device only.',
    'privacy.s1.notif.label': 'Notifications (optional):',
    'privacy.s1.notif.desc': 'For prayer time reminders.',

    'privacy.s2.title': 'Data Storage',
    'privacy.s2.desc': 'All data is stored on your device only. Nothing is sent to servers or third parties.',

    'privacy.s3.title': 'Third-Party APIs',
    'privacy.s3.aladhan': 'Prayer times',
    'privacy.s3.quran': "Qur'an data and audio",

    'privacy.s4.title': 'Advertising & Tracking',
    'privacy.s4.desc': 'The app contains no advertising or user tracking of any kind.',

    'privacy.s5.title': 'Contact',

    'footer.made': 'Made with sabır',
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('tr');
  const toggle = () => setLang(l => (l === 'tr' ? 'en' : 'tr'));
  const t = key => translations[lang][key] ?? key;
  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
