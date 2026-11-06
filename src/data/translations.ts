export type SupportedLang = 'en' | 'tr' | 'de' | 'ru' | 'sv' | 'zh' | 'fr' | 'it';

export interface LanguageOption {
  code: SupportedLang;
  label: string;
  flag: string;
  short: string;
}

export const languagesList: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', short: 'TR' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', short: 'DE' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', short: 'RU' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪', short: 'SV' },
  { code: 'zh', label: '中文', flag: '🇨🇳', short: 'ZH' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', short: 'IT' }
];

export const uiText: Record<SupportedLang, {
  nav: {
    about: string;
    dogduino: string;
    experience: string;
    education: string;
    certifications: string;
    references: string;
    contact: string;
  };
  hero: {
    kicker: string;
    subKicker: string;
    summaryLabel: string;
    activeEngineering: string;
    viewDogduino: string;
    contactMe: string;
    kpis: {
      internships: string;
      internshipsSub: string;
      quadruped: string;
      quadrupedSub: string;
      certs: string;
      certsSub: string;
      languages: string;
      languagesSub: string;
    };
  };
  dogduino: {
    badge: string;
    videoTab: string;
    galleryTab: string;
    scopeHeading: string;
    challengesHeading: string;
    challengesText: string;
    specsHeading: string;
    lightboxOf: string;
    loopCaption: string;
  };
  experience: {
    kicker: string;
    title: string;
    desc: string;
    filterAll: string;
    filterRd: string;
    filterEmbedded: string;
    filterIt: string;
    filterGrid: string;
  };
  education: {
    kicker: string;
    title: string;
    focusLabel: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    techSkillsTitle: string;
    profQualitiesTitle: string;
    languagesTitle: string;
  };
  certs: {
    kicker: string;
    title: string;
    desc: string;
    countBadge: string;
    completed: string;
    popupPrompt: string;
    clickToView: string;
    closePopup: string;
  };
  references: {
    kicker: string;
    title: string;
    desc: string;
    refIndex: string;
    copyEmail: string;
    directEmail: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    emailLabel: string;
    emailAction: string;
    linkedinLabel: string;
    linkedinAction: string;
    responseSpeed: string;
    formTitle: string;
    formSubtitle: string;
    nameField: string;
    emailField: string;
    companyField: string;
    subjectField: string;
    messageField: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    requiredNote: string;
    submitButton: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  footer: {
    allRights: string;
    backToTop: string;
  };
}> = {
  en: {
    nav: {
      about: 'About',
      dogduino: 'Dogduino Project',
      experience: 'Experience',
      education: 'Education & Skills',
      certifications: 'Certifications',
      references: 'References',
      contact: 'Contact'
    },
    hero: {
      kicker: 'ELECTRICAL & ELECTRONICS ENGINEERING',
      subKicker: 'OSTIM TECHNICAL UNIVERSITY',
      summaryLabel: 'Professional Profile',
      activeEngineering: 'Active Engineering Status',
      viewDogduino: 'View Dogduino Project',
      contactMe: 'Get in Touch',
      kpis: {
        internships: 'Professional Internships',
        internshipsSub: 'Volt WEG, Presidency IT, Cisco, Gdz, Uptech',
        quadruped: 'Dogduino Quadruped Robot',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Kinematics',
        certs: 'Accredited Certifications',
        certsSub: 'TEI Aviation, MathWorks, Bilgeiş, SAP',
        languages: 'Language Proficiency',
        languagesSub: 'English (Technical) & Russian'
      }
    },
    dogduino: {
      badge: 'FEATURED ROBOTICS & EMBEDDED PROJECT',
      videoTab: 'Demo Video',
      galleryTab: 'Photo Gallery (3)',
      scopeHeading: 'Project Scope & Features',
      challengesHeading: 'Engineering Focus Highlights',
      challengesText: 'Engineered dual-rail power isolation to eliminate voltage brownouts during concurrent 8-servo actuation. Implemented inverse kinematics closed-form models to translate x-y-z foot trajectories into real-time servo PWM duty cycles.',
      specsHeading: 'Hardware & System Specifications',
      lightboxOf: 'of',
      loopCaption: 'Demonstration:'
    },
    experience: {
      kicker: 'CAREER & PROFESSIONAL EXPERIENCE',
      title: 'Work Experience',
      desc: 'Applied engineering background spanning electric motor IEC load tests, high-security government portals, real-time sensor firmware, and electrical distribution grid verification.',
      filterAll: 'All Roles (5)',
      filterRd: 'R&D / Volt WEG',
      filterEmbedded: 'Embedded Systems',
      filterIt: 'IT & Python Dev',
      filterGrid: 'Electrical & Grid'
    },
    education: {
      kicker: 'ACADEMIC BACKGROUND & SKILLS MATRIX',
      title: 'Education, Skills & Languages',
      focusLabel: 'Engineering Focus',
      pillar1Title: 'Embedded & Microcontrollers',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ firmware, SPI/I2C/UART bus architecture',
      pillar2Title: 'Power Electronics & Drives',
      pillar2Desc: 'Motor PWM control, IEC S1/S3 load testing, dual-rail DC-DC regulation',
      pillar3Title: 'Avionics & Control Systems',
      pillar3Desc: 'TEI Engine School, MathWorks Simulink/Control Design, kinematics',
      techSkillsTitle: 'Technical & Software Skills',
      profQualitiesTitle: 'Professional Qualities',
      languagesTitle: 'Languages'
    },
    certs: {
      kicker: 'COURSES & ACCREDITATIONS',
      title: 'Courses & Certifications',
      desc: 'Accredited training credentials from TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş, and Udemy.',
      countBadge: '7 Verified Credentials',
      completed: 'Completed',
      popupPrompt: 'Hover or tap card to read details',
      clickToView: 'View description',
      closePopup: 'Close'
    },
    references: {
      kicker: 'ACADEMIC & INDUSTRIAL TESTIMONIALS',
      title: 'References',
      desc: 'Directly verifiable professional references from department leadership and power electronic executives.',
      refIndex: 'REFERENCE',
      copyEmail: 'Copy Email',
      directEmail: 'Direct Email Correspondence'
    },
    contact: {
      badge: 'DIRECT COMMUNICATION',
      title: 'Get In Touch',
      desc: 'Available for embedded firmware engineering, avionics systems, and robotics opportunities. Reach out via the form below or directly through LinkedIn and email.',
      emailLabel: 'EMAIL ADDRESS',
      emailAction: 'Send Email',
      linkedinLabel: 'PROFESSIONAL NETWORK',
      linkedinAction: 'Visit LinkedIn Profile',
      responseSpeed: 'Prompt response time (Typically within 24 hours)',
      formTitle: 'Send a Message',
      formSubtitle: 'Fill in your details below to dispatch an inquiry directly to Yağmur Kahraman.',
      nameField: 'Your Name *',
      emailField: 'Your Email *',
      companyField: 'Company / Institution (Optional)',
      subjectField: 'Subject / Role *',
      messageField: 'Your Message *',
      namePlaceholder: 'e.g. Sarah Jenkins',
      emailPlaceholder: 'name@company.com',
      companyPlaceholder: 'e.g. Aerospace Corp',
      subjectPlaceholder: 'Embedded Firmware / Avionics Inquiry',
      messagePlaceholder: 'Role details, interview scheduling, or project collaboration overview...',
      requiredNote: '* Required fields',
      submitButton: 'Send Message',
      successTitle: 'Message Ready to Send!',
      successDesc: 'Your email client has been opened with your pre-formatted inquiry ready for transmission to kahramanyagmur178@gmail.com.',
      sendAnother: 'Send Another Message'
    },
    footer: {
      allRights: 'All rights reserved.',
      backToTop: 'Back to Top'
    }
  },

  tr: {
    nav: {
      about: 'Hakkımda',
      dogduino: 'Dogduino Projesi',
      experience: 'İş Deneyimi',
      education: 'Eğitim & Yetkinlikler',
      certifications: 'Sertifikalar',
      references: 'Referanslar',
      contact: 'İletişim'
    },
    hero: {
      kicker: 'ELEKTRİK & ELEKTRONİK MÜHENDİSLİĞİ',
      subKicker: 'OSTİM TEKNİK ÜNİVERSİTESİ',
      summaryLabel: 'Özet Profil',
      activeEngineering: 'Aktif Mühendislik Durumu',
      viewDogduino: 'Dogduino Robot Projesi',
      contactMe: 'Bana Ulaşın',
      kpis: {
        internships: 'Profesyonel Staj & Deneyim',
        internshipsSub: 'Volt WEG, İletişim Bşk., Cisco, Gdz, Uptech',
        quadruped: 'Dogduino Dört Bacaklı Robot',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Kinematik',
        certs: 'Akredite Sertifika & Eğitim',
        certsSub: 'TEI Havacılık, MathWorks, Bilgeiş, SAP',
        languages: 'Yabancı Dil Yetkinliği',
        languagesSub: 'İngilizce (Teknik) & Rusça'
      }
    },
    dogduino: {
      badge: 'ÖNE ÇIKAN ROBOTİK & GÖMÜLÜ SİSTEM PROJESİ',
      videoTab: 'Robot Videosu',
      galleryTab: 'Fotoğraf Galerisi (3)',
      scopeHeading: 'Proje Kapsamı & Özellikler',
      challengesHeading: 'Öne Çıkan Mühendislik Zorlukları',
      challengesText: '8 servonun eşzamanlı PWM kontrolünde gerilim dalgalanmalarını önlemek için çift raylı güç regülasyonu tasarlandı. Ters kinematik (IK) fonksiyonları ile ayak uçlarının x-y-z koordinatları gerçek zamanlı açı komutlarına çevrildi.',
      specsHeading: 'Donanım & Mimari Spesifikasyonları',
      lightboxOf: '/',
      loopCaption: 'Demonstrasyon:'
    },
    experience: {
      kicker: 'KARİYER & PROFESYONEL DENEYİM',
      title: 'İş Deneyimi & Stajlar',
      desc: 'Ar-Ge elektrik motoru testlerinden kamu bilgi teknolojilerine, gerçek zamanlı gömülü çevre birimlerinden elektrik dağıtım şebekesine uzanan uygulamalı mühendislik geçmişi.',
      filterAll: 'Tüm Deneyimler (5)',
      filterRd: 'Ar-Ge / Volt WEG',
      filterEmbedded: 'Gömülü Sistemler',
      filterIt: 'Bilişim & Python',
      filterGrid: 'Elektrik & Şebeke'
    },
    education: {
      kicker: 'AKADEMİK GEÇMİŞ & YETKİNLİK MATRİSİ',
      title: 'Eğitim, Yetkinlikler & Diller',
      focusLabel: 'Mühendislik Odak Alanları',
      pillar1Title: 'Gömülü Sistemler & Mikroişlemciler',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ firmware, SPI/I2C/UART veri yolu mimarisi',
      pillar2Title: 'Güç Elektroniği & Sürücüler',
      pillar2Desc: 'Motor PWM kontrolü, IEC S1/S3 yük testleri, çift raylı DC-DC regülasyonu',
      pillar3Title: 'Aviyonik Teknolojileri & Kontrol',
      pillar3Desc: 'TEI Motor Okulu, MathWorks Simulink/Control Design, kinematik',
      techSkillsTitle: 'Teknik ve Yazılım Yetkinlikleri',
      profQualitiesTitle: 'Mesleki Nitelikler',
      languagesTitle: 'Yabancı Diller'
    },
    certs: {
      kicker: 'SERTİFİKALAR & AKREDİTASYONLAR',
      title: 'Kurslar & Sertifikalar',
      desc: 'TUSAŞ Motor Sanayii (TEI), MathWorks, Bilgeiş ve Udemy onaylı teknik uzmanlık belgeleri.',
      countBadge: '7 Doğrulanmış Sertifika',
      completed: 'Tamamlandı',
      popupPrompt: 'Açıklama için kartın üzerine gelin veya tıklayın',
      clickToView: 'Açıklamayı incele',
      closePopup: 'Kapat'
    },
    references: {
      kicker: 'AKADEMİK & ENDÜSTRİYEL REFERANSLAR',
      title: 'Referanslar',
      desc: 'Akademik danışmanlar ve sektör liderlerinden doğrudan teyit edilebilir referans bilgileri.',
      refIndex: 'REFERANS',
      copyEmail: 'E-postayı Kopyala',
      directEmail: 'Doğrudan E-posta İletişimi'
    },
    contact: {
      badge: 'DOĞRUDAN İLETİŞİM',
      title: 'Bana Ulaşın',
      desc: 'Gömülü yazılım geliştirme, elektrik-elektronik mühendisliği veya aviyonik projeleri için aşağıdaki form üzerinden veya doğrudan e-posta/LinkedIn ile iletişime geçebilirsiniz.',
      emailLabel: 'E-POSTA ADRESİ',
      emailAction: 'E-posta Gönder',
      linkedinLabel: 'PROFESYONEL AĞ',
      linkedinAction: 'LinkedIn Profilini Aç',
      responseSpeed: 'Hızlı dönüş süresi (Genellikle 24 saat içinde)',
      formTitle: 'Mesaj Gönderin',
      formSubtitle: 'Formu doldurduğunuzda bilgileriniz otomatik olarak e-posta uygulamanıza aktarılacaktır.',
      nameField: 'Adınız Soyadınız *',
      emailField: 'E-posta Adresiniz *',
      companyField: 'Şirket / Kurum (İsteğe Bağlı)',
      subjectField: 'Konu / Pozisyon *',
      messageField: 'Mesajınız *',
      namePlaceholder: 'Örn: Ahmet Yılmaz',
      emailPlaceholder: 'ornek@sirket.com',
      companyPlaceholder: 'Örn: TUSAŞ / Roketsan',
      subjectPlaceholder: 'Gömülü Yazılım / Aviyonik Pozisyonu',
      messagePlaceholder: 'Görüşme talebiniz, proje detayları veya işbirliği teklifiniz...',
      requiredNote: '* Zorunlu alanlar',
      submitButton: 'Mesajı Gönder',
      successTitle: 'Mesajınız Hazırlandı!',
      successDesc: 'E-posta istemciniz mesaj taslağıyla birlikte açıldı. kahramanyagmur178@gmail.com adresine doğrudan gönderebilirsiniz.',
      sendAnother: 'Yeni Mesaj Yaz'
    },
    footer: {
      allRights: 'Tüm hakları saklıdır.',
      backToTop: 'Yukarı Çık'
    }
  },

  de: {
    nav: {
      about: 'Über mich',
      dogduino: 'Dogduino Projekt',
      experience: 'Erfahrung',
      education: 'Ausbildung & Skills',
      certifications: 'Zertifikate',
      references: 'Referenzen',
      contact: 'Kontakt'
    },
    hero: {
      kicker: 'ELEKTRO- UND ELEKTRONIKINGENIEURWESEN',
      subKicker: 'OSTIM TECHNISCHE UNIVERSITÄT',
      summaryLabel: 'Berufliches Profil',
      activeEngineering: 'Aktiver Ingenieurstatus',
      viewDogduino: 'Dogduino Projekt ansehen',
      contactMe: 'Kontakt aufnehmen',
      kpis: {
        internships: 'Praktika & Erfahrungen',
        internshipsSub: 'Volt WEG, Präsidentschaft IT, Cisco, Gdz, Uptech',
        quadruped: 'Dogduino Laufroboter',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Kinematik',
        certs: 'Akkreditierte Zertifikate',
        certsSub: 'TEI Luftfahrt, MathWorks, Bilgeiş, SAP',
        languages: 'Sprachkenntnisse',
        languagesSub: 'Englisch (Technisch) & Russisch'
      }
    },
    dogduino: {
      badge: 'AUSGEWÄHLTES ROBOTIK- & EMBEDDED-PROJEKT',
      videoTab: 'Demo-Video',
      galleryTab: 'Fotogalerie (3)',
      scopeHeading: 'Projektumfang & Merkmale',
      challengesHeading: 'Ingenieurtechnische Schwerpunkte',
      challengesText: 'Zweischienen-Stromversorgungsisolation implementiert, um Spannungseinbrüche bei paralleler Ansteuerung von 8 Servos zu verhindern. Inverse Kinematik-Algorithmen berechnen Echtzeit-Schrittzyklen.',
      specsHeading: 'Hardware- & Systemspezifikationen',
      lightboxOf: 'von',
      loopCaption: 'Demonstration:'
    },
    experience: {
      kicker: 'BERUFLICHE LAUFBAHN',
      title: 'Berufserfahrung',
      desc: 'Praxiserfahrung von IEC-Elektromotorentests über Hochsicherheits-Webportale bis hin zu Echtzeit-Sensortreibern und Energieverteilnetzen.',
      filterAll: 'Alle (5)',
      filterRd: 'F&E / Volt WEG',
      filterEmbedded: 'Embedded Systems',
      filterIt: 'IT & Python',
      filterGrid: 'Elektrik & Netz'
    },
    education: {
      kicker: 'AKADEMISCHER WERDEGANG & FÄHIGKEITEN',
      title: 'Ausbildung, Fähigkeiten & Sprachen',
      focusLabel: 'Schwerpunkte',
      pillar1Title: 'Eingebettete Systeme & Mikrocontroller',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ Firmware, SPI/I2C/UART Bus-Architektur',
      pillar2Title: 'Leistungselektronik & Antriebe',
      pillar2Desc: 'Motor-PWM-Steuerung, IEC S1/S3 Lastprüfungen, DC-DC-Regelung',
      pillar3Title: 'Avionik-Technologien & Regelungstechnik',
      pillar3Desc: 'TEI Triebwerksschule, MathWorks Simulink/Regelungstechnik',
      techSkillsTitle: 'Technische & Software-Fähigkeiten',
      profQualitiesTitle: 'Persönliche Stärken',
      languagesTitle: 'Sprachen'
    },
    certs: {
      kicker: 'KURSE & ZERTIFIZIERUNGEN',
      title: 'Zertifikate & Abschlüsse',
      desc: 'Akkreditierte Weiterbildungen von TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş und Udemy.',
      countBadge: '7 Zertifikate',
      completed: 'Abgeschlossen',
      popupPrompt: 'Mit der Maus über die Karte fahren für Details',
      clickToView: 'Beschreibung ansehen',
      closePopup: 'Schließen'
    },
    references: {
      kicker: 'REFERENZEN & GUTACHTEN',
      title: 'Referenzen',
      desc: 'Verifizierbare Empfehlungen von Fachbereichsleitern und Führungskräften der Leistungselektronik.',
      refIndex: 'REFERENZ',
      copyEmail: 'E-Mail kopieren',
      directEmail: 'Direkter E-Mail-Kontakt'
    },
    contact: {
      badge: 'DIREKTE KOMMUNIKATION',
      title: 'Kontakt aufnehmen',
      desc: 'Offen für Positionen in Embedded Firmware, Avionik und Robotik. Schreiben Sie mir über das Formular oder direkt per E-Mail/LinkedIn.',
      emailLabel: 'E-MAIL ADRESSE',
      emailAction: 'E-Mail senden',
      linkedinLabel: 'BERUFLICHES NETZWERK',
      linkedinAction: 'LinkedIn-Profil öffnen',
      responseSpeed: 'Schnelle Antwortzeit (In der Regel innerhalb von 24h)',
      formTitle: 'Nachricht senden',
      formSubtitle: 'Füllen Sie das Formular aus, um eine Anfrage an Yağmur Kahraman zu richten.',
      nameField: 'Ihr vollständiger Name *',
      emailField: 'Ihre E-Mail-Adresse *',
      companyField: 'Unternehmen / Institution',
      subjectField: 'Betreff / Position *',
      messageField: 'Ihre Nachricht *',
      namePlaceholder: 'z.B. Max Mustermann',
      emailPlaceholder: 'name@firma.de',
      companyPlaceholder: 'z.B. Luft- & Raumfahrt AG',
      subjectPlaceholder: 'Anfrage Embedded Firmware / Avionik',
      messagePlaceholder: 'Details zu Position, Projekt oder Zusammenarbeit...',
      requiredNote: '* Pflichtfelder',
      submitButton: 'Nachricht senden',
      successTitle: 'Nachricht vorbereitet!',
      successDesc: 'Ihr E-Mail-Programm wurde mit der vorformatierten Nachricht an kahramanyagmur178@gmail.com geöffnet.',
      sendAnother: 'Weitere Nachricht senden'
    },
    footer: {
      allRights: 'Alle Rechte vorbehalten.',
      backToTop: 'Nach oben'
    }
  },

  ru: {
    nav: {
      about: 'Обо мне',
      dogduino: 'Проект Dogduino',
      experience: 'Опыт работы',
      education: 'Образование и навыки',
      certifications: 'Сертификаты',
      references: 'Рекомендации',
      contact: 'Контакты'
    },
    hero: {
      kicker: 'ИНЖЕНЕРИЯ ЭЛЕКТРИКИ И ЭЛЕКТРОНИКИ',
      subKicker: 'ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ОСТИМ',
      summaryLabel: 'Профиль специалиста',
      activeEngineering: 'Инженерный статус: активный',
      viewDogduino: 'Смотреть проект Dogduino',
      contactMe: 'Связаться со мной',
      kpis: {
        internships: 'Стажировки и опыт',
        internshipsSub: 'Volt WEG, Администрация Президента, Cisco, Gdz, Uptech',
        quadruped: 'Робот-четвероног Dogduino',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth и кинематика',
        certs: 'Сертифицированные курсы',
        certsSub: 'TEI Aviation, MathWorks, Bilgeiş, SAP',
        languages: 'Знание языков',
        languagesSub: 'Английский (технический) и русский'
      }
    },
    dogduino: {
      badge: 'ПРОЕКТ В ОБЛАСТИ РОБОТОТЕХНИКИ И ВСТРАИВАЕМЫХ СИСТЕМ',
      videoTab: 'Видео демонстрации',
      galleryTab: 'Фотогалерея (3)',
      scopeHeading: 'Масштаб проекта и характеристики',
      challengesHeading: 'Ключевые инженерные задачи',
      challengesText: 'Спроектирована двухканальная система питания для предотвращения просадок напряжения при одновременной работе 8 сервоприводов. Реализованы алгоритмы инверсной кинематики.',
      specsHeading: 'Спецификации оборудования и архитектуры',
      lightboxOf: 'из',
      loopCaption: 'Демонстрация:'
    },
    experience: {
      kicker: 'ПРОФЕССИОНАЛЬНЫЙ ОПЫТ',
      title: 'Опыт работы и стажировки',
      desc: 'Практический опыт: от нагрузочных тестов электродвигателей по стандарту IEC до государственных порталов, сенсорных драйверов и распределительных электросетей.',
      filterAll: 'Все (5)',
      filterRd: 'НИОКР / Volt WEG',
      filterEmbedded: 'Встраиваемые системы',
      filterIt: 'ИТ и Python',
      filterGrid: 'Электросети'
    },
    education: {
      kicker: 'АКАДЕМИЧЕСКАЯ БАЗА И НАВЫКИ',
      title: 'Образование, навыки и языки',
      focusLabel: 'Инженерная специализация',
      pillar1Title: 'Встраиваемые системы и микроконтроллеры',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ прошивки, интерфейсы SPI/I2C/UART',
      pillar2Title: 'Силовая электроника и электропривод',
      pillar2Desc: 'ШИМ-управление, испытания IEC S1/S3, импульсная стабилизация',
      pillar3Title: 'Авионика и системы управления',
      pillar3Desc: 'Школа авиационных двигателей TEI, MathWorks Simulink',
      techSkillsTitle: 'Технические и программные навыки',
      profQualitiesTitle: 'Профессиональные качества',
      languagesTitle: 'Языки'
    },
    certs: {
      kicker: 'СЕРТИФИКАЦИИ И КУРСЫ',
      title: 'Курсы и сертификаты',
      desc: 'Сертифицированные программы от TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş и Udemy.',
      countBadge: '7 сертификатов',
      completed: 'Завершено',
      popupPrompt: 'Наведите курсор или нажмите на карточку для описания',
      clickToView: 'Подробнее о курсе',
      closePopup: 'Закрыть'
    },
    references: {
      kicker: 'РЕКОМЕНДАТЕЛЬНЫЕ ПИСЬМА',
      title: 'Рекомендации',
      desc: 'Официальные контакты руководства кафедры и промышленных руководителей.',
      refIndex: 'РЕКОМЕНДАЦИЯ',
      copyEmail: 'Скопировать e-mail',
      directEmail: 'Прямая связь по e-mail'
    },
    contact: {
      badge: 'ПРЯМАЯ СВЯЗЬ',
      title: 'Связаться со мной',
      desc: 'Открыта для предложений в сфере встраиваемых систем, авионики и робототехники. Отправьте сообщение через форму или напрямую по почте/LinkedIn.',
      emailLabel: 'ЭЛЕКТРОННАЯ ПОЧТА',
      emailAction: 'Написать на e-mail',
      linkedinLabel: 'ПРОФЕССИОНАЛЬНАЯ СЕТЬ',
      linkedinAction: 'Профиль LinkedIn',
      responseSpeed: 'Быстрый ответ (обычно в течение 24 часов)',
      formTitle: 'Отправить сообщение',
      formSubtitle: 'Заполните форму для отправки прямого запроса Ягмур Кахраман.',
      nameField: 'Ваше имя *',
      emailField: 'Ваш e-mail *',
      companyField: 'Компания / Организация',
      subjectField: 'Тема / Должность *',
      messageField: 'Ваше сообщение *',
      namePlaceholder: 'Иван Иванов',
      emailPlaceholder: 'name@company.ru',
      companyPlaceholder: 'Авиационная компания',
      subjectPlaceholder: 'Вакансия: Инженер встраиваемых систем',
      messagePlaceholder: 'Детали предложения, проект или тема для обсуждения...',
      requiredNote: '* Обязательные поля',
      submitButton: 'Отправить сообщение',
      successTitle: 'Сообщение подготовлено!',
      successDesc: 'Почтовый клиент открыт с готовым письмом для kahramanyagmur178@gmail.com.',
      sendAnother: 'Написать еще одно сообщение'
    },
    footer: {
      allRights: 'Все права защищены.',
      backToTop: 'Наверх'
    }
  },

  sv: {
    nav: {
      about: 'Om mig',
      dogduino: 'Dogduino Projekt',
      experience: 'Erfarenhet',
      education: 'Utbildning & Kompetens',
      certifications: 'Certifieringar',
      references: 'Referenser',
      contact: 'Kontakt'
    },
    hero: {
      kicker: 'ELEKTRO- OCH ELEKTRONIKINGENJÖR',
      subKicker: 'OSTIM TEKNISKA UNIVERSITET',
      summaryLabel: 'Yrkesprofil',
      activeEngineering: 'Aktiv ingenjörsstatus',
      viewDogduino: 'Visa Dogduino-projektet',
      contactMe: 'Kontakta mig',
      kpis: {
        internships: 'Praktikplatser & Erfarenhet',
        internshipsSub: 'Volt WEG, Regeringskansli IT, Cisco, Gdz, Uptech',
        quadruped: 'Dogduino Fyrbent Robot',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Kinematik',
        certs: 'Ackrediterade certifikat',
        certsSub: 'TEI Aviation, MathWorks, Bilgeiş, SAP',
        languages: 'Språkkunskaper',
        languagesSub: 'Engelska (Teknisk) & Ryska'
      }
    },
    dogduino: {
      badge: 'UTVALT ROBOTIK- & EMBEDDED-PROJEKT',
      videoTab: 'Demovideo',
      galleryTab: 'Fotogalleri (3)',
      scopeHeading: 'Projektomfattning & Funktioner',
      challengesHeading: 'Tekniska Höjdpunkter',
      challengesText: 'Konstruerade tvåspårs strömförsörjningsisolering för att eliminera spänningsfall under samtidig styrning av 8 servon. Invers kinematik beräknar dynamiska gångmönster i realtid.',
      specsHeading: 'Hårdvaru- & Systemsatsning',
      lightboxOf: 'av',
      loopCaption: 'Demonstration:'
    },
    experience: {
      kicker: 'YRKESERFARENHET',
      title: 'Arbetslivserfarenhet',
      desc: 'Praktisk ingenjörsbakgrund från IEC-testning av elmotorer och säkerhetsportaler till sensordrivrutiner och eldistributionsnät.',
      filterAll: 'Alla (5)',
      filterRd: 'FoU / Volt WEG',
      filterEmbedded: 'Inbyggda system',
      filterIt: 'IT & Python',
      filterGrid: 'Elnät'
    },
    education: {
      kicker: 'AKADEMISK BAKGRUND & KOMPETENSER',
      title: 'Utbildning, Kompetenser & Språk',
      focusLabel: 'Ingenjörsfokus',
      pillar1Title: 'Inbyggda system & Mikrokontrollers',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ firmware, SPI/I2C/UART bus-arkitektur',
      pillar2Title: 'Kraftelektronik & Drivsystem',
      pillar2Desc: 'PWM-motorstyrning, IEC S1/S3 lasttester, DC-DC-reglering',
      pillar3Title: 'Avionik & Reglerteknik',
      pillar3Desc: 'TEI Flygmotorskola, MathWorks Simulink/Reglerteknik',
      techSkillsTitle: 'Tekniska & Programvarufärdigheter',
      profQualitiesTitle: 'Professionella Egenskaper',
      languagesTitle: 'Språk'
    },
    certs: {
      kicker: 'KURSER & CERTIFIERINGAR',
      title: 'Kurser & Certifikat',
      desc: 'Ackrediterade certifikat från TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş och Udemy.',
      countBadge: '7 Verifierade Certifikat',
      completed: 'Slutförd',
      popupPrompt: 'Håll muspekaren över kortet för beskrivning',
      clickToView: 'Visa kursbeskrivning',
      closePopup: 'Stäng'
    },
    references: {
      kicker: 'AKADEMISKA & INDUSTRIELLA REFERENSER',
      title: 'Referenser',
      desc: 'Verifierbara referenser från institutionsledare och kraftelektronikchefer.',
      refIndex: 'REFERENS',
      copyEmail: 'Kopiera e-post',
      directEmail: 'Direkt e-postkorrespondens'
    },
    contact: {
      badge: 'DIREKTKONTAKT',
      title: 'Ta kontakt',
      desc: 'Tillgänglig för uppdrag inom inbyggd mjukvara, avionik och robotik. Kontakta mig via formuläret eller via LinkedIn och e-post.',
      emailLabel: 'E-POSTADRESS',
      emailAction: 'Skicka e-post',
      linkedinLabel: 'PROFESSIONELLT NÄTVERK',
      linkedinAction: 'Besök LinkedIn-profil',
      responseSpeed: 'Snabb svarstid (vanligtvis inom 24 timmar)',
      formTitle: 'Skicka ett meddelande',
      formSubtitle: 'Fyll i dina uppgifter nedan för att skicka en förfrågan direkt till Yağmur Kahraman.',
      nameField: 'Ditt namn *',
      emailField: 'Din e-postadress *',
      companyField: 'Företag / Organisation',
      subjectField: 'Ämne / Roll *',
      messageField: 'Ditt meddelande *',
      namePlaceholder: 't.ex. Anna Svensson',
      emailPlaceholder: 'namn@foretag.se',
      companyPlaceholder: 't.ex. Flygteknik AB',
      subjectPlaceholder: 'Förfrågan inbyggd mjukvara / avionik',
      messagePlaceholder: 'Information om roll, projekt eller samarbete...',
      requiredNote: '* Obligatoriska fält',
      submitButton: 'Skicka meddelande',
      successTitle: 'Meddelandet klart!',
      successDesc: 'Ditt e-postprogram har öppnats med ett formaterat utkast till kahramanyagmur178@gmail.com.',
      sendAnother: 'Skicka ett till meddelande'
    },
    footer: {
      allRights: 'Alla rättigheter förbehållna.',
      backToTop: 'Till toppen'
    }
  },

  zh: {
    nav: {
      about: '关于我',
      dogduino: 'Dogduino 机器狗',
      experience: '工作经历',
      education: '教育与技能',
      certifications: '专业证书',
      references: '专业推荐人',
      contact: '联系方式'
    },
    hero: {
      kicker: '电气与电子工程专业',
      subKicker: '奥斯汀技术大学 (OSTIM TECH)',
      summaryLabel: '专业简历概览',
      activeEngineering: '工程就绪状态',
      viewDogduino: '查看 Dogduino 四足机器人',
      contactMe: '与我联系',
      kpis: {
        internships: '专业实习与实践',
        internshipsSub: 'Volt WEG, 总统府信息署, Cisco, Gdz, Uptech',
        quadruped: 'Dogduino 四足机器人',
        quadrupedSub: 'ESP32, PCA9685, 蓝牙与逆运动学',
        certs: '官方专业认证',
        certsSub: 'TEI 航空动力, MathWorks, Bilgeiş, SAP',
        languages: '语言能力',
        languagesSub: '英语 (专业技术级) 与 俄语'
      }
    },
    dogduino: {
      badge: '精选机器人与嵌入式系统项目',
      videoTab: '演示视频',
      galleryTab: '实物图集 (3)',
      scopeHeading: '项目范围与核心功能',
      challengesHeading: '重点工程攻关',
      challengesText: '设计双轨隔离供电系统，消除8路舵机同时工作时的电压跌落。建立逆运动学闭环解析模型，将足端三维轨迹实时转化为PWM角度控制信号。',
      specsHeading: '硬件与系统参数规范',
      lightboxOf: '/',
      loopCaption: '实机步态演示：'
    },
    experience: {
      kicker: '职业与工程经历',
      title: '工作与实习经历',
      desc: '工程实践涵盖电机 IEC 负载测试、高安全级别政府门户系统、实时传感器总线驱动以及国家电网计量检定。',
      filterAll: '全部经历 (5)',
      filterRd: '研发 / Volt WEG',
      filterEmbedded: '嵌入式系统',
      filterIt: 'IT 与 Python 开发',
      filterGrid: '电力与电网'
    },
    education: {
      kicker: '学术背景与技能矩阵',
      title: '教育经历、专业技能与语言',
      focusLabel: '主要工程方向',
      pillar1Title: '嵌入式系统与微控制器',
      pillar1Desc: 'ESP32, ARM/STM32, C/C++ 固件开发, SPI/I2C/UART 总线架构',
      pillar2Title: '电力电子与电机驱动',
      pillar2Desc: '电机 PWM 驱动, IEC S1/S3 连续/间歇负载测试, DC-DC 稳压',
      pillar3Title: '航空电子与现代控制理论',
      pillar3Desc: 'TEI 航空发动机学院, MathWorks 控制器设计, 机器人动力学',
      techSkillsTitle: '技术与软件工具',
      profQualitiesTitle: '职业素养',
      languagesTitle: '掌握语言'
    },
    certs: {
      kicker: '专业培训与认证',
      title: '课程与证书',
      desc: '获得来自土耳其发动机工业公司 (TEI)、MathWorks、Bilgeiş 和 Udemy 的官方技术资质。',
      countBadge: '7 项权威认证',
      completed: '已获得',
      popupPrompt: '鼠标悬停或点击卡片查看详细内容',
      clickToView: '查看课程简介',
      closePopup: '关闭'
    },
    references: {
      kicker: '学术导师与工业界推荐',
      title: '推荐人',
      desc: '由系主任、电力电子公司创始人兼总经理等行业专家直接背书。',
      refIndex: '推荐人',
      copyEmail: '复制电子邮箱',
      directEmail: '通过官方邮箱联系'
    },
    contact: {
      badge: '即时联络',
      title: '与我联系',
      desc: '随时欢迎关于嵌入式固件开发、航空电子系统以及四足机器人研发的工作机会与项目合作。',
      emailLabel: '电子邮箱',
      emailAction: '发送邮件',
      linkedinLabel: '职业社交网络',
      linkedinAction: '访问领英个人主页',
      responseSpeed: '快速响应 (通常在24小时以内回复)',
      formTitle: '发送消息',
      formSubtitle: '填写下方表单，即可直接向 Yağmur Kahraman 发送工作或项目意向。',
      nameField: '您的姓名 *',
      emailField: '您的电子邮箱 *',
      companyField: '所属公司 / 机构 (选填)',
      subjectField: '主题 / 职位意向 *',
      messageField: '消息内容 *',
      namePlaceholder: '例如：张伟',
      emailPlaceholder: 'name@company.com',
      companyPlaceholder: '例如：航空航天集团',
      subjectPlaceholder: '嵌入式固件工程师 / 航空电子职位咨询',
      messagePlaceholder: '职位描述、面试安排或合作需求...',
      requiredNote: '* 必填项目',
      submitButton: '发送邮件',
      successTitle: '邮件已就绪！',
      successDesc: '已为您调起本地邮件客户端并填入预设内容，收件人为 kahramanyagmur178@gmail.com。',
      sendAnother: '发送其他消息'
    },
    footer: {
      allRights: '版权所有。',
      backToTop: '回到顶部'
    }
  },

  fr: {
    nav: {
      about: 'À propos',
      dogduino: 'Projet Dogduino',
      experience: 'Expérience',
      education: 'Formation & Compétences',
      certifications: 'Certifications',
      references: 'Références',
      contact: 'Contact'
    },
    hero: {
      kicker: 'GÉNIE ÉLECTRIQUE ET ÉLECTRONIQUE',
      subKicker: 'UNIVERSITÉ TECHNIQUE OSTIM',
      summaryLabel: 'Profil Professionnel',
      activeEngineering: 'Statut Ingénieur Actif',
      viewDogduino: 'Voir le projet Dogduino',
      contactMe: 'Me contacter',
      kpis: {
        internships: 'Stages & Expérience',
        internshipsSub: 'Volt WEG, Présidence IT, Cisco, Gdz, Uptech',
        quadruped: 'Robot Quadrupède Dogduino',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Cinématique',
        certs: 'Certifications Accréditées',
        certsSub: 'TEI Aviation, MathWorks, Bilgeiş, SAP',
        languages: 'Langues',
        languagesSub: 'Anglais (Technique) & Russe'
      }
    },
    dogduino: {
      badge: 'PROJET ROBOTIQUE & SYSTÈMES EMBARQUÉS',
      videoTab: 'Vidéo de Démo',
      galleryTab: 'Galerie Photos (3)',
      scopeHeading: 'Portée du projet & Fonctionnalités',
      challengesHeading: 'Points Clés de Conception',
      challengesText: 'Architecture d’alimentation régulée à deux rails pour prévenir les chutes de tension lors du mouvement coordonné des 8 servomoteurs. Modélisation de cinématique inverse en temps réel.',
      specsHeading: 'Spécifications Matérielles et Système',
      lightboxOf: 'sur',
      loopCaption: 'Démonstration :'
    },
    experience: {
      kicker: 'PARCOURS PROFESSIONNEL',
      title: 'Expérience Professionnelle',
      desc: 'Expérience pratique allant des essais de charge IEC de moteurs électriques aux applications sécurisées et réseaux de distribution électrique.',
      filterAll: 'Tous les rôles (5)',
      filterRd: 'R&D / Volt WEG',
      filterEmbedded: 'Systèmes Embarqués',
      filterIt: 'IT & Python',
      filterGrid: 'Électrique & Réseaux'
    },
    education: {
      kicker: 'PARCOURS ACADÉMIQUE & COMPÉTENCES',
      title: 'Formation, Compétences & Langues',
      focusLabel: 'Axes d’Ingénierie',
      pillar1Title: 'Systèmes Embarqués & Microcontrôleurs',
      pillar1Desc: 'ESP32, ARM/STM32, firmware C/C++, protocoles SPI/I2C/UART',
      pillar2Title: 'Électronique de Puissance & Entraînements',
      pillar2Desc: 'Contrôle PWM moteur, essais de charge IEC S1/S3, régulation DC-DC',
      pillar3Title: 'Avionique & Systèmes de Commande',
      pillar3Desc: 'École des moteurs TEI, MathWorks Simulink/Contrôle',
      techSkillsTitle: 'Compétences Techniques & Logicielles',
      profQualitiesTitle: 'Qualités Professionnelles',
      languagesTitle: 'Langues'
    },
    certs: {
      kicker: 'FORMATIONS & ACCRÉDITATIONS',
      title: 'Cours & Certifications',
      desc: 'Certificats délivrés par TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş et Udemy.',
      countBadge: '7 Certifications Validées',
      completed: 'Obtenu',
      popupPrompt: 'Survolez ou appuyez pour afficher la description',
      clickToView: 'Voir la description',
      closePopup: 'Fermer'
    },
    references: {
      kicker: 'RÉFÉRENCES PROFESSIONNELLES',
      title: 'Références',
      desc: 'Témoignages vérifiables de chefs de département et de dirigeants industriels.',
      refIndex: 'RÉFÉRENCE',
      copyEmail: 'Copier l’e-mail',
      directEmail: 'Correspondance directe par e-mail'
    },
    contact: {
      badge: 'COMMUNICATION DIRECTE',
      title: 'Prendre contact',
      desc: 'Disponible pour des opportunités en développement firmware embarqué, avionique et robotique. Contactez-moi par formulaire, e-mail ou LinkedIn.',
      emailLabel: 'ADRESSE E-MAIL',
      emailAction: 'Envoyer un e-mail',
      linkedinLabel: 'RÉSEAU PROFESSIONNEL',
      linkedinAction: 'Profil LinkedIn',
      responseSpeed: 'Temps de réponse rapide (Généralement sous 24h)',
      formTitle: 'Envoyer un message',
      formSubtitle: 'Remplissez le formulaire ci-dessous pour transmettre une demande à Yağmur Kahraman.',
      nameField: 'Votre Nom *',
      emailField: 'Votre E-mail *',
      companyField: 'Entreprise / Organisation',
      subjectField: 'Objet / Poste *',
      messageField: 'Votre Message *',
      namePlaceholder: 'ex. Marie Dupont',
      emailPlaceholder: 'nom@entreprise.fr',
      companyPlaceholder: 'ex. Groupe Aérospatial',
      subjectPlaceholder: 'Offre Ingénieur Firmware Embarqué / Avionique',
      messagePlaceholder: 'Détails du poste, calendrier d’entretien ou opportunité de projet...',
      requiredNote: '* Champs obligatoires',
      submitButton: 'Envoyer le message',
      successTitle: 'Message préparé !',
      successDesc: 'Votre messagerie a été ouverte avec l’ébauche adressée à kahramanyagmur178@gmail.com.',
      sendAnother: 'Envoyer un autre message'
    },
    footer: {
      allRights: 'Tous droits réservés.',
      backToTop: 'Haut de page'
    }
  },

  it: {
    nav: {
      about: 'Chi sono',
      dogduino: 'Progetto Dogduino',
      experience: 'Esperienza',
      education: 'Formazione & Competenze',
      certifications: 'Certificazioni',
      references: 'Referenze',
      contact: 'Contatto'
    },
    hero: {
      kicker: 'INGEGNERIA ELETTRICA ED ELETTRONICA',
      subKicker: 'UNIVERSITÀ TECNICA OSTIM',
      summaryLabel: 'Profilo Professionale',
      activeEngineering: 'Stato di Ingegnere Attivo',
      viewDogduino: 'Vedi Progetto Dogduino',
      contactMe: 'Contattami',
      kpis: {
        internships: 'Tirocini & Esperienze',
        internshipsSub: 'Volt WEG, Presidenza IT, Cisco, Gdz, Uptech',
        quadruped: 'Robot Quadrupede Dogduino',
        quadrupedSub: 'ESP32, PCA9685, Bluetooth & Cinematica',
        certs: 'Certificazioni Accreditate',
        certsSub: 'TEI Aviazione, MathWorks, Bilgeiş, SAP',
        languages: 'Competenze Linguistiche',
        languagesSub: 'Inglese (Tecnico) & Russo'
      }
    },
    dogduino: {
      badge: 'PROGETTO IN EVIDENZA: ROBOTICA & EMBEDDED',
      videoTab: 'Video Demo',
      galleryTab: 'Galleria Foto (3)',
      scopeHeading: 'Ambito del Progetto & Funzionalità',
      challengesHeading: 'Principali Sfide Ingegneristiche',
      challengesText: 'Progettazione di alimentazione isolata a doppio binario per evitare cali di tensione durante l’azionamento contemporaneo degli 8 servomotori. Algoritmi di cinematica inversa in tempo reale.',
      specsHeading: 'Specifiche Hardware e di Sistema',
      lightboxOf: 'di',
      loopCaption: 'Dimostrazione:'
    },
    experience: {
      kicker: 'PERCORSO PROFESSIONALE',
      title: 'Esperienza Lavorativa',
      desc: 'Esperienza pratica dai test di carico IEC per motori elettrici a portali ad alta sicurezza, driver sensori in tempo reale e reti di distribuzione.',
      filterAll: 'Tutte le esperienze (5)',
      filterRd: 'R&S / Volt WEG',
      filterEmbedded: 'Sistemi Embedded',
      filterIt: 'IT & Python',
      filterGrid: 'Elettrico & Rete'
    },
    education: {
      kicker: 'FORMAZIONE & MATRICE COMPETENZE',
      title: 'Istruzione, Competenze & Lingue',
      focusLabel: 'Focus Ingegneristico',
      pillar1Title: 'Sistemi Embedded & Microcontrollori',
      pillar1Desc: 'ESP32, ARM/STM32, firmware C/C++, architettura bus SPI/I2C/UART',
      pillar2Title: 'Elettronica di Potenza & Azionamenti',
      pillar2Desc: 'Controllo PWM motori, prove di carico IEC S1/S3, regolazione DC-DC',
      pillar3Title: 'Avionica & Teoria del Controllo',
      pillar3Desc: 'Scuola Motori Aeronautici TEI, MathWorks Simulink/Controlli',
      techSkillsTitle: 'Competenze Tecniche & Software',
      profQualitiesTitle: 'Qualità Professionali',
      languagesTitle: 'Lingue'
    },
    certs: {
      kicker: 'CORSI & ACCREDITAMENTI',
      title: 'Corsi & Certificazioni',
      desc: 'Certificazioni ufficiali rilasciate da TUSAŞ Engine Industries (TEI), MathWorks, Bilgeiş e Udemy.',
      countBadge: '7 Certificazioni Verificate',
      completed: 'Completato',
      popupPrompt: 'Passa il cursore o tocca per visualizzare la descrizione',
      clickToView: 'Visualizza descrizione',
      closePopup: 'Chiudi'
    },
    references: {
      kicker: 'REFERENZE PROFESSIONALI',
      title: 'Referenze',
      desc: 'Contatti verificabili di direttori di dipartimento e dirigenti del settore dell’elettronica di potenza.',
      refIndex: 'REFERENZA',
      copyEmail: 'Copia e-mail',
      directEmail: 'Contatto e-mail diretto'
    },
    contact: {
      badge: 'COMUNICAZIONE DIRETTA',
      title: 'Contattami',
      desc: 'Disponibile per opportunità in firmware embedded, ingegneria avionica e robotica. Contattami tramite il modulo o direttamente via e-mail e LinkedIn.',
      emailLabel: 'INDIRIZZO E-MAIL',
      emailAction: 'Invia e-mail',
      linkedinLabel: 'NETWORK PROFESSIONALE',
      linkedinAction: 'Profilo LinkedIn',
      responseSpeed: 'Risposta rapida (Normalmente entro 24 ore)',
      formTitle: 'Invia un messaggio',
      formSubtitle: 'Compila il modulo sottostante per inoltrare una richiesta a Yağmur Kahraman.',
      nameField: 'Il tuo Nome e Cognome *',
      emailField: 'La tua E-mail *',
      companyField: 'Azienda / Istituzione',
      subjectField: 'Oggetto / Posizione *',
      messageField: 'Il tuo Messaggio *',
      namePlaceholder: 'es. Marco Rossi',
      emailPlaceholder: 'nome@azienda.it',
      companyPlaceholder: 'es. Azienda Aerospaziale',
      subjectPlaceholder: 'Opportunità Ingegnere Firmware Embedded / Avionica',
      messagePlaceholder: 'Dettagli posizione, disponibilità colloqui o proposta di collaborazione...',
      requiredNote: '* Campi obbligatori',
      submitButton: 'Invia messaggio',
      successTitle: 'Messaggio pronto!',
      successDesc: 'Il tuo client di posta si è aperto con la bozza indirizzata a kahramanyagmur178@gmail.com.',
      sendAnother: 'Invia un altro messaggio'
    },
    footer: {
      allRights: 'Tutti i diritti riservati.',
      backToTop: 'Torna su'
    }
  }
};
