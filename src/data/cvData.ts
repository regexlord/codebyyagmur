import { SupportedLang } from './translations';
import { CertAssetKey } from '../components/ProtectedCertificateCanvas';

export type LocalizedString = Partial<Record<SupportedLang, string>> & { en: string };
export type LocalizedStringList = Partial<Record<SupportedLang, string[]>> & { en: string[] };

export interface WorkExperience {
  company: string;
  role: LocalizedString;
  location: string;
  period: string;
  category: 'embedded' | 'rd' | 'it' | 'electrical';
  points: LocalizedStringList;
}

export interface EducationItem {
  school: string;
  degree: LocalizedString;
  location: string;
  period: string;
  focus: LocalizedString;
}

export interface CertificateAttachment {
  key: CertAssetKey;
  label: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: LocalizedString;
  certificates?: CertificateAttachment[];
}

export interface ReferenceItem {
  name: string;
  title: LocalizedString;
  organization: string;
  email: string;
}

export interface ProjectData {
  title: string;
  institution: string;
  period: string;
  type: LocalizedString;
  summary: LocalizedString;
  points: LocalizedStringList;
  specs: {
    label: LocalizedString;
    value: string;
  }[];
  video: {
    src: string;
    caption: LocalizedString;
  };
  images: {
    src: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export interface AquaTraceData {
  title: string;
  institution: LocalizedString;
  location: string;
  remoteLabel: LocalizedString;
  period: string;
  techLine: string;
  githubUrl: string;
  type: LocalizedString;
  cardSummary: LocalizedString;
  points: LocalizedStringList;
  specs: {
    label: LocalizedString;
    value: string;
  }[];
  images: {
    src: string;
    fallbackName: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export const cvData = {
  personal: {
    name: "YAĞMUR KAHRAMAN",
    title: {
      en: "Electrical & Electronics Engineering | Focused On Embedded Systems",
      tr: "Elektrik & Elektronik Mühendisliği | Gömülü Sistemler Odaklı",
      de: "Elektro- und Elektroniktechnik | Schwerpunkt Eingebettete Systeme",
      ru: "Инженерия электрики и электроники | Специализация: Встраиваемые системы",
      sv: "Elektro- och Elektronikteknik | Fokus på inbyggda system",
      zh: "电气与电子工程专业 | 专注于嵌入式系统",
      fr: "Génie Électrique et Électronique | Spécialisation Systèmes Embarqués",
      it: "Ingegneria Elettrica ed Elettronica | Focalizzata su Sistemi Embedded",
      bg: "Електроинженерство и електроника | Специализация: Вградени системи",
      cs: "Elektrotechnika a elektronika | Zaměření na vestavěné systémy",
      pl: "Elektrotechnika i Elektronika | Specjalizacja: Systemy Wbudowane"
    } as LocalizedString,
    shortTitle: {
      en: "Embedded Systems Engineer",
      tr: "Gömülü Sistemler Mühendisi",
      de: "Ingenieurin für Eingebettete Systeme",
      ru: "Инженер встраиваемых систем",
      sv: "Ingenjör inom inbyggda system",
      zh: "嵌入式系统工程师",
      fr: "Ingénieur Systèmes Embarqués",
      it: "Ingegnere Sistemi Embedded",
      bg: "Инженер по вградени системи",
      cs: "Inženýrka vestavěných systémů",
      pl: "Inżynier Systemów Wbudowanych"
    } as LocalizedString,
    workAuthorization: {
      en: "EU work authorization (Bulgarian citizen)",
      tr: "AB çalışma izni (Bulgaristan vatandaşı)",
      de: "Arbeitsberechtigung in der EU (bulgarische Staatsangehörigkeit)",
      ru: "Право на работу в ЕС (гражданство Болгарии)",
      sv: "Rätt att arbeta inom EU (bulgarisk medborgare)",
      zh: "欧盟工作许可（保加利亚公民）",
      fr: "Autorisation de travail dans l'UE (citoyenne bulgare)",
      it: "Autorizzazione al lavoro nell'UE (cittadina bulgara)",
      bg: "Право на работа в ЕС (българско гражданство)",
      cs: "Oprávnění k práci v EU (bulharské občanství)",
      pl: "Uprawnienie do pracy w UE (obywatelstwo bułgarskie)"
    } as LocalizedString,
    location: "İzmir, Turkey",
    email: "kahramanyagmur178@gmail.com",
    linkedin: "linkedin.com/in/yagmur-kahraman",
    linkedinUrl: "https://www.linkedin.com/in/yagmur-kahraman/",
    website: "regexlord.github.io/codebyyagmur",
    websiteUrl: "https://regexlord.github.io/codebyyagmur/",
    photo: "assets/aistudio/Profesyonel_Kad_n_Portresi_11bf1af2.png",
    profile: {
      en: "Analytical Electrical and Electronics Engineering graduate specializing in embedded firmware development, microcontrollers, and avionics technology. Experienced in dynamic hardware-software integration, automated testing workflows, and cross-functional project management. Committed to deploying reliable engineering solutions for real-world electronic systems.",
      tr: "Gömülü yazılım (firmware) geliştirme, mikrodenetleyiciler ve aviyonik teknolojileri üzerine uzmanlaşan analitik Elektrik ve Elektronik Mühendisi. Dinamik donanım-yazılım entegrasyonu, otomatik test iş akışları ve çok fonksiyonlu proje yönetiminde deneyimli. Gerçek dünya elektronik sistemleri için yüksek güvenilirlikte mühendislik çözümleri üretmeye kararlı.",
      de: "Analytische Absolventin der Elektro- und Elektroniktechnik mit Spezialisierung auf Firmware-Entwicklung, Mikrocontroller und Avionik. Erfahren in dynamischer Hardware-Software-Integration, automatisierten Prüfabläufen und Projektmanagement.",
      ru: "Аналитичный инженер-выпускник по направлению «Электрика и электроника», специализирующаяся на разработке встраиваемого ПО, микроконтроллерах и авионике. Опыт аппаратной интеграции и автоматизированного тестирования.",
      sv: "Analytisk elektro- och elektronikingenjör med inriktning mot inbyggd mjukvara, mikrokontrollers och avionik. Erfarenhet av dynamisk hårdvaru-mjukvaruintegration, automatiserade tester och projektledning.",
      zh: "电气与电子工程专业优秀毕业生，专注于嵌入式底层固件开发、微控制器应用与航空电子技术。熟练掌握动态软硬件集成、自动化测试流水线构建与跨职能工程管理，致力于为实际电子系统交付高可靠工程方案。",
      fr: "Ingénieure diplômée en génie électrique et électronique, spécialisée dans le développement de firmware embarqué, les microcontrôleurs et l'avionique. Expérience en intégration matérielle-logicielle et tests automatisés.",
      it: "Ingegnere elettrico ed elettronico specializzata nello sviluppo di firmware embedded, microcontrollori e avionica. Esperienza nell'integrazione hardware-software dinamica e nei flussi di collaudo automatici.",
      bg: "Аналитичен електроинженер със специализация в разработка на вграден фърмуер, микроконтролери и авиационни технологии. Опит в динамична хардуерно-софтуерна интеграция, автоматизирано тестване и управление на мултидисциплинарни проекти. Отдадена на създаването на надеждни инженерни решения за реални електронни системи.",
      cs: "Analytická absolventka elektrotechniky a elektroniky se specializací na vývoj vestavěného firmwaru, mikrokontroléry a leteckou elektroniku (avioniku). Zkušenosti s dynamickou integrací hardwaru a softwaru, automatizovaným testováním a mezioborovým řízením projektů.",
      pl: "Analityczna absolwentka elektrotechniki i elektroniki specjalizująca się w rozwoju oprogramowania układowego (firmware), mikrokontrolerach i technologii awioniki. Doświadczona w dynamicznej integracji sprzętu i oprogramowania, zautomatyzowanych procesach testowania oraz zarządzaniu projektami."
    } as LocalizedString
  },

  experiences: [
    {
      company: "Volt WEG Group",
      role: {
        en: "R&D Project Management Engineer Intern",
        tr: "Ar-Ge Proje Yönetimi Mühendis Stajyeri",
        de: "F&E Projektmanagement Ingenieur-Praktikantin",
        ru: "Инженер-стажер по управлению проектами НИОКР",
        sv: "FoU Projektledningsingenjör Praktikant",
        zh: "研发项目管理工程实习生",
        fr: "Stagiaire Ingénieure Gestion de Projets R&D",
        it: "Stagista Ingegnere Gestione Progetti R&S",
        cs: "Stážistka v oblasti řízení projektů VaV",
        pl: "Stażystka Inżynier ds. Zarządzania Projektami B+R"
      },
      location: "İzmir, Turkey",
      period: "Sep 2026 – Dec 2026",
      category: "rd",
      points: {
        en: [
          "Conducted IEC standard S1 (continuous duty) and S3 (intermittent periodic duty) load testing on electric motors, analyzing thermal limits and dynamic stress performance.",
          "Managed technical documentation and resource allocation for R&D electric motor engineering projects, improving workflow tracking efficiency."
        ],
        tr: [
          "Elektrik motorları üzerinde IEC standardı S1 (sürekli çalışma) ve S3 (kesintili periyodik çalışma) yük testlerini gerçekleştirdi; termal limitleri ve dinamik gerilme performanslarını analiz etti.",
          "Ar-Ge elektrik motoru mühendisliği projelerinde teknik dokümantasyon ve kaynak tahsisini yöneterek iş akışı takip verimliliğini artırdı."
        ],
        de: [
          "Durchführung von Lastprüfungen nach IEC-Norm S1 (Dauerbetrieb) und S3 (aussetzender periodischer Betrieb) an Elektromotoren mit Analyse von thermischen Grenzen und dynamischer Belastung.",
          "Verwaltung technischer Dokumentation und Ressourcenzuweisung für F&E-Elektromotorenprojekte zur Optimierung der Arbeitsabläufe."
        ],
        ru: [
          "Проведение нагрузочных испытаний электродвигателей по стандартам IEC S1 (продолжительный) и S3 (повторно-кратковременный режим) с анализом тепловых пределов и динамических нагрузок.",
          "Ведение технической документации и распределение ресурсов в проектах НИОКР по электродвигателям, повышение эффективности процессов."
        ],
        sv: [
          "Genomförde lasttester enligt IEC-standard S1 (kontinuerlig drift) och S3 (intermittent drift) på elmotorer, analyserade termiska gränser och dynamisk spänning.",
          "Hanterade teknisk dokumentation och resursallokering för FoU-projekt inom elmotorer med ökad effektivitet som resultat."
        ],
        zh: [
          "依据 IEC 标准针对电动机开展 S1（连续工作制）和 S3（断续周期工作制）负载测试，系统分析热极限与动态应力响应。",
          "负责研发电动机工程项目的全套技术文档编制与研发资源调配，显著提升研发流程追踪效率。"
        ],
        fr: [
          "Réalisation d'essais de charge selon les normes CEI S1 (service continu) et S3 (service intermittent périodique) sur des moteurs électriques, avec analyse thermique et mécanique.",
          "Gestion de la documentation technique et allocation des ressources pour les projets R&D de moteurs électriques, améliorant l'efficacité opérationnelle."
        ],
        it: [
          "Esecuzione di prove di carico secondo gli standard IEC S1 (servizio continuo) e S3 (servizio intermittente) su motori elettrici, con analisi dei limiti termici e dello stress dinamico.",
          "Gestione della documentazione tecnica e allocazione delle risorse per progetti R&S di ingegneria dei motori elettrici."
        ],
        cs: [
          "Provádění zátěžových testů elektromotorů podle norem IEC S1 (trvalý chod) a S3 (přerušovaný periodický chod), analýza tepelných limitů a dynamického namáhání.",
          "Správa technické dokumentace a alokace zdrojů pro výzkumné a vývojové projekty elektromotorů, což zvýšilo efektivitu sledování pracovních postupů."
        ],
        pl: [
          "Przeprowadzanie testów obciążeniowych silników elektrycznych zgodnie z normami IEC S1 (praca ciągła) i S3 (praca przerywana okresowa), z analizą limitów termicznych i naprężeń dynamicznych.",
          "Zarządzanie dokumentacją techniczną i alokacją zasobów dla projektów badawczo-rozwojowych silników elektrycznych, zwiększające efektywność śledzenia prac."
        ]
      }
    },
    {
      company: "TC. Cumhurbaşkanlığı İletişim Başkanlığı",
      role: {
        en: "Information Technology Trainee",
        tr: "Bilgi Teknolojileri Stajyeri",
        de: "Praktikantin Informationstechnologie",
        ru: "Стажер по информационным технологиям",
        sv: "IT-praktikant",
        zh: "信息技术实习生",
        fr: "Stagiaire Technologies de l'Information",
        it: "Stagista Tecnologie dell'Informazione",
        cs: "Stážistka v oblasti informačních technologií",
        pl: "Praktykantka ds. Technologii Informacyjnych"
      },
      location: "Çankaya, Ankara",
      period: "Jul 2025 – Aug 2025",
      category: "it",
      points: {
        en: [
          "Contributed to the web design, frontend interface testing, and optimization for an institution-specific government web portal.",
          "Assisted in developing a specialized high-security internal application, validating user access controls and system authentication protocols."
        ],
        tr: [
          "Kuruma özel kamu web portalı için web tasarımı, ön yüz (frontend) arayüz testleri ve optimizasyon çalışmalarına katkıda bulundu.",
          "Kullanıcı erişim kontrolleri ve sistem kimlik doğrulama protokollerini doğrulayan özel yüksek güvenlikli dahili uygulamanın geliştirilmesine yardımcı oldu."
        ],
        de: [
          "Mitarbeit an Webdesign, Frontend-Testing und Optimierung für ein behördenspezifisches Regierungs-Webportal.",
          "Unterstützung bei der Entwicklung einer hochsicheren internen Anwendung und Validierung von Zugriffskontrollen und Authentifizierungsprotokollen."
        ],
        ru: [
          "Участие в веб-дизайне, тестировании фронтенд-интерфейсов и оптимизации ведомственного государственного веб-портала.",
          "Помощь в разработке специализированного защищенного внутреннего приложения, валидация прав доступа и протоколов аутентификации."
        ],
        sv: [
          "Bidrog till webbdesign, frontend-gränssnittstestning och optimering för en myndighetsspecifik statlig webbportal.",
          "Assisterade vid utvecklingen av en högsäker intern applikation och validerade åtkomstkontroller och autentiseringsprotokoll."
        ],
        zh: [
          "参与国家级政府专属门户网站的界面交互设计、前端测试验证与系统性能调优。",
          "协助研发高安全等级内部核心应用程序，严格核验用户权限访问控制与多因子身份鉴权认证协议。"
        ],
        fr: [
          "Contribution à la conception Web, aux tests d'interface frontend et à l'optimisation d'un portail gouvernemental.",
          "Assistance au développement d'une application interne haute sécurité, avec validation des contrôles d'accès et des protocoles d'authentification."
        ],
        it: [
          "Contributo alla progettazione web, al collaudo dell'interfaccia frontend e all'ottimizzazione per un portale governativo istituzionale.",
          "Supporto nello sviluppo di un'applicazione interna ad alta sicurezza, con convalida dei controlli di accesso utente e protocolli di autenticazione."
        ],
        cs: [
          "Podíl na webovém designu, testování frontendového rozhraní a optimalizaci specializovaného vládního webového portálu.",
          "Spolupráce na vývoji vysoce zabezpečené interní aplikace, ověřování řízení přístupu uživatelů a protokolů autentizace."
        ],
        pl: [
          "Współudział w projektowaniu stron WWW, testowaniu interfejsu frontend i optymalizacji dedykowanego portalu rządowego.",
          "Wsparcie przy tworzeniu specjalistycznej aplikacji wewnętrznej o wysokim poziomie bezpieczeństwa, weryfikacja kontroli dostępu i protokołów uwierzytelniania."
        ]
      }
    },
    {
      company: "Uptechlabs",
      role: {
        en: "Embedded Systems & Software Engineering Trainee",
        tr: "Gömülü Sistemler & Yazılım Mühendisliği Stajyeri",
        de: "Praktikantin Embedded Systems & Software",
        ru: "Стажер по встраиваемым системам и программной инженерии",
        sv: "Praktikant inom inbyggda system & mjukvaruutveckling",
        zh: "嵌入式系统与软件工程实习生",
        fr: "Stagiaire Systèmes Embarqués & Ingénierie Logicielle",
        it: "Stagista Sistemi Embedded e Ingegneria del Software",
        cs: "Stážistka vestavěných systémů a softwarového inženýrství",
        pl: "Praktykantka ds. Systemów Wbudowanych i Inżynierii Oprogramowania"
      },
      location: "Remote",
      period: "Jun 2024",
      category: "embedded",
      points: {
        en: [
          "Implemented real-time sensor data acquisition scripts and peripheral communications (SPI/I2C/UART)."
        ],
        tr: [
          "Gerçek zamanlı sensör veri toplama betikleri ve çevre birimi haberleşme protokollerini (SPI / I2C / UART) uyguladı."
        ],
        de: [
          "Implementierung von Skripten zur Echtzeit-Sensordatenerfassung und Peripheriekommunikation (SPI/I2C/UART)."
        ],
        ru: [
          "Реализация скриптов сбора данных с датчиков в реальном времени и периферийных интерфейсов (SPI/I2C/UART)."
        ],
        sv: [
          "Implementerade skript för sensordatainsamling i realtid och periferikommunikation (SPI/I2C/UART)."
        ],
        zh: [
          "编写实现多通道实时传感器数据采集脚本，配置与调试底层外设通信协议总线 (SPI / I2C / UART)。"
        ],
        fr: [
          "Implémentation de scripts d'acquisition de données de capteurs en temps réel et communication périphérique (SPI/I2C/UART)."
        ],
        it: [
          "Implementazione di script di acquisizione dati dai sensori in tempo reale e comunicazione con periferiche (SPI/I2C/UART)."
        ],
        cs: [
          "Implementace skriptů pro sběr dat ze senzorů v reálném čase a komunikaci s periferiemi (SPI/I2C/UART)."
        ],
        pl: [
          "Implementacja skryptów do akwizycji danych z czujników w czasie rzeczywistym oraz komunikacji peryferyjnej (SPI/I2C/UART)."
        ]
      }
    },
    {
      company: "Gdz Elektrik",
      role: {
        en: "Electrical & Grid Systems Trainee",
        tr: "Elektrik & Şebeke Sistemleri Stajyeri",
        de: "Praktikantin Elektrotechnik & Verteilnetze",
        ru: "Стажер по электроэнергетике и сетям",
        sv: "Praktikant inom el- och elnätssystem",
        zh: "电气与电网系统实习生",
        fr: "Stagiaire Systèmes Électriques & Réseaux",
        it: "Stagista Sistemi Elettrici e di Rete",
        cs: "Stážistka elektrických a distribučních sítí",
        pl: "Praktykantka ds. Systemów Elektrycznych i Sieciowych"
      },
      location: "Bornova, İzmir",
      period: "Jun 2023 – Jul 2023",
      category: "electrical",
      points: {
        en: [
          "Worked in the electric meter workshop, performing calibration, testing, meter index reading, and accuracy inspections for meters.",
          "Assisted in billing reconciliation, energy consumption data validation, and compliance verification according to distribution grid standards."
        ],
        tr: [
          "Elektrik sayaç atölyesinde çalışarak sayaçlar için kalibrasyon, test, endeks okuma ve hassasiyet denetimleri gerçekleştirdi.",
          "Faturalandırma mutabakatı, enerji tüketim verisi doğrulaması ve dağıtım şebekesi standartlarına uygunluk denetimlerine katkı sağladı."
        ],
        de: [
          "Mitarbeit in der Zählerwerkstatt bei Kalibrierung, Prüfung, Zählerstandsablesung und Genauigkeitskontrollen.",
          "Unterstützung bei der Rechnungsabstimmung, Validierung von Energieverbrauchsdaten und Einhaltung von Netzstandards."
        ],
        ru: [
          "Работа в цехе электросчетчиков: калибровка, тестирование, снятие показаний и проверка точности приборов учета.",
          "Помощь в сверке расчетов, валидации данных потребления энергии и контроле соблюдения стандартов распределительных сетей."
        ],
        sv: [
          "Arbetade i elmätarverkstaden med kalibrering, provning, mätaravläsning och noggrannhetsinspektioner.",
          "Assisterade vid fakturaavstämning, validering av energiförbrukningsdata och efterlevnad av distributionsnätets standarder."
        ],
        zh: [
          "驻扎电能表计量检定校验工坊，实施仪器精密标定、电气耐压绝缘测试、表计示值抄读与综合精度复核。",
          "协助推进配网电能计量结算数据核对、区域用能消耗规律校验及配电网国标规范符合性核验。"
        ],
        fr: [
          "Travail en atelier de compteurs électriques : étalonnage, tests, relevés d'index et inspections de précision.",
          "Assistance au rapprochement des factures, à la validation des consommations énergétiques et à la conformité aux normes du réseau."
        ],
        it: [
          "Attività nel laboratorio di contatori elettrici con calibrazione, collaudo, lettura indici e verifiche di precisione.",
          "Supporto nella riconciliazione delle fatture, validazione dei dati di consumo e conformità alle normative della rete di distribuzione."
        ],
        cs: [
          "Práce v dílně elektroměrů zahrnující kalibraci, testování, odečty stavů a kontroly přesnosti měřidel.",
          "Asistence při odsouhlasení fakturace, validaci dat o spotřebě energie a ověřování souladu se standardy distribuční sítě."
        ],
        pl: [
          "Praca w warsztacie liczników elektrycznych: kalibracja, testowanie, odczyt indeksów oraz kontrola dokładności pomiarów.",
          "Wsparcie w uzgadnianiu rozliczeń, walidacji danych o zużyciu energii oraz weryfikacji zgodności ze standardami sieci dystrybucyjnej."
        ]
      }
    }
  ] as WorkExperience[],

  education: [
    {
      school: "Ostim Technical University",
      degree: {
        en: "Bachelor's Degree in Electrical and Electronics Engineering (English)",
        tr: "Elektrik ve Elektronik Mühendisliği Lisans Derecesi (İngilizce)",
        de: "Bachelor-Abschluss in Elektro- und Elektroniktechnik (Englisch)",
        ru: "Степень бакалавра по электротехнике и электронике (на английском языке)",
        sv: "Kandidatexamen i Elektro- och Elektronik (Engelska)",
        zh: "电气与电子工程学士学位 (全英文授课)",
        fr: "Licence / Bachelor en Génie Électrique et Électronique (en anglais)",
        it: "Laurea Triennale in Ingegneria Elettrica ed Elettronica (Inglese)",
        cs: "Bakalářský titul v oboru elektrotechnika a elektronika (v angličtině)",
        pl: "Studia licencjackie/inżynierskie z Elektrotechniki i Elektroniki (w j. angielskim)"
      },
      location: "Yenimahalle, Ankara",
      period: "Oct 2021 – Jan 2027",
      focus: {
        en: "Focused on Embedded Systems, Power Electronics & Avionics Technologies.",
        tr: "Gömülü Sistemler, Güç Elektroniği ve Aviyonik Teknolojileri Odaklı.",
        de: "Schwerpunkt auf Eingebettete Systeme, Leistungselektronik & Avionik-Technologien.",
        ru: "Специализация: Встраиваемые системы, силовая электроника и технологии авионики.",
        sv: "Inriktning mot inbyggda system, kraftelektronik och avionik.",
        zh: "主修方向：嵌入式系统架构、电力电子变流技术与航空电子控制系统。",
        fr: "Axé sur les Systèmes Embarqués, l'Électronique de Puissance et les Technologies Avioniques.",
        it: "Focalizzato su Sistemi Embedded, Elettronica di Potenza e Tecnologie Avioniche.",
        cs: "Zaměření na vestavěné systémy, výkonovou elektroniku a letecké technologie (avioniku).",
        pl: "Specjalizacja w zakresie systemów wbudowanych, energoelektroniki i technologii awionicznych."
      }
    }
  ] as EducationItem[],

  project: {
    title: "Dogduino",
    institution: "Ostim Technical University",
    period: "Oct 2025 – May 2026",
    type: {
      en: "Low-Cost Educational Quadruped Robot",
      tr: "Düşük Maliyetli Eğitici Dört Bacaklı Robot",
      de: "Kostengünstiger Vierbeiniger Bildungsroboter",
      ru: "Низкобюджетный обучающий робот-четвероног",
      sv: "Prisvärd Fyrbent Utbildningsrobot",
      zh: "低成本教育级仿生四足机器人",
      fr: "Robot Quadrupède Éducatif à Faible Coût",
      it: "Robot Quadrupede Educativo a Basso Costo",
      cs: "Nízkonákladový vzdělávací čtyřnohý robot",
      pl: "Niskokosztowy edukacyjny robot czworonożny"
    },
    summary: {
      en: "Designed and implemented Dogduino, a quadruped robot built around the ESP32 microcontroller and PCA9685 PWM driver for accessible robotics education.",
      tr: "Erişilebilir robotik eğitimi amacıyla ESP32 mikrodenetleyici ve PCA9685 PWM sürücüsü etrafında tasarlanan ve üretilen dört bacaklı Dogduino robotu.",
      de: "Entwicklung und Bau von Dogduino, einem vierbeinigen Roboter auf Basis des ESP32-Mikrocontrollers und PCA9685-PWM-Treibers für praxisnahe Robotikausbildung.",
      ru: "Проектирование и создание Dogduino — четвероногого робота на базе микроконтроллера ESP32 и ШИМ-драйвера PCA9685 для доступного обучения робототехнике.",
      sv: "Konstruerade och implementerade Dogduino, en fyrbent robot byggd kring mikrokontrollern ESP32 och PCA9685 PWM-drivrutin för tillgänglig robotikutbildning.",
      zh: "自主设计并研制 Dogduino 仿生四足机器人，基于 ESP32 双核微控制器与 PCA9685 PWM 驱动板，面向普惠型机器人工程教学。",
      fr: "Conception et réalisation de Dogduino, un robot quadrupède basé sur le microcontrôleur ESP32 et le pilote PWM PCA9685.",
      it: "Progettazione e realizzazione di Dogduino, un robot quadrupede basato su microcontrollore ESP32 e driver PWM PCA9685 per la didattica robotica.",
      cs: "Návrh a realizace čtyřnohého robota Dogduino postaveného na mikrokontroléru ESP32 a PWM ovladači PCA9685 pro dostupnou výuku robotiky.",
      pl: "Zaprojektowanie i wykonanie Dogduino – czworonożnego robota opartego na mikrokontrolerze ESP32 i sterowniku PWM PCA9685 dla dostępnej edukacji robotycznej."
    },
    points: {
      en: [
        "Designed and implemented Dogduino, a quadruped robot built around the ESP32 microcontroller and PCA9685 PWM driver for accessible robotics education.",
        "Developed dynamic gait control algorithms utilizing inverse kinematics across 8 servo-driven legs.",
        "Integrated a custom Bluetooth interface for real-time mobile control (sit, stand, walk execution).",
        "Focused on modular embedded hardware architecture and low-power system optimization."
      ],
      tr: [
        "Erişilebilir robotik eğitimi için ESP32 mikrodenetleyici ve PCA9685 PWM sürücüsü ile çalışan Dogduino dört bacaklı robotu tasarlandı ve hayata geçirildi.",
        "8 servolu bacak sistemi üzerinde ters kinematik (Inverse Kinematics) matematiği kullanılarak dinamik yürüme gait kontrol algoritmaları geliştirildi.",
        "Gerçek zamanlı mobil uzaktan kumanda (oturma, ayakta durma, yürüme yürütümü) için özel Bluetooth arayüzü entegre edildi.",
        "Modüler gömülü donanım mimarisi ve düşük güç sistem optimizasyonu üzerine yoğunlaşıldı."
      ],
      de: [
        "Entwicklung und Bau des vierbeinigen Bildungsroboters Dogduino auf Basis von ESP32 und PCA9685-PWM-Treiber.",
        "Entwicklung dynamischer Gangsteuerungsalgorithmen mit inverser Kinematik für 8 servogesteuerte Gliedmaßen.",
        "Integration einer maßgeschneiderten Bluetooth-Schnittstelle für mobile Echtzeitsteuerung (Sitzen, Stehen, Gehen).",
        "Fokus auf modulare eingebettete Hardware-Architektur und stromsparende Systemoptimierung."
      ],
      ru: [
        "Разработка и создание обучающего робота Dogduino на базе ESP32 и 16-канального ШИМ-драйвера PCA9685.",
        "Разработка алгоритмов управления динамической походкой с использованием инверсной кинематики для 8 сервоприводов.",
        "Интеграция кастомного интерфейса Bluetooth для управления с мобильного устройства в реальном времени (сесть, встать, идти).",
        "Модульная аппаратная архитектура и оптимизация энергопотребления встроенной системы."
      ],
      sv: [
        "Konstruerade och implementerade Dogduino, en fyrbent robot byggd kring ESP32 och PCA9685 PWM-drivkrets.",
        "Utvecklade dynamiska gångkontrollalgoritmer med invers kinematik över 8 servodrivna ben.",
        "Integrerade ett anpassat Bluetooth-gränssnitt för mobil realtidsstyrning (sitt, stå, gå).",
        "Fokus på modulär inbyggd hårdvaruarkitektur och lågeffektoptimering."
      ],
      zh: [
        "围绕 ESP32 高性能双核微控制器与 PCA9685 16通道 PWM 驱动芯片，设计并落地全套 Dogduino 机器人软硬件。",
        "推导并求解 8 自由度舵机腿部闭式逆运动学方程 (IK)，自研高平稳动态步态生成与轨迹插补算法。",
        "自研低功耗蓝牙 (BLE) 移动终端无线遥控协议，实现坐姿、站立、对角小跑等多步态实时指令执行。",
        "注重模块化嵌入式电路布局与整机低功耗电源稳压滤波优化，保障复杂负载下的系统鲁棒性。"
      ],
      fr: [
        "Conception du robot quadrupède éducatif Dogduino autour de l'ESP32 et du contrôleur PWM PCA9685.",
        "Développement d'algorithmes de démarche dynamique basés sur la cinématique inverse pour 8 servomoteurs.",
        "Intégration d'une interface Bluetooth personnalisée pour le pilotage mobile en temps réel (assis, debout, marche).",
        "Optimisation matérielle modulaire et gestion de l'énergie basse consommation."
      ],
      it: [
        "Progettazione e implementazione di Dogduino con ESP32 e driver PWM PCA9685.",
        "Sviluppo di algoritmi di andatura dinamica mediante cinematica inversa su 8 servomotori.",
        "Integrazione di un'interfaccia Bluetooth personalizzata per il controllo mobile in tempo reale.",
        "Architettura hardware embedded modulare e ottimizzazione energetica a basso consumo."
      ],
      cs: [
        "Navržení a realizace čtyřnohého robota Dogduino založeného na mikrokontroléru ESP32 a PWM ovladači PCA9685 pro dostupnou výuku robotiky.",
        "Vývoj algoritmů dynamické chůze s využitím inverzní kinematiky napříč 8 servomotory poháněnými končetinami.",
        "Integrace vlastního rozhraní Bluetooth pro mobilní ovládání v reálném čase (sed, stoj, chůze).",
        "Zaměření na modulární vestavěnou hardwarovou architekturu a nízkoenergetickou optimalizaci systému."
      ],
      pl: [
        "Zaprojektowanie i wykonanie robota czworonożnego Dogduino opartego na mikrokontrolerze ESP32 i sterowniku PWM PCA9685 dla dostępnej edukacji robotycznej.",
        "Opracowanie algorytmów dynamicznego sterowania chodem z wykorzystaniem kinematyki odwrotnej dla 8 kończyn napędzanych serwomechanizmami.",
        "Integracja autorskiego interfejsu Bluetooth do mobilnego sterowania w czasie rzeczywistym (siad, postawa, chód).",
        "Koncentracja na modułowej architekturze sprzętowej systemów wbudowanych oraz optymalizacji niskiego poboru mocy."
      ]
    },
    specs: [
      { 
        label: { 
          en: "Microcontroller", tr: "Mikrodenetleyici", de: "Mikrocontroller", 
          ru: "Микроконтроллер", sv: "Mikrokontroller", zh: "核心微控制器", 
          fr: "Microcontrôleur", it: "Microcontrollore", cs: "Mikrokontrolér", pl: "Mikrokontroler"
        }, 
        value: "ESP-32 Dual-Core Tensilica" 
      },
      { 
        label: { 
          en: "PWM Controller", tr: "PWM Sürücü", de: "PWM-Treiber", 
          ru: "ШИМ-драйвер", sv: "PWM-kontroller", zh: "PWM 舵机驱动板", 
          fr: "Pilote PWM", it: "Driver PWM", cs: "PWM ovladač", pl: "Sterownik PWM"
        }, 
        value: "PCA9685 16-Channel 12-bit I2C" 
      },
      { 
        label: { 
          en: "Actuation", tr: "Eyleyici Sistemi", de: "Aktuatoren", 
          ru: "Сервоприводы", sv: "Aktuatorer", zh: "执行机构", 
          fr: "Actionneurs", it: "Attuatori", cs: "Pohony", pl: "Układ wykonawczy"
        }, 
        value: "8x Metal-Gear Servos (2-DOF / Leg)" 
      },
      { 
        label: { 
          en: "Control Protocol", tr: "Haberleşme", de: "Kommunikationsprotokoll", 
          ru: "Протокол связи", sv: "Styrprotokoll", zh: "通信控制协议", 
          fr: "Protocole de Commande", it: "Protocollo di Controllo", cs: "Komunikační protokol", pl: "Protokół sterowania"
        }, 
        value: "Bluetooth BLE & Serial UART" 
      },
      { 
        label: { 
          en: "Kinematics", tr: "Kinematik Çözüm", de: "Kinematik-Modell", 
          ru: "Кинематика", sv: "Kinematik", zh: "运动学求解模型", 
          fr: "Cinématique", it: "Cinematica", cs: "Kinematika", pl: "Kinematyka"
        }, 
        value: "Closed-Form Inverse Kinematics" 
      },
      { 
        label: { 
          en: "Interactive Display", tr: "Karakter Ekranı", de: "Interaktives Display", 
          ru: "Интерактивный экран", sv: "Interaktiv display", zh: "表情交互屏幕", 
          fr: "Écran Interactif", it: "Schermo Interattivo", cs: "Interaktivní displej", pl: "Wyświetlacz interaktywny"
        }, 
        value: "Front-Mounted Animated LCD Screen" 
      },
      { 
        label: { 
          en: "Chassis Fabrication", tr: "Gövde İmalatı", de: "Chassis-Fertigung", 
          ru: "Корпус", sv: "Chassitillverkning", zh: "机身结构制造", 
          fr: "Châssis", it: "Telaio", cs: "Výroba šasi", pl: "Konstrukcja obudowy"
        }, 
        value: "Custom Modular 3D Printed PETG/PLA" 
      },
      { 
        label: { 
          en: "Power Optimization", tr: "Güç Mimarisi", de: "Stromversorgung", 
          ru: "Система питания", sv: "Effektoptimering", zh: "供电拓扑架构", 
          fr: "Alimentation", it: "Alimentazione", cs: "Napájecí architektura", pl: "Zarządzanie zasilaniem"
        }, 
        value: "Dual-rail isolated regulator circuitry" 
      }
    ],
    video: {
      src: "assets/aistudio/dogduino-video_0fa1ed27.mp4",
      caption: {
        en: "Dogduino dynamic walking gait execution demonstration in test bench environment.",
        tr: "Dogduino dinamik yürüme ve adım kontrol algoritmasının test ortamında canlı demonstrasyonu.",
        de: "Demonstration der dynamischen Gangausführung von Dogduino auf dem Prüfstand.",
        ru: "Демонстрация динамической походки робота Dogduino на испытательном стенде.",
        sv: "Demonstration av dynamisk gångkontroll för Dogduino i testmiljö.",
        zh: "Dogduino 机器狗动态小跑步态与连续步幅控制台架实时运行演示。",
        fr: "Démonstration de la démarche dynamique de Dogduino en environnement de test.",
        it: "Dimostrazione dell'andatura dinamica di Dogduino sul banco di prova.",
        cs: "Ukázka dynamického krokování a řízení chůze robota Dogduino v testovacím prostředí.",
        pl: "Demonstracja algorytmu dynamicznego chodu robota Dogduino w środowisku testowym."
      }
    },
    images: [
      {
        src: "assets/aistudio/dogduino-1_e6123476.png",
        title: {
          en: "Frontal View & Active Face Display",
          tr: "Ön Görünüş & Canlı Karakter Ekranı",
          de: "Frontansicht & Interaktives LCD-Display",
          ru: "Вид спереди и активный LCD-дисплей",
          sv: "Frontvy och aktiv LCD-skärm",
          zh: "正视姿态与动态 LCD 表情屏",
          fr: "Vue frontale et écran LCD dynamique",
          it: "Vista frontale e display LCD dinamico",
          cs: "Čelní pohled a aktivní displej obličeje",
          pl: "Widok z przodu i aktywny wyświetlacz twarzy"
        },
        description: {
          en: "Front profile highlighting the integrated interactive LCD screen rendering dynamic facial expressions, flanked by 2-DOF articulated front legs.",
          tr: "Dinamik yüz ifadelerini gösteren entegre LCD ekranı ve 2 serbestlik dereceli ön mafsallı bacak mimarisini gösteren ön profil.",
          de: "Frontales Profil mit integriertem LCD-Display für animierte Gesichtsausdrücke und 2-DOF-Vorderbeinen.",
          ru: "Фронтальный вид: встроенный LCD-экран с динамической анимацией эмоций и 2-DOF шарнирные передние конечности.",
          sv: "Frontprofil med integrerad LCD-skärm för dynamiska ansiktsuttryck och 2-DOF ledade framben.",
          zh: "机器狗正面视角：集成微型彩色 LCD 屏幕呈现灵动小狗表情，前肢各配置 2 自由度连杆舵机驱动关节。",
          fr: "Profil avant montrant l'écran LCD interactif avec expressions faciales et pattes avant à 2 DDL.",
          it: "Profilo anteriore con display LCD interattivo ed espressioni animate, affiancato da zampe anteriori a 2 DOF.",
          cs: "Čelní profil zvýrazňující integrovaný interaktivní LCD displej zobrazující dynamickou mimiku, doplněný o přední končetiny se 2 stupni volnosti.",
          pl: "Widok z przodu ukazujący zintegrowany interaktywny ekran LCD z dynamiczną mimiką oraz przednie kończyny o 2 stopniach swobody."
        }
      },
      {
        src: "assets/aistudio/dogduino-2_a5659b87.png",
        title: {
          en: "Chassis & Mechanical Linkage Geometry",
          tr: "Gövde ve Mekanik Bacak Geometrisi",
          de: "Chassis & Mechanische Gelenkgeometrie",
          ru: "Шасси и механика рычажных сочленений",
          sv: "Chassi och mekanisk länkagegeometri",
          zh: "机械躯干与四肢连杆受力构型",
          fr: "Châssis et géométrie des liaisons mécaniques",
          it: "Telaio e cinematica dei collegamenti meccanici",
          cs: "Šasi a geometrie mechanických vazeb",
          pl: "Obudowa i geometria połączeń mechanicznych"
        },
        description: {
          en: "Side view detailing the 4-leg linkage mechanics, dual servo mounting brackets, and rigid lightweight enclosure housing the power and logic boards.",
          tr: "Dört bacak mafsal mekaniğini, servo montaj yuvalarını ve mantık/güç devrelerini barındıran hafif gövde tasarımını gösteren yan görünüm.",
          de: "Seitenansicht mit Details zur Beinmechanik, den Servohalterungen und dem leichten Gehäuse für Steuerung und Akku.",
          ru: "Вид сбоку: кинематика сочленений, кронштейны крепления сервоприводов и легкий корпус для электроники.",
          sv: "Sidovy som visar mekaniken med 4 länkade ben, servofästen och det lätta chassit för styrkort och batteri.",
          zh: "侧视结构图：清晰呈现 4 组四连杆受力支撑骨架、双舵机独立锁紧卡座及容纳主控板与电芯的超轻量化 3D 打印座舱。",
          fr: "Vue latérale détaillant les tringleries des pattes, les supports de servos et le boîtier abritant l'électronique.",
          it: "Vista laterale che illustra la cinematica delle zampe, i supporti dei servi e l'alloggiamento leggero per le schede.",
          cs: "Boční pohled detailně zobrazující mechaniku 4 končetin, držáky dvojitých servomotorů a lehký pevný kryt s napájecí a logickou deskou.",
          pl: "Widok z boku prezentujący mechanikę 4 kończyn, podwójne uchwyty serwomechanizmów oraz lekką obudowę mieszczącą układy zasilania i logiki."
        }
      },
      {
        src: "assets/aistudio/dogduino-3_d55573d5.png",
        title: {
          en: "Electronics Bench Testing & Calibration",
          tr: "Elektronik Test Tezgahı & Kalibrasyon",
          de: "Elektronik-Prüfstand & Kalibrierung",
          ru: "Стендовые испытания и калибровка",
          sv: "Elektronikprovbänk & Kalibrering",
          zh: "电子系统台架精密测量与零点标定",
          fr: "Banc de test électronique et étalonnage",
          it: "Banco di prova elettronico e calibrazione",
          cs: "Testování elektroniky a kalibrace",
          pl: "Testy stanowiskowe elektroniki i kalibracja"
        },
        description: {
          en: "Hardware bench validation setup showing multi-meter voltage verification, servo zero-angle calibration, and real-time firmware debugging.",
          tr: "Multimetre voltaj doğrulaması, servo sıfır açısı kalibrasyonu ve gerçek zamanlı gömülü yazılım hata ayıklama laboratuvar kurulumu.",
          de: "Prüfstandsaufbau zur Spannungsüberprüfung mit Multimeter, Servonullpunkt-Kalibrierung und Firmware-Debugging.",
          ru: "Лабораторная валидация: замеры напряжений мультиметром, калибровка нулевых углов сервоприводов и отладка прошивки.",
          sv: "Laboratoriemiljö med multimetermätningar, nollpunktskalibrering av servon och realtidsfelsökning av firmware.",
          zh: "台架硬件联调现场：使用数字万用表对各母线纹波实施精测，核定舵机硬件机械绝对零位偏角，进行嵌入式固件在线断点排障。",
          fr: "Validation sur banc d'essai : vérification des tensions au multimètre, étalonnage du zéro des servos et débogage firmware.",
          it: "Setup di validazione a banco con multimetro, azzeramento degli angoli dei servomotori e debug firmware in tempo reale.",
          cs: "Laboratorní ověřovací sestava ukazující měření napětí multimetrem, kalibraci nulového úhlu servomotorů a ladění firmwaru v reálném čase.",
          pl: "Stanowisko walidacji sprzętowej pokazujące pomiary napięcia multimetrem, kalibrację kąta zerowego serw oraz debugowanie firmware w czasie rzeczywistym."
        }
      }
    ]
  } as ProjectData,

  aquaTrace: {
    title: "AquaTrace",
    institution: {
      en: "INDEPENDENT DEVELOPMENT",
      tr: "BAĞIMSIZ GELİŞTİRME",
      de: "UNABHÄNGIGE ENTWICKLUNG",
      ru: "НЕЗАВИСИМАЯ РАЗРАБОТКА",
      sv: "OBEROENDE UTVECKLING",
      zh: "独立研发项目",
      fr: "DÉVELOPPEMENT INDÉPENDANT",
      it: "SVILUPPO INDIPENDENTE",
      bg: "НЕЗАВИСИМА РАЗРАБОТКА",
      cs: "NEZÁVISLÝ VÝVOJ",
      pl: "NIEZALEŻNY ROZWÓJ"
    },
    location: "İzmir, Turkey",
    remoteLabel: {
      en: "Remote",
      tr: "Uzaktan",
      de: "Remote",
      ru: "Удалённо",
      sv: "Distans",
      zh: "远程开发",
      fr: "À distance",
      it: "Da remoto",
      bg: "Дистанционно",
      cs: "Na dálku",
      pl: "Zdalnie"
    },
    period: "Oct 2026 – Nov 2026",
    techLine: "Python, PySide6, NumPy & Matplotlib",
    githubUrl: "https://github.com/regexlord/AquaTrace",
    type: {
      en: "Underwater Acoustic Propagation & Active Sonar Simulator",
      tr: "Sualtı Akustik Yayılım ve Aktif Sonar Simülatörü",
      de: "Unterwasser-Akustikausbreitungs- & Aktivsonar-Simulator",
      ru: "Симулятор распространения звука под водой и активного сонара",
      sv: "Simulator för undervattensakustik och aktiv sonar",
      zh: "水下声学传播与主动声纳桌面仿真器",
      fr: "Simulateur de propagation acoustique sous-marine et sonar actif",
      it: "Simulatore di propagazione acustica subacquea e sonar attivo",
      bg: "Симулатор на подводно акустично разпространение и активен сонар",
      cs: "Simulátor šíření podvodního zvuku a aktivního sonaru",
      pl: "Symulator propagacji akustycznej pod wodą i sonaru aktywnego"
    },
    cardSummary: {
      en: "Developed a Python-based desktop application for underwater acoustic propagation and active sonar simulation, featuring interactive ray tracing, LFM signal processing, and target range estimation...",
      tr: "Etkileşimli ışın izleme, LFM sinyal işleme ve hedef mesafe kestirimi sunan, sualtı akustik yayılım ve aktif sonar simülasyonu için Python tabanlı bir masaüstü uygulaması geliştirildi...",
      de: "Python-basierte Desktop-Anwendung zur Simulation von Unterwasser-Schallausbreitung und Aktivsonar mit interaktivem Raytracing, LFM-Signalverarbeitung und Zielentfernungsschätzung...",
      ru: "Разработано настольное приложение на Python для моделирования подводного распространения звука и активного сонара с трассировкой лучей, ЛЧМ-обработкой и оценкой дальности...",
      sv: "Utvecklade en Python-baserad skrivbordsapplikation för undervattensakustik och aktiv sonarsimulering med interaktiv strålspårning, LFM-signalbehandling och avståndsberäkning...",
      zh: "基于 Python 研发的水下声学传播与主动声纳仿真桌面应用，集成交互式声线追踪、LFM 信号处理与目标测距功能...",
      fr: "Application de bureau Python pour la simulation acoustique sous-marine et de sonar actif, incluant lancer de rayons interactif, traitement LFM et estimation de distance...",
      it: "Applicazione desktop in Python per la simulazione della propagazione acustica subacquea e sonar attivo con ray tracing interattivo, elaborazione LFM e stima della distanza...",
      bg: "Разработено е настолно приложение на Python за симулация на подводно акустично разпространение и активен сонар с проследяване на лъчи, LFM обработка и оценка на разстоянието...",
      cs: "Vyvinuta desktopová aplikace v Pythonu pro simulaci podvodního šíření zvuku a aktivního sonaru s interaktivním sledováním paprsků, zpracováním LFM a odhadem vzdálenosti...",
      pl: "Opracowano aplikację desktopową w języku Python do symulacji propagacji akustycznej pod wodą i sonaru aktywnego ze śledzeniem promieni, przetwarzaniem LFM i estymacją odległości..."
    },
    points: {
      en: [
        "Developed an interactive desktop application for simulating underwater acoustic propagation and active sonar signal processing using Python.",
        "Implemented acoustic ray tracing, sound speed profile visualization, and simplified transmission loss calculations with configurable environmental parameters.",
        "Developed an active sonar module using complex-baseband Linear Frequency Modulated (LFM) signals, simulated target echoes, and additive white Gaussian noise.",
        "Applied FFT-based matched filtering to detect simulated target echoes and estimate target distance from acoustic round-trip delay.",
        "Designed a bilingual graphical interface with interactive scientific plots, scenario management, and a packaged Windows desktop release."
      ],
      tr: [
        "Python kullanarak sualtı akustik yayılımını ve aktif sonar sinyal işlemeyi simüle eden etkileşimli bir masaüstü uygulaması geliştirildi.",
        "Yapılandırılabilir çevresel parametrelerle akustik ışın izleme (ray tracing), ses hızı profili görselleştirmesi ve basitleştirilmiş iletim kaybı (TL) hesaplamaları uygulandı.",
        "Karmaşık temel bant Lineer Frekans Modülasyonlu (LFM) sinyaller, simüle edilmiş hedef yankıları ve toplamsal beyaz Gauss gürültüsü (AWGN) kullanan aktif sonar modülü geliştirildi.",
        "Simüle edilmiş hedef yankılarını tespit etmek ve akustik gidiş-dönüş gecikmesinden hedef mesafesini kestirmek için FFT tabanlı eşleşmiş filtreleme (matched filtering) uygulandı.",
        "Etkileşimli bilimsel grafikler, senaryo yönetimi ve paketlenmiş Windows masaüstü sürümü içeren iki dilli bir grafik kullanıcı arayüzü tasarlandı."
      ],
      de: [
        "Entwicklung einer interaktiven Desktop-Anwendung in Python zur Simulation der Unterwasser-Schallausbreitung und Aktivsonar-Signalverarbeitung.",
        "Implementierung von akustischem Raytracing, Visualisierung von Schallgeschwindigkeitsprofilen und vereinfachten Übertragungsverlustberechnungen mit konfigurierbaren Umweltparametern.",
        "Entwicklung eines Aktivsonar-Moduls mit komplexen Basisband-LFM-Signalen (Linear Frequency Modulated), simulierten Zielechos und additivem weißem Gaußschem Rauschen.",
        "Anwendung von FFT-basierter Matched-Filterung zur Erkennung simulierter Zielechos und zur Schätzung der Zielentfernung aus der akustischen Laufzeitverzögerung.",
        "Gestaltung einer zweisprachigen grafischen Oberfläche mit interaktiven wissenschaftlichen Diagrammen, Szenariomanagement und einem paketierten Windows-Desktop-Release."
      ],
      ru: [
        "Разработано интерактивное настольное приложение на Python для моделирования подводного распространения звука и обработки сигналов активного сонара.",
        "Реализованы акустическая трассировка лучей, визуализация профиля скорости звука и упрощённый расчёт потерь при передаче с настраиваемыми параметрами среды.",
        "Создан модуль активного сонара на основе комплексных ЛЧМ-сигналов (LFM), моделируемых эхо-сигналов цели и аддитивного белого гауссовского шума.",
        "Применена согласованная фильтрация на базе БПФ (FFT) для обнаружения эхо-сигналов цели и оценки дальности по времени распространения импульса.",
        "Спроектирован двуязычный графический интерфейс с интерактивными научными графиками, управлением сценариями и собранным дистрибутивом для Windows."
      ],
      sv: [
        "Utvecklade en interaktiv skrivbordsapplikation i Python för simulering av undervattensakustik och signalbehandling för aktiv sonar.",
        "Implementerade akustisk strålspårning, visualisering av ljudhastighetsprofiler och förenklade beräkningar av transmissionsförlust med konfigurerbara miljöparametrar.",
        "Utvecklade en modul för aktiv sonar med komplexa basbands-LFM-signaler (Linear Frequency Modulated), simulerade målekon och additivt vitt gaussiskt brus.",
        "Tillämpade FFT-baserad matchad filtrering för att detektera simulerade målekon och uppskatta målavstånd från akustisk tur-och-retur-fördröjning.",
        "Designade ett tvåspråkigt grafiskt gränssnitt med interaktiva vetenskapliga grafer, scenariohantering och en paketerad Windows-version."
      ],
      zh: [
        "基于 Python 开发交互式桌面应用，用于水下声学传播建模与主动声纳信号处理仿真。",
        "实现了可配置海洋环境参数的声线追踪、声速剖面可视化及简化传播损失 (TL) 计算模型。",
        "构建主动声纳仿真模块，支持复基带线性调频 (LFM) 信号生成、目标回波建模及加性高斯白噪声 (AWGN) 注入。",
        "应用基于 FFT 的匹配滤波算法检测目标回波，并根据声波往返时延精准反演估算目标距离。",
        "设计了包含交互式科研绘图、多场景保存加载以及 PyInstaller 独立 Windows 可执行文件打包的双语图形界面。"
      ],
      fr: [
        "Développement d'une application de bureau interactive en Python pour la simulation de la propagation acoustique sous-marine et du traitement de signal sonar actif.",
        "Implémentation du lancer de rayons acoustiques, visualisation du profil de célérité du son et calculs simplifiés de perte de transmission avec paramètres environnementaux configurables.",
        "Développement d'un module sonar actif utilisant des signaux modulés linéairement en fréquence (LFM) en bande de base complexe, échos simulés et bruit blanc gaussien additif.",
        "Application d'un filtrage adapté par FFT pour détecter les échos cibles simulés et estimer la distance à partir du délai aller-retour acoustique.",
        "Conception d'une interface graphique bilingue dotée de tracés scientifiques interactifs, gestion de scénarios et d'un exécutable Windows packagé."
      ],
      it: [
        "Sviluppata un'applicazione desktop interattiva in Python per la simulazione della propagazione acustica subacquea e l'elaborazione dei segnali sonar attivi.",
        "Implementati ray tracing acustico, visualizzazione del profilo della velocità del suono e calcoli semplificati delle perdite di trasmissione con parametri ambientali configurabili.",
        "Realizzato un modulo sonar attivo basato su segnali LFM (Linear Frequency Modulated) in banda base complessa, echi simulati e rumore gaussiano bianco additivo.",
        "Applicato filtraggio adattato basato su FFT per rilevare gli echi target simulati e stimare la distanza dal ritardo acustico di andata e ritorno.",
        "Progettata un'interfaccia grafica bilingue con grafici scientifici interattivi, gestione degli scenari e rilascio desktop Windows pacchettizzato."
      ],
      bg: [
        "Разработено е интерактивно настолно приложение на Python за симулиране на подводно акустично разпространение и обработка на сигнали на активен сонар.",
        "Реализирано е акустично проследяване на лъчи, визуализация на профила на скоростта на звука и опростени изчисления на загубите при предаване с конфигурируеми параметри на средата.",
        "Създаден е модул за активен сонар с комплексни LFM сигнали в основна честотна лента, симулирани ехо сигнали и адитивен бял гаусов шум.",
        "Приложено е FFT-базирано съгласувано филтриране за откриване на симулирани ехо сигнали и оценка на разстоянието до целта от акустичното закъснение.",
        "Проектиран е двуезичен графичен интерфейс с интерактивни научни графики, управление на сценарии и пакетирана настолна версия за Windows."
      ],
      cs: [
        "Vyvinuta interaktivní desktopová aplikace v Pythonu pro simulaci šíření podvodního zvuku a zpracování signálu aktivního sonaru.",
        "Implementováno akustické sledování paprsků, vizualizace profilu rychlosti zvuku a zjednodušené výpočty ztrát přenosu s nastavitelnými parametry prostředí.",
        "Vytvořen modul aktivního sonaru využívající komplexní LFM signály v základním pásmu, simulované odrazy cílů a aditivní bílý gaussovský šum.",
        "Aplikováno párové filtrování založené na FFT pro detekci simulovaných odrazů a odhad vzdálenosti cíle z akustického zpoždění tam a zpět.",
        "Navrženo dvojjazyčné grafické rozhraní s interaktivními vědeckými grafy, správou scénářů a zabalenou desktopovou verzí pro Windows."
      ],
      pl: [
        "Opracowano interaktywną aplikację desktopową w języku Python do symulacji propagacji akustycznej pod wodą i przetwarzania sygnałów sonaru aktywnego.",
        "Zaimplementowano akustyczne śledzenie promieni, wizualizację profilu prędkości dźwięku oraz uproszczone obliczenia strat transmisji z konfigurowalnymi parametrami środowiskowymi.",
        "Stworzono moduł sonaru aktywnego wykorzystujący zespolone sygnały LFM w paśmie podstawowym, symulowane echa celu oraz addytywny biały szum gaussowski.",
        "Zastosowano dopasowane filtrowanie oparte na FFT do wykrywania symulowanych ech i estymacji odległości celu na podstawie czasu powrotu fali akustycznej.",
        "Zaprojektowano dwujęzyczny interfejs graficzny z interaktywnymi wykresami naukowymi, zarządzaniem scenariuszami oraz spakowanym wydaniem dla systemu Windows."
      ]
    },
    specs: [
      {
        label: {
          en: "Programming Language", tr: "Programlama Dili", de: "Programmiersprache",
          ru: "Язык программирования", sv: "Programspråk", zh: "编程语言",
          fr: "Langage", it: "Linguaggio", bg: "Език за програмиране", cs: "Programovací jazyk", pl: "Język programowania"
        },
        value: "Python 3.9+"
      },
      {
        label: {
          en: "Desktop Framework", tr: "Masaüstü Çerçevesi", de: "Desktop-Framework",
          ru: "Десктоп-фреймворк", sv: "Skrivbordsramverk", zh: "桌面框架",
          fr: "Framework Bureau", it: "Framework Desktop", bg: "Десктоп рамка", cs: "Desktopový framework", pl: "Framework desktopowy"
        },
        value: "PySide6 / Qt"
      },
      {
        label: {
          en: "Numerical Computing", tr: "Sayısal Hesaplama", de: "Numerische Berechnung",
          ru: "Численные вычисления", sv: "Numerisk beräkning", zh: "数值计算",
          fr: "Calcul Numérique", it: "Calcolo Numerico", bg: "Числени изчисления", cs: "Numerické výpočty", pl: "Obliczenia numeryczne"
        },
        value: "NumPy"
      },
      {
        label: {
          en: "Visualization", tr: "Görselleştirme", de: "Visualisierung",
          ru: "Визуализация", sv: "Visualisering", zh: "科学可视化",
          fr: "Visualisation", it: "Visualizzazione", bg: "Визуализация", cs: "Vizualizace", pl: "Wizualizacja"
        },
        value: "Matplotlib"
      },
      {
        label: {
          en: "Signal Processing", tr: "Sinyal İşleme", de: "Signalverarbeitung",
          ru: "Обработка сигналов", sv: "Signalbehandling", zh: "信号处理",
          fr: "Traitement du Signal", it: "Elaborazione Segnali", bg: "Обработка на сигнали", cs: "Zpracování signálu", pl: "Przetwarzanie sygnałów"
        },
        value: "LFM Chirp & FFT Matched Filter"
      },
      {
        label: {
          en: "Acoustic Models", tr: "Akustik Modeller", de: "Akustische Modelle",
          ru: "Акустические модели", sv: "Akustiska modeller", zh: "声学模型",
          fr: "Modèles Acoustiques", it: "Modelli Acustici", bg: "Акустични модели", cs: "Akustické modely", pl: "Modele akustyczne"
        },
        value: "Ray Tracing & Baseline TL"
      },
      {
        label: {
          en: "User Interface", tr: "Kullanıcı Arayüzü", de: "Benutzeroberfläche",
          ru: "Пользовательский интерфейс", sv: "Användargränssnitt", zh: "用户界面",
          fr: "Interface Utilisateur", it: "Interfaccia Utente", bg: "Потребителски интерфейс", cs: "Uživatelské rozhraní", pl: "Interfejs użytkownika"
        },
        value: "English / Turkish"
      },
      {
        label: {
          en: "Distribution", tr: "Dağıtım", de: "Distribution",
          ru: "Дистрибутив", sv: "Distribution", zh: "打包发布",
          fr: "Distribution", it: "Distribuzione", bg: "Дистрибуция", cs: "Distribuce", pl: "Dystrybucja"
        },
        value: "Windows EXE · PyInstaller"
      }
    ],
    images: [
      {
        src: "assets/aistudio/image_d5114f94.png",
        fallbackName: "image_d5114f94.png",
        title: {
          en: "Acoustic Ray Tracing Plot",
          tr: "Akustik Işın İzleme Grafiği",
          de: "Akustisches Raytracing-Diagramm",
          ru: "График трассировки акустических лучей",
          sv: "Diagram för akustisk strålspårning",
          zh: "水下声线追踪轨迹图",
          fr: "Tracé des rayons acoustiques",
          it: "Grafico Ray Tracing Acustico",
          bg: "Графика на проследяване на акустични лъчи",
          cs: "Graf sledování akustických paprsků",
          pl: "Wykres akustycznego śledzenia promieni"
        },
        description: {
          en: "Interactive ray-path simulation across a 30 km range and 1000 m depth profile with configurable source depth, frequency, and beam width.",
          tr: "Ayarlanabilir kaynak derinliği, frekans ve ışın genişliği parametreleriyle 30 km menzil ve 1000 m derinlik boyunca etkileşimli ışın yolu simülasyonu.",
          de: "Interaktive Schallstrahlsimulation über 30 km Reichweite und 1000 m Tiefe mit konfigurierbaren Quellenparametern.",
          ru: "Интерактивное моделирование траекторий лучей на дистанции до 30 км и глубине 1000 м с настройкой параметров источника.",
          sv: "Interaktiv strålbanessimulering över 30 km räckvidd och 1000 m djup med konfigurerbara källparametrar.",
          zh: "支持自定义声源深度、频率和波束宽度的 30 km 水平距离与 1000 m 水深交互式声线轨迹仿真。",
          fr: "Simulation interactive des trajets de rayons sur 30 km de portée et 1000 m de profondeur.",
          it: "Simulazione interattiva dei percorsi acustici su 30 km di portata e 1000 m di profondità.",
          bg: "Интерактивна симулация на траекторията на лъчите в обхват 30 км и дълбочина 1000 м.",
          cs: "Interaktivní simulace drah paprsků v rozsahu 30 km a hloubce 1000 m s nastavitelnými parametry zdroje.",
          pl: "Interaktywna symulacja trajektorii promieni na dystansie 30 km i głębokości 1000 m z konfiguracją parametrów źródła."
        }
      },
      {
        src: "assets/aistudio/image_f040d442.png",
        fallbackName: "image_f040d442.png",
        title: {
          en: "Sound Speed Profile (Mackenzie Model)",
          tr: "Ses Hızı Profili (Mackenzie Modeli)",
          de: "Schallgeschwindigkeitsprofil",
          ru: "Профиль скорости звука",
          sv: "Ljudhastighetsprofil",
          zh: "深海声速剖面可视化",
          fr: "Profil de célérité du son",
          it: "Profilo della velocità del suono",
          bg: "Профил на скоростта на звука",
          cs: "Profil rychlosti zvuku",
          pl: "Profil prędkości dźwięku"
        },
        description: {
          en: "Depth-interpolated sound speed visualization derived from temperature and salinity layers alongside propagation controls.",
          tr: "Sıcaklık ve tuzluluk katmanlarından türetilen derinliğe göre enterpole edilmiş ses hızı profili ve yayılım ayarları.",
          de: "Tiefeninterpolierte Darstellung der Schallgeschwindigkeit basierend auf Temperatur- und Salzgehaltsdaten.",
          ru: "Визуализация скорости звука по глубине на основе профилей температуры и солёности воды.",
          sv: "Djupinterpolerad ljudhastighetsprofil härledd från temperatur- och salthaltslager.",
          zh: "基于水温与盐度分层的深度插值声速剖面曲线及传播参数控制面板。",
          fr: "Visualisation de la célérité du son interpolée en profondeur à partir de la température et de la salinité.",
          it: "Visualizzazione della velocità del suono interpolata per profondità a partire da temperatura e salinità.",
          bg: "Визуализация на скоростта на звука по дълбочина, извлечена от температура и соленост.",
          cs: "Vizualizace rychlosti zvuku interpolovaná podle hloubky na základě teploty a salinity.",
          pl: "Wizualizacja prędkości dźwięku interpolowana według głębokości na podstawie temperatury i zasolenia."
        }
      },
      {
        src: "assets/aistudio/image_47e32999.png",
        fallbackName: "image_47e32999.png",
        title: {
          en: "Transmission Loss & Water Profile Editor",
          tr: "İletim Kaybı ve Su Profili Düzenleyicisi",
          de: "Übertragungsverlust & Wasserprofil-Editor",
          ru: "Потери при передаче и редактор профиля воды",
          sv: "Transmissionsförlust och vattenprofilredigerare",
          zh: "传播损失曲线与水文剖面编辑器",
          fr: "Perte de transmission & Éditeur de profil d'eau",
          it: "Perdita di trasmissione ed editor profilo idrico",
          bg: "Загуби при предаване и редактор на водния профил",
          cs: "Ztráty přenosu a editor vodního profilu",
          pl: "Strata transmisji i edytor profilu wody"
        },
        description: {
          en: "Interactive water column table for depth, temperature, and salinity paired with direct-path spherical spreading + Thorp absorption curve.",
          tr: "Doğrudan yol küresel yayılım + Thorp soğurma eğrisiyle eşleştirilmiş etkileşimli derinlik, sıcaklık ve tuzluluk tablosu.",
          de: "Interaktive Tabelle für Tiefe, Temperatur und Salzgehalt kombiniert mit Dämpfungskurve.",
          ru: "Интерактивная таблица глубины, температуры и солёности с графиком сферического расхождения и поглощения.",
          sv: "Interaktiv tabell för djup, temperatur och salthalt tillsammans med dämpningskurva.",
          zh: "支持深度、温度与盐度行编辑的水柱数据表，联动展示球面扩展与吸收传播损失曲线。",
          fr: "Tableau interactif profondeur/température/salinité couplé à la courbe de perte par divergence sphérique et absorption.",
          it: "Tabella interattiva di profondità, temperatura e salinità abbinata alla curva di attenuazione e assorbimento.",
          bg: "Интерактивна таблица за дълбочина, температура и соленост с крива на затихване и абсорбция.",
          cs: "Interaktivní tabulka hloubky, teploty a salinity propojená s křivkou přenosové ztráty.",
          pl: "Interaktywna tabela głębokości, temperatury i zasolenia powiązana z krzywą strat transmisji."
        }
      },
      {
        src: "assets/aistudio/image_5ff0c811.png",
        fallbackName: "image_5ff0c811.png",
        title: {
          en: "2D Transmission Loss Map",
          tr: "2B İletim Kaybı Haritası",
          de: "2D-Übertragungsverlustkarte",
          ru: "2D-карта потерь при передаче",
          sv: "2D-karta över transmissionsförlust",
          zh: "二维传播损失分布热力图",
          fr: "Carte 2D des pertes de transmission",
          it: "Mappa 2D delle perdite di trasmissione",
          bg: "2D карта на загубите при предаване",
          cs: "2D mapa ztrát přenosu",
          pl: "Mapa 2D strat transmisji"
        },
        description: {
          en: "Direct-path baseline 2D transmission loss visualization mapping dB re 1 m attenuation across horizontal range and ocean depth.",
          tr: "Yatay menzil ve okyanus derinliği boyunca dB re 1 m cinsinden zayıflamayı gösteren 2B iletim kaybı haritası.",
          de: "2D-Visualisierung des Übertragungsverlusts (dB re 1 m) über horizontale Reichweite und Meerestiefe.",
          ru: "Двумерная карта затухания (дБ отн. 1 м) по горизонтальной дальности и глубине океана.",
          sv: "2D-visualisering av transmissionsförlust (dB re 1 m) över horisontellt avstånd och djup.",
          zh: "展示水平距离与海洋深度平面内 dB re 1 m 声学衰减分布的二维基线热力图。",
          fr: "Carte 2D de référence visualisant l'atténuation (dB re 1 m) selon la portée et la profondeur.",
          it: "Mappa 2D dell'attenuazione (dB re 1 m) in funzione della portata orizzontale e della profondità.",
          bg: "2D визуализация на затихването (dB re 1 m) по хоризонтален обхват и дълбочина.",
          cs: "2D vizualizace útlumu přenosu (dB re 1 m) napříč horizontálním dosahem a hloubkou.",
          pl: "Dwuwymiarowa mapa tłumienia (dB re 1 m) w funkcji zasięgu poziomego i głębokości."
        }
      },
      {
        src: "assets/aistudio/image_54c351e5.png",
        fallbackName: "image_54c351e5.png",
        title: {
          en: "Active Sonar LFM & Matched Filter Output",
          tr: "Aktif Sonar LFM ve Eşleşmiş Filtre Çıktısı",
          de: "Aktivsonar LFM & Matched-Filter-Ausgabe",
          ru: "Активный сонар: ЛЧМ и выход согласованного фильтра",
          sv: "Aktiv sonar LFM och utsignal från matchat filter",
          zh: "主动声纳 LFM 波形与匹配滤波测距输出",
          fr: "Sonar actif LFM & sortie du filtre adapté",
          it: "Sonar attivo LFM e uscita filtro adattato",
          bg: "Активен сонар LFM и изход на съгласувания филтър",
          cs: "Aktivní sonar LFM a výstup párového filtru",
          pl: "Sonar aktywny LFM i wynik filtru dopasowanego"
        },
        description: {
          en: "Complex-baseband received I/Q echo signal with AWGN and FFT matched-filter peak detecting a target at 1200.0 m range (0.75 m resolution).",
          tr: "AWGN içeren karmaşık temel bant I/Q yankı sinyali ve 1200,0 m hedef mesafesini (0,75 m çözünürlükle) tespit eden FFT eşleşmiş filtre tepesi.",
          de: "Empfangenes komplexes I/Q-Echosignal mit AWGN sowie FFT-Matched-Filter-Peak zur präzisen Zielerkennung bei 1200,0 m.",
          ru: "Принятый комплексный I/Q эхо-сигнал с шумом и пик БПФ-согласованного фильтра, определяющий цель на дальности 1200,0 м.",
          sv: "Mottagen I/Q-ekosignal med brus samt FFT-matchat filter som exakt detekterar ett mål på 1200,0 m avstånd.",
          zh: "包含高斯白噪声的复基带 I/Q 接收回波与 FFT 匹配滤波峰值响应，精准测得 1200.0 m 处目标（0.75 m 距离分辨率）。",
          fr: "Signal écho I/Q en bande de base complexe avec bruit AWGN et pic du filtre adapté FFT détectant une cible à 1200,0 m.",
          it: "Segnale eco I/Q ricevuto in banda base complessa con rumore AWGN e picco FFT a 1200,0 m.",
          bg: "Приет комплексен I/Q ехо сигнал с шум и пик на FFT филтъра, откриващ цел на 1200,0 м.",
          cs: "Přijatý komplexní I/Q signál ozvěny s šumem AWGN a vrchol párového filtru FFT detekující cíl ve vzdálenosti 1200,0 m.",
          pl: "Odebrany zespolony sygnał echa I/Q z szumem AWGN oraz pik filtru dopasowanego FFT wykrywający cel na dystansie 1200,0 m."
        }
      },
      {
        src: "assets/aistudio/image_2da4d112.png",
        fallbackName: "image_2da4d112.png",
        title: {
          en: "Simulation Summary & Model Assumptions",
          tr: "Simülasyon Özeti ve Model Varsayımları",
          de: "Simulationszusammenfassung & Modellannahmen",
          ru: "Сводка моделирования и допущения модели",
          sv: "Simuleringssammanfattning och modellantaganden",
          zh: "仿真统计摘要与物理模型说明",
          fr: "Résumé de simulation et hypothèses physiques",
          it: "Riepilogo simulazione e ipotesi del modello",
          bg: "Обобщение на симулацията и допускания на модела",
          cs: "Souhrn simulace a předpoklady modelu",
          pl: "Podsumowanie symulacji i założenia modelu"
        },
        description: {
          en: "Results console summarizing traced ray count, sound speed bounds, absorption (dB/km), direct-path TL, and underlying physical model notes.",
          tr: "İzlenen ışın sayısını, ses hızı sınırlarını, soğurma katsayısını (dB/km), doğrudan yol TL değerini ve fiziksel model notlarını özetleyen sonuç ekranı.",
          de: "Ergebnisübersicht mit Strahlenanzahl, Schallgeschwindigkeitsgrenzen, Absorption und physikalischen Modellhinweisen.",
          ru: "Сводная панель результатов: число лучей, границы скорости звука, поглощение (дБ/км), общие потери и физические допущения.",
          sv: "Resultatvy som sammanfattar antal strålar, ljudhastighetsintervall, absorption (dB/km) och fysikaliska modellantaganden.",
          zh: "结果汇总面板：统计追踪声线数、声速极值、吸收系数 (dB/km)、直达径传播损失与物理建模假设说明。",
          fr: "Console de résultats récapitulant les rayons tracés, bornes de célérité, absorption (dB/km) et hypothèses physiques.",
          it: "Riepilogo dei risultati con numero di raggi, limiti di velocità del suono, assorbimento (dB/km) e note sul modello.",
          bg: "Обобщен екран с брой лъчи, граници на скоростта на звука, абсорбция (dB/km) и бележки за физичния модел.",
          cs: "Přehled výsledků shrnující počet paprsků, meze rychlosti zvuku, absorpci (dB/km) a poznámky k modelu.",
          pl: "Ekran podsumowujący liczbę promieni, zakres prędkości dźwięku, tłumienie (dB/km) oraz założenia modelu fizycznego."
        }
      }
    ]
  } as AquaTraceData,

  certifications: [
    {
      title: "TEI Aviation Engines School",
      issuer: "TUSAŞ Engine Industries",
      date: "May 2025",
      category: "Avionics & Aerospace",
      description: {
        en: "Comprehensive aerospace powertrain and gas turbine training program conducted by TEI. Explores aircraft propulsion mechanics, thermal boundary dynamics, and engine electronic control unit (FADEC) architecture.",
        tr: "TUSAŞ Motor Sanayii (TEI) tarafından yürütülen kapsamlı havacılık güç sistemleri ve gaz türbinleri eğitim programı. Uçak itki mekaniği, termal sınır dinamikleri ve motor elektronik kontrol ünitesi (FADEC) mimarisini kapsar.",
        de: "Umfassendes Schulungsprogramm für Flugzeugantriebe und Gasturbinen der TEI. Behandelt Triebwerksdynamik, Thermik und elektronische FADEC-Steuergeräte.",
        ru: "Программа обучения по авиационным двигателям и газовым турбинам от TEI. Охватывает механику реактивной тяги, тепловые режимы и системы управления FADEC.",
        sv: "Omfattande utbildningsprogram inom flygmotorer och gasturbiner från TEI. Behandlar framdrivningsmekanik, termodynamik och elektroniska motorstyrsystem (FADEC).",
        zh: "土耳其发动机工业公司 (TEI) 航空动力与燃气涡轮发动机高阶工程项目。深入研讨航空发动机热力学边界、推力矢量控制及全权限数字式发动机控制 (FADEC) 架构。",
        fr: "Formation approfondie sur les turboréacteurs et turbines à gaz par TEI. Aborde la propulsion aéronautique, la thermique et l'architecture FADEC.",
        it: "Programma di formazione avanzato sui motori aeronautici e turbine a gas di TEI. Tratta la termodinamica della propulsione e l'architettura delle centraline FADEC.",
        bg: "Комплексна програма за обучение по авиационни двигатели и газови турбини, проведена от TEI. Разглежда механиката на реактивната тяга, термичната динамика и архитектурата на електронните блокове за управление (FADEC).",
        cs: "Komplexní školicí program v oblasti leteckých pohonů a plynových turbín pořádaný TEI. Zahrnuje mechaniku leteckého pohonu, tepelnou dynamiku a architekturu elektronických řídicích jednotek (FADEC).",
        pl: "Kompleksowy program szkoleniowy z zakresu lotniczych układów napędowych i turbin gazowych prowadzony przez TEI. Obejmuje mechanikę napędu lotniczego, dynamikę termiczną i architekturę sterowników FADEC."
      },
      certificates: [
        { key: 'tei', label: 'TEI Havacılık Motorları Okulu — Başarı Belgesi' }
      ]
    },
    {
      title: "Control Design Onramp",
      issuer: "MathWorks",
      date: "Mar 2025",
      category: "Control Systems",
      description: {
        en: "Rigorous interactive training on feedback loop synthesis, root locus analysis, and PID controller tuning using MATLAB. Focuses on dynamic stability verification for mechanical and electronic actuators.",
        tr: "MATLAB ortamında geri beslemeli kontrol döngüsü sentezi, kök eğrisi analizi ve PID kontrolör ayarlaması üzerine uygulamalı eğitim. Mekanik ve elektronik eyleyicilerin dinamik kararlılık doğrulamasına odaklanır.",
        de: "Interaktive Ausbildung zu Regelkreisen, Wurzelortskurven und PID-Reglerabstimmung mit MATLAB zur Stabilitätsverifikation dynamischer Systeme.",
        ru: "Практический курс по синтезу контуров обратной связи, анализу годографов корней и настройке ПИД-регуляторов в среде MATLAB.",
        sv: "Interaktiv utbildning i syntes av återkopplade reglersystem, rotortanalys och PID-trimning med MATLAB för dynamisk stabilitetsverifiering.",
        zh: "基于 MATLAB 的经典与现代闭环反馈控制系统综合训练。涵盖根轨迹分析、Bode 频域相位裕度校核以及执行机构 PID 控制器的高精度参数辨识与整定。",
        fr: "Formation interactive à la synthèse de boucles d'asservissement, à l'analyse du lieu des racines et au réglage de régulateurs PID avec MATLAB.",
        it: "Formazione interattiva sulla sintesi dei loop di retroazione, analisi del luogo delle radici e taratura di controllori PID in ambiente MATLAB.",
        bg: "Интерактивно обучение по синтез на контури с обратна връзка, анализ на коренови траектории и настройка на PID регулатори в MATLAB с фокус върху динамичната стабилност.",
        cs: "Interaktivní školení zaměřené na syntézu zpětnovazebních smyček, analýzu geometrického místa kořenů a ladění PID regulátorů v prostředí MATLAB.",
        pl: "Interaktywne szkolenie z zakresu syntezy pętli sprzężenia zwrotnego, analizy linii pierwiastkowych oraz strojenia regulatorów PID w środowisku MATLAB."
      },
      certificates: [
        { key: 'control_design', label: 'MathWorks Control Design Onramp with Simulink Certificate' }
      ]
    },
    {
      title: "Simulink Onramp",
      issuer: "MathWorks",
      date: "Feb 2025",
      category: "Simulation & Modeling",
      description: {
        en: "Practical model-based systems engineering curriculum covering block diagram architecture and time-domain differential simulation. Establishes rapid hardware-in-the-loop (HIL) prototyping skills for multi-domain dynamic systems.",
        tr: "Blok diyagram mimarisi ve zaman alanı diferansiyel simülasyonunu kapsayan model tabanlı sistem mühendisliği eğitimi. Çok disiplinli dinamik sistemler için hızlı donanım-içinde-döngü (HIL) prototipleme becerisi kazandırır.",
        de: "Modellbasierte Systementwicklung mit Blockschaltbildern und zeitdiskreter Simulation für Hardware-in-the-Loop-Prototyping dynamischer Systeme.",
        ru: "Курс модельно-ориентированного проектирования: структурные блок-схемы, моделирование дифференциальных уравнений и стенды полунатурного моделирования (HIL).",
        sv: "Modellbaserad systemteknik med blockscheman och tidsdomänsimulering för hårdvarunära HIL-prototypframtagning.",
        zh: "基于模型的系统工程 (MBSE) 课程。掌握多学科物理系统框图建模、微分方程数值积分仿真，构建硬件在环 (HIL) 快速原型开发验证能力。",
        fr: "Ingénierie système basée sur les modèles, architecture par schéma-blocs et simulation temporelle pour le prototypage rapide Hardware-in-the-Loop (HIL).",
        it: "Ingegneria di sistema model-based con architettura a blocchi e simulazione nel dominio del tempo per prototipazione Hardware-in-the-Loop (HIL).",
        bg: "Практическа учебна програма по моделно-базирано системно инженерство, обхващаща блокови диаграми, симулации във времевата област и бързо прототипиране Hardware-in-the-Loop (HIL).",
        cs: "Praktické modelově orientované systémové inženýrství zahrnující bloková schémata, simulace v časové oblasti a rychlé prototypování Hardware-in-the-Loop (HIL).",
        pl: "Praktyczny kurs inżynierii systemów opartej na modelach, obejmujący architekturę schematów blokowych, symulacje w dziedzinie czasu i szybkie prototypowanie HIL."
      },
      certificates: [
        { key: 'simulink', label: 'MathWorks Simulink Onramp Certificate' }
      ]
    },
    {
      title: "Python & Software Development (Pandas, NumPy, OOP)",
      issuer: "Cisco Networking Academy",
      date: "Feb 2024",
      category: "Software Development",
      description: {
        en: "Applied software engineering program covering automated data processing pipelines with Pandas and NumPy, numerical array computation, and object-oriented programming (OOP) architecture. Focused on building modular, reusable analytical tools and structured Python algorithms.",
        tr: "Pandas ve NumPy ile otomatik veri işleme hatları, sayısal dizi hesaplamaları ve nesne yönelimli programlama (OOP) mimarisini kapsayan uygulamalı yazılım geliştirme programı. Modüler analitik araçlar ve yapılandırılmış Python algoritmaları oluşturmaya odaklanır.",
        de: "Praxisorientiertes Software-Engineering-Programm mit Fokus auf automatisierte Datenverarbeitungspipelines mit Pandas und NumPy sowie objektorientierte Programmierung (OOP) in Python.",
        ru: "Практический курс программной инженерии: конвейеры обработки данных с Pandas и NumPy, вычисления с массивами и объектно-ориентированное программирование (ООП) на Python.",
        sv: "Tillämpat programutvecklingsprogram med fokus på automatiserade databehandlingsflöden i Pandas och NumPy samt objektorienterad programmering (OOP) i Python.",
        zh: "应用软件工程认证课程，涵盖基于 Pandas 与 NumPy 的自动化数据处理流水线、科学数组计算及面向对象编程 (OOP) 架构设计。",
        fr: "Programme de génie logiciel appliqué couvrant les pipelines de traitement de données avec Pandas et NumPy ainsi que la programmation orientée objet (POO) en Python.",
        it: "Programma di sviluppo software applicato dedicato a pipeline di elaborazione dati con Pandas e NumPy e programmazione orientata agli oggetti (OOP) in Python.",
        bg: "Приложна програма по софтуерно инженерство, обхващаща автоматизирани потоци за обработка на данни с Pandas и NumPy, числови масиви и обектно-ориентирано програмиране (OOP) на Python.",
        cs: "Aplikovaný program softwarového inženýrství pokrývající automatizované zpracování dat v Pandas a NumPy, numerické výpočty a objektově orientované programování (OOP) v Pythonu.",
        pl: "Praktyczny program inżynierii oprogramowania obejmujący potoki przetwarzania danych w Pandas i NumPy, obliczenia numeryczne oraz programowanie obiektowe (OOP) w Pythonie."
      }
    },
    {
      title: "Python Programming 1 & 2",
      issuer: "Bilgeiş",
      date: "Jul 2023",
      category: "Software Development",
      description: {
        en: "Advanced Python scripting curriculum focusing on data structures, algorithmic design, and data parsing pipelines with NumPy and Pandas. Used for automated hardware testing routines and instrument data logging.",
        tr: "Veri yapıları, algoritmik tasarım ve NumPy/Pandas ile veri işleme hatlarına odaklanan ileri seviye Python eğitimi. Donanım otomatik test rutinleri ve ölçüm cihazı veri kaydı için temel oluşturur.",
        de: "Vertiefte Python-Entwicklung mit Datenstrukturen, NumPy und Pandas für automatisierte Hardware-Prüfprozeduren und Messdatenerfassung.",
        ru: "Углубленное программирование на Python: структуры данных, алгоритмы, обработка массивов с помощью NumPy и Pandas для автоматизации измерений.",
        sv: "Fördjupad Python-utveckling med datastrukturer, algoritmer och pipelines i NumPy/Pandas för automatiserade testrutiner.",
        zh: "面向工程应用的高级 Python 编程认证。精通内存数据结构、模块化算法设计与 Pandas/NumPy 大规模测量数据流批处理管道。",
        fr: "Formation approfondie en Python, structures de données et manipulation analytique avec NumPy et Pandas pour les tests matériels automatisés.",
        it: "Corso approfondito di Python su strutture dati, algoritmi e pipeline con NumPy e Pandas per collaudo hardware automatico e acquisizione dati.",
        bg: "Разширена учебна програма по Python с фокус върху структури от данни, алгоритмичен дизайн и автоматизирани тестови процедури за хардуер.",
        cs: "Pokročilé programování v jazyce Python zaměřené na datové struktury, návrh algoritmů a zpracování dat pomocí NumPy a Pandas pro automatizované testování hardwaru.",
        pl: "Zaawansowany kurs języka Python poświęcony strukturom danych, algorytmice oraz przetwarzaniu danych z NumPy i Pandas do automatyzacji testów sprzętowych."
      },
      certificates: [
        { key: 'python1', label: 'Bilgeiş — Python Programlama 1' },
        { key: 'python2', label: 'Bilgeiş — Python Programlama 2' }
      ]
    },
    {
      title: "Preliminary Accounting in Microsoft Excel",
      issuer: "Bilgeiş",
      date: "Jul 2023",
      category: "Data & Analysis",
      description: {
        en: "Analytical spreadsheet modeling covering operational cost reconciliation, financial forecasting, and engineering resource ledgering. Supports budget governance for R&D industrial prototypes.",
        tr: "Operasyonel maliyet mutabakatı, finansal tahminler ve mühendislik kaynak çizelgelerini kapsayan analitik Excel modellemesi. Ar-Ge endüstriyel prototipleri için bütçe yönetimini destekler.",
        de: "Analytische Tabellenkalkulation für Kostenabstimmung, Finanzprognosen und Budgetplanung industrieller F&E-Prototypen.",
        ru: "Аналитическое моделирование в Excel: согласование операционных затрат, прогнозирование и финансовый учет ресурсов для прототипов НИОКР.",
        sv: "Kalkylbladsmodellering för kostnadsavstämning, finansiella prognoser och budgetstyrning för industriella FoU-prototyper.",
        zh: "基于 Excel 的工程财务与项目核算模型。包含研发原型机物料采购成本核销、资金现金流预估及多项目工程工时资源分配表编制。",
        fr: "Modélisation financière sur tableur pour le rapprochement des coûts, les prévisions et la gestion budgétaire des prototypes R&D.",
        it: "Modellazione analitica su fogli di calcolo per riconciliazione costi operativi, previsioni e gestione del budget per prototipi industriali.",
        bg: "Аналитично моделиране в електронни таблици за проследяване на оперативни разходи, финансово прогнозиране и управление на бюджета за индустриални R&D прототипи.",
        cs: "Analytické modelování v tabulkách Excelu zahrnující kontrolu provozních nákladů, finanční prognózy a evidenci zdrojů pro průmyslové prototypy VaV.",
        pl: "Analityczne modelowanie w programie Excel obejmujące uzgadnianie kosztów operacyjnych, prognozowanie finansowe i planowanie budżetu prototypów B+R."
      },
      certificates: [
        { key: 'excel', label: "Bilgeiş — Microsoft Excel'de Ön Muhasebe" }
      ]
    },
    {
      title: "Artificial Intelligence for Everyone 1 & 2",
      issuer: "Bilgeiş",
      date: "Jun 2023",
      category: "Artificial Intelligence",
      description: {
        en: "Foundational machine learning and deep learning methodologies covering supervised learning, classification boundaries, and neural architectures. Evaluates edge deployment constraints on embedded microcontrollers.",
        tr: "Gözetimli öğrenme, sınıflandırma sınırları ve sinir ağı mimarilerini kapsayan temel yapay zekâ metodolojileri. Gömülü mikrodenetleyiciler üzerindeki uç birim (edge AI) kısıtlarını değerlendirir.",
        de: "Grundlagen des maschinellen Lernens und neuronaler Netze sowie deren praktische Machbarkeit und Optimierung für Edge-Mikrocontroller.",
        ru: "Методологии машинного обучения и нейросетевых архитектур с оценкой ограничений развертывания на периферийных микроконтроллерах (Edge AI).",
        sv: "Grundläggande maskininlärning och neurala nätverk samt begränsningar vid implementering på strömsnåla mikrokontrollers (Edge AI).",
        zh: "机器学习与深度神经网络基础工程认证。学习监督学习算法分类边界、特征工程与嵌入式低算力终端 (Edge AI) 内存与功耗约束评估。",
        fr: "Méthodologies fondamentales de machine learning et architectures neuronales, avec analyse des contraintes de déploiement en périphérie (Edge AI).",
        it: "Metodologie fondamentali di machine learning e architetture neurali, con valutazione dei vincoli di implementazione su microcontrollori edge.",
        bg: "Основи на машинното обучение и невронните мрежи, включително обучение с учител, класификация и оценка на ограниченията за вградени микроконтролери (Edge AI).",
        cs: "Základy strojového učení a neuronových sítí včetně učení s učitelem, klasifikace a posouzení omezení pro nasazení na vestavěných mikrokontrolérech (Edge AI).",
        pl: "Podstawy uczenia maszynowego i sieci neuronowych, w tym uczenie nadzorowane, klasyfikacja oraz ocena ograniczeń wdrażania na mikrokontrolerach (Edge AI)."
      },
      certificates: [
        { key: 'ai1', label: 'Bilgeiş — Herkes için Yapay Zeka I' },
        { key: 'ai2', label: 'Bilgeiş — Herkes için Yapay Zeka II' }
      ]
    },
    {
      title: "SAP - Fundamental Systems Understanding",
      issuer: "Udemy",
      date: "May 2022",
      category: "Enterprise Systems",
      description: {
        en: "Enterprise resource planning (ERP) workflow training focusing on materials management, production orders, and supply chain tracking. Connects engineering bill of materials (BOM) with enterprise operations.",
        tr: "Malzeme yönetimi, üretim siparişleri ve tedarik zinciri takibine odaklanan kurumsal kaynak planlama (ERP) eğitimi. Mühendislik ürün ağaçlarını (BOM) kurumsal operasyonlarla ilişkilendirir.",
        de: "ERP-Grundlagen zu Materialwirtschaft, Fertigungsaufträgen und Lieferketten zur Verknüpfung technischer Stücklisten (BOM) mit Unternehmensprozessen.",
        ru: "Основы ERP-систем: управление материальными потоками, производственные заказы и логистика, связь инженерных спецификаций (BOM) с операциями.",
        sv: "Utbildning i affärssystem (ERP) med fokus på materialstyrning, produktionsordrar och koppling av tekniska stycklistor (BOM) till verksamheten.",
        zh: "企业级资源规划 (ERP) 核心架构训练。系统学习 SAP 物料主数据管理 (MM)、生产工单下发 (PP) 与物料清单 (BOM) 跨部门协同流转。",
        fr: "Principes fondamentaux des progiciels ERP : gestion des stocks, ordres de fabrication et liaison entre nomenclatures (BOM) et processus industriels.",
        it: "Formazione sui flussi ERP focalizzata sulla gestione materiali, ordini di produzione e tracciabilità delle distinte base (BOM).",
        bg: "Обучение по ERP процеси с фокус върху управление на материалите, производствени поръчки и вериги за доставки, свързващо инженерните спецификации (BOM) с бизнес операциите.",
        cs: "Školení podnikových informačních systémů (ERP) zaměřené na správu materiálu, výrobní příkazy a propojení technických kusovníků (BOM) s provozem.",
        pl: "Szkolenie z zakresu systemów ERP skupione na gospodarce materiałowej, zleceniach produkcyjnych i powiązaniu zestawień materiałowych (BOM) z operacjami firmy."
      }
    }
  ] as CertificationItem[],

  skills: {
    technical: [
      { name: "C & C++ Programming", level: 90, desc: "Embedded firmware, microcontroller register manipulation, peripheral drivers" },
      { name: "Embedded Systems", level: 92, desc: "ESP32, STM32/Arduino, SPI, I2C, UART, PWM, ADC/DAC interfaces" },
      { name: "Python", level: 85, desc: "Pandas, NumPy, automated test pipelines, data parsing & algorithms" },
      { name: "MATLAB & Simulink", level: 82, desc: "Control systems modeling, signal simulation, system dynamics" },
      { name: "Proteus", level: 80, desc: "Circuit schematic simulation, PCB layout inspection, component testing" },
      { name: "Control Systems", level: 85, desc: "PID controllers, closed-form inverse kinematics, load testing" },
      { name: "SAP", level: 75, desc: "Fundamental enterprise systems workflow & asset resource tracking" },
      { name: "Microsoft Office", level: 90, desc: "Advanced Excel modeling, technical reports, presentation decks" }
    ],
    professional: [
      {
        name: {
          en: "Analytical Thinking",
          tr: "Analitik Düşünme",
          de: "Analytisches Denken",
          ru: "Аналитическое мышление",
          sv: "Analytiskt tänkande",
          zh: "严密分析思维",
          fr: "Pensée analytique",
          it: "Pensiero analitico",
          cs: "Analytické myšlení",
          pl: "Myślenie analityczne"
        },
        desc: {
          en: "Systematic root-cause analysis for electrical transients and firmware edge cases.",
          tr: "Elektriksel geçiş durumları ve yazılım sınır koşulları için sistematik kök-neden analizi.",
          de: "Systematische Ursachenanalyse elektrischer Transienten und Firmware-Grenzfälle.",
          ru: "Системный анализ первопричин переходных процессов и граничных условий прошивки.",
          sv: "Systematisk rotorsaksanalys för elektriska transienter och gränsfall i firmware.",
          zh: "针对电气瞬态与固件极值边缘工况建立系统化根因排查机制。",
          fr: "Analyse méthodique des causes racines des transitoires électriques et cas limites.",
          it: "Analisi sistematica delle cause alla radice di transitori e casi limite nel firmware.",
          cs: "Systematická analýza kořenových příčin elektrických přechodových jevů a hraničních případů firmwaru.",
          pl: "Systematyczna analiza przyczyn źródłowych stanów nieustalonych i przypadków brzegowych oprogramowania."
        }
      },
      {
        name: {
          en: "Problem Solving",
          tr: "Problem Çözme",
          de: "Problemlösungskompetenz",
          ru: "Решение сложных задач",
          sv: "Problemlösningsförmåga",
          zh: "工程攻坚解题能力",
          fr: "Résolution de problèmes",
          it: "Risoluzione dei problemi",
          cs: "Řešení problémů",
          pl: "Rozwiązywanie problemów"
        },
        desc: {
          en: "Translating complex kinematics and motor load specifications into robust algorithms.",
          tr: "Karmaşık kinematik ve motor yük spesifikasyonlarını sağlam algoritmalara dönüştürme.",
          de: "Umsetzung komplexer kinematischer Anforderungen und Lastprofile in robuste Algorithmen.",
          ru: "Преобразование сложной кинематики и нагрузочных спецификаций в надежные алгоритмы.",
          sv: "Översätta komplex kinematik och motorbelastningsprofiler till robusta algoritmer.",
          zh: "将高阶空间机构动力学模型与电机重载指标解耦转化为高鲁棒控制算法。",
          fr: "Traduction de cinématiques complexes et de profils de charge en algorithmes robustes.",
          it: "Conversione di cinematica complessa e specifiche di carico in algoritmi affidabili.",
          cs: "Převod složité kinematiky a specifikací zatížení motorů do spolehlivých algoritmů.",
          pl: "Przekładanie złożonej kinematyki oraz specyfikacji obciążenia silników na niezawodne algorytmy."
        }
      },
      {
        name: {
          en: "Eagerness to Learn",
          tr: "Öğrenmeye Açıklık",
          de: "Lernbereitschaft & Neugier",
          ru: "Быстрая обучаемость",
          sv: "Vilja att lära",
          zh: "主动求知与技术敏锐度",
          fr: "Désir d'apprendre",
          it: "Desiderio di apprendere",
          cs: "Ochota učit se",
          pl: "Chęć do nauki"
        },
        desc: {
          en: "Rapidly mastering emerging avionics protocols, flight systems, and embedded frameworks.",
          tr: "Yeni nesil aviyonik protokolleri, uçuş sistemleri ve gömülü kütüphaneleri hızla kavrama.",
          de: "Schnelle Einarbeitung in moderne Avionikprotokolle, Flugsysteme und Embedded-Frameworks.",
          ru: "Быстрое освоение новых протоколов авионики, полетных систем и встраиваемых библиотек.",
          sv: "Snabb inlärning av nya avionikprotokoll, styrsystem och inbyggda ramverk.",
          zh: "对前沿航空电子通信标准、飞控机载系统与新锐微处理器框架保持极速掌握力。",
          fr: "Assimilation rapide des nouveaux protocoles avioniques et bibliothèques embarquées.",
          it: "Rapida acquisizione di protocolli avionici emergenti e framework embedded.",
          cs: "Rychlé osvojování nových avionických protokolů, letových systémů a vestavěných frameworků.",
          pl: "Szybkie opanowywanie nowoczesnych protokołów awioniki, systemów lotniczych i frameworków wbudowanych."
        }
      },
      {
        name: {
          en: "Adaptability",
          tr: "Uyum Sağlama Yeteneği",
          de: "Anpassungsfähigkeit",
          ru: "Гибкость и адаптивность",
          sv: "Anpassningsförmåga",
          zh: "多维适应力",
          fr: "Adaptabilité",
          it: "Adattabilità",
          cs: "Přizpůsobivost",
          pl: "Zdolność adaptacji"
        },
        desc: {
          en: "Seamless transitions between hardware prototyping, firmware coding, and R&D compliance.",
          tr: "Donanım prototipleme, yazılım geliştirme ve Ar-Ge regülasyonları arasında akıcı geçiş.",
          de: "Nahtloser Wechsel zwischen Hardware-Prototypen, Firmware-Entwicklung und F&E-Regularien.",
          ru: "Свободное переключение между прототипированием, разработкой ПО и стандартами НИОКР.",
          sv: "Smidiga övergångar mellan hårdvaruprototyper, mjukvarukod och FoU-standarder.",
          zh: "在硬件台架搭设焊接、低层 C 固件编写与严谨标准化合规审核之间敏捷自如切换。",
          fr: "Passage fluide entre prototypage matériel, développement firmware et conformité R&D.",
          it: "Flessibilità tra prototipazione hardware, scrittura di firmware e conformità R&S.",
          cs: "Plynulé přechody mezi prototypováním hardwaru, programováním firmwaru a normami VaV.",
          pl: "Płynne przechodzenie między prototypowaniem sprzętu, programowaniem firmware i wymogami B+R."
        }
      },
      {
        name: {
          en: "Technical Documentation",
          tr: "Teknik Dokümantasyon",
          de: "Technische Dokumentation",
          ru: "Техническое документирование",
          sv: "Teknisk dokumentation",
          zh: "规范化技术文档能力",
          fr: "Documentation technique",
          it: "Documentazione tecnica",
          cs: "Technická dokumentace",
          pl: "Dokumentacja techniczna"
        },
        desc: {
          en: "Structured IEC compliance reports, user guides, schematics, and clean engineering notes.",
          tr: "IEC uyumluluk raporları, kullanıcı rehberleri, şematikler ve düzenli mühendislik notları.",
          de: "Strukturierte IEC-Prüfberichte, Benutzerhandbücher, Schaltpläne und saubere Notizen.",
          ru: "Составление отчетов соответствия IEC, руководств, схем и инженерных протоколов.",
          sv: "Strukturerade IEC-efterlevnadsrapporter, användarguider, kretsscheman och ingenjörsanteckningar.",
          zh: "具备编撰严谨 IEC 认证合规测试报告、设备操作手册、原理图与可维护工程日志的规范水准。",
          fr: "Rapports de conformité CEI structurés, schémas fonctionnels et notes d'ingénierie.",
          it: "Redazione di report di conformità IEC, manuali utente, schemi e note ingegneristiche.",
          cs: "Strukturované zprávy o shodě IEC, uživatelské příručky, schémata a přehledné technické poznámky.",
          pl: "Ustrukturyzowane raporty zgodności IEC, instrukcje obsługi, schematy i przejrzyste notatki inżynierskie."
        }
      }
    ]
  },

  languages: [
    {
      name: { 
        en: "English", tr: "İngilizce", de: "Englisch", ru: "Английский", 
        sv: "Engelska", zh: "英语", fr: "Anglais", it: "Inglese",
        bg: "Английски", cs: "Angličtina", pl: "Angielski"
      },
      level: "C1",
      badge: { 
        en: "Advanced / Technical Proficiency", 
        tr: "İleri Seviye / Mesleki Yetkinlik",
        de: "Fortgeschrittene Kenntnisse / Technische Fachkompetenz",
        ru: "Продвинутый уровень / Профессиональная компетенция",
        sv: "Avancerad nivå / Teknisk kompetens",
        zh: "高级 / 技术专业工作语言",
        fr: "Niveau avancé / Compétence technique",
        it: "Livello avanzato / Competenza tecnica",
        bg: "Напреднало ниво / Техническа компетентност",
        cs: "Pokročilá úroveň / Technická způsobilost",
        pl: "Poziom zaawansowany / Biegłość techniczna"
      },
      details: {
        en: "Full technical literacy in English engineering literature, documentation, and international teams.",
        tr: "İngilizce mühendislik literatürü, teknik dokümantasyon ve uluslararası ekiplerde tam mesleki yetkinlik.",
        de: "Sichere Verständigung in englischer Fachliteratur, Dokumentation und internationalen Teams.",
        ru: "Свободное чтение технической документации и взаимодействие в международных командах.",
        sv: "Fullgod förmåga i engelsk ingenjörslitteratur, dokumentation och internationella team.",
        zh: "能流畅阅读英文航空航天及嵌入式学术文献，自主编写技术白皮书并适应全英文跨国工程协作。",
        fr: "Maîtrise technique complète de la documentation en anglais et des échanges internationaux.",
        it: "Piena competenza nella letteratura ingegneristica in inglese, documentazione e team internazionali.",
        bg: "Пълна техническа грамотност в английската инженерна литература, документация и международни екипи.",
        cs: "Plná technická orientace v anglické inženýrské literatuře, dokumentaci a mezinárodních týmech.",
        pl: "Pełna biegłość techniczna w angielskiej literaturze inżynierskiej, dokumentacji i zespołach międzynarodowych."
      }
    },
    {
      name: { 
        en: "Russian", tr: "Rusça", de: "Russisch", ru: "Русский", 
        sv: "Ryska", zh: "俄语", fr: "Russe", it: "Russo",
        bg: "Руски", cs: "Ruština", pl: "Rosyjski"
      },
      level: "A2",
      badge: { 
        en: "Pre-Intermediate", 
        tr: "Temel-Orta Seviye",
        de: "Erweiterte Grundkenntnisse",
        ru: "Базовый уровень",
        sv: "Grundläggande nivå",
        zh: "初级进阶",
        fr: "Niveau pré-intermédiaire",
        it: "Pre-intermedio",
        bg: "Основно ниво",
        cs: "Mírně pokročilá úroveň",
        pl: "Podstawowy wyższy"
      },
      details: {
        en: "Basic conversational and foundational language understanding.",
        tr: "Temel iletişim ve temel gramer anlama seviyesi.",
        de: "Grundlegende Kommunikations- und Lesefähigkeiten.",
        ru: "Базовые разговорные навыки и понимание основ грамматики.",
        sv: "Grundläggande konversation och språkförståelse.",
        zh: "掌握常用日常短语与基础语法架构认知。",
        fr: "Compréhension élémentaire et conversations simples.",
        it: "Competenze di conversazione di base e comprensione elementare.",
        bg: "Основни разговорни умения и разбиране на базовия език.",
        cs: "Základní konverzační dovednosti a porozumění základům jazyka.",
        pl: "Podstawowa znajomość języka w mowie oraz rozumienie podstaw gramatyki."
      }
    }
  ],

  // References: STRICTLY KEEPING EMAIL ONLY (NO PHONE NUMBERS AS REQUESTED)
  references: [
    {
      name: "Prof. Dr. İsmail Hakkı ALTAŞ",
      title: {
        en: "Head of Electrical & Electronics Dept.",
        tr: "Elektrik ve Elektronik Mühendisliği Bölüm Başkanı",
        de: "Leiter des Fachbereichs Elektro- und Elektroniktechnik",
        ru: "Заведующий кафедрой электротехники и электроники",
        sv: "Prefekt för institutionen för elektro- och elektronik",
        zh: "电气与电子工程系系主任",
        fr: "Directeur du Département Génie Électrique et Électronique",
        it: "Direttore del Dipartimento di Ingegneria Elettrica ed Elettronica",
        cs: "Vedoucí katedry elektrotechniky a elektroniky",
        pl: "Kierownik Katedry Elektrotechniki i Elektroniki"
      },
      organization: "Ostim Technical University",
      email: "ismailhakki.altas@ostimteknik.edu.tr"
    },
    {
      name: "Dr. Öğr. Üyesi Hüseyin KÖSE",
      title: {
        en: "General Manager & Founder",
        tr: "Genel Müdür & Kurucu",
        de: "Geschäftsführer & Gründer",
        ru: "Генеральный директор и основатель",
        sv: "VD & Grundare",
        zh: "总经理兼创始人",
        fr: "Directeur Général & Fondateur",
        it: "Direttore Generale & Fondatore",
        cs: "Generální ředitel a zakladatel",
        pl: "Dyrektor Generalny i Założyciel"
      },
      organization: "PESS Power Electronic Solutions",
      email: "huseyin.kose@ostimteknik.edu.tr"
    },
    {
      name: "Dr. Şenol GÜLGÖNÜL",
      title: {
        en: "Former Manager of Electronic Systems",
        tr: "Eski Elektronik Sistemler Müdürü",
        de: "Ehemaliger Leiter Elektronische Systeme",
        ru: "Экс-руководитель направления электронных систем",
        sv: "Tidigare chef för elektroniska system",
        zh: "前电子系统事业部总监",
        fr: "Ancien Responsable des Systèmes Électroniques",
        it: "Ex Responsabile dei Sistemi Elettronici",
        cs: "Bývalý manažer elektronických systémů",
        pl: "Były Kierownik Systemów Elektronicznych"
      },
      organization: "BMC Power",
      email: "senol.gulgonul@ostimteknik.edu.tr"
    }
  ] as ReferenceItem[]
};
