import { SupportedLang } from './translations';

export type LocalizedString = Record<SupportedLang, string>;
export type LocalizedStringList = Record<SupportedLang, string[]>;

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

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: LocalizedString;
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

export const cvData = {
  personal: {
    name: "YAĞMUR KAHRAMAN",
    title: {
      en: "Electrical & Electronics Engineering | Focused on Embedded Systems, Power Electronics & Avionics Technologies",
      tr: "Elektrik & Elektronik Mühendisliği | Gömülü Sistemler, Güç Elektroniği ve Aviyonik Teknolojileri Odaklı",
      de: "Elektro- und Elektroniktechnik | Schwerpunkt Eingebettete Systeme, Leistungselektronik & Avionik-Technologien",
      ru: "Инженерия электрики и электроники | Специализация: Встраиваемые системы, силовая электроника и технологии авионики",
      sv: "Elektro- och Elektronikteknik | Fokus på inbyggda system, kraftelektronik och avionikteknik",
      zh: "电气与电子工程专业 | 专注于嵌入式系统、电力电子与航空电子技术",
      fr: "Génie Électrique et Électronique | Spécialisation Systèmes Embarqués, Électronique de Puissance et Technologies Avioniques",
      it: "Ingegneria Elettrica ed Elettronica | Focalizzata su Sistemi Embedded, Elettronica di Potenza e Tecnologie Avioniche"
    } as LocalizedString,
    shortTitle: {
      en: "Embedded Systems & Avionics Engineer",
      tr: "Gömülü Sistemler & Aviyonik Mühendisi",
      de: "Ingenieurin für Eingebettete Systeme & Avionik",
      ru: "Инженер встраиваемых систем и авионики",
      sv: "Ingenjör inom inbyggda system & avionik",
      zh: "嵌入式系统与航空电子工程师",
      fr: "Ingénieur Systèmes Embarqués & Avionique",
      it: "Ingegnere Sistemi Embedded e Avionica"
    } as LocalizedString,
    location: "İzmir, Turkey",
    email: "kahramanyagmur178@gmail.com",
    linkedin: "linkedin.com/in/yagmur-kahraman-37a040255",
    linkedinUrl: "https://www.linkedin.com/in/yagmur-kahraman-37a040255",
    photo: "/assets/aistudio/Profesyonel_Kad_n_Portresi_11bf1af2.png",
    profile: {
      en: "Analytical Electrical and Electronics Engineering graduate specializing in embedded firmware development, microcontrollers, and avionics technology. Experienced in dynamic hardware-software integration, automated testing workflows, and cross-functional project management. Committed to deploying reliable engineering solutions for real-world electronic systems.",
      tr: "Gömülü yazılım (firmware) geliştirme, mikrodenetleyiciler ve aviyonik teknolojileri üzerine uzmanlaşan analitik Elektrik ve Elektronik Mühendisi. Dinamik donanım-yazılım entegrasyonu, otomatik test iş akışları ve çok fonksiyonlu proje yönetiminde deneyimli. Gerçek dünya elektronik sistemleri için yüksek güvenilirlikte mühendislik çözümleri üretmeye kararlı.",
      de: "Analytische Absolventin der Elektro- und Elektroniktechnik mit Spezialisierung auf Firmware-Entwicklung, Mikrocontroller und Avionik. Erfahren in dynamischer Hardware-Software-Integration, automatisierten Prüfabläufen und Projektmanagement.",
      ru: "Аналитичный инженер-выпускник по направлению «Электрика и электроника», специализирующаяся на разработке встраиваемого ПО, микроконтроллерах и авионике. Опыт аппаратной интеграции и автоматизированного тестирования.",
      sv: "Analytisk elektro- och elektronikingenjör med inriktning mot inbyggd mjukvara, mikrokontrollers och avionik. Erfarenhet av dynamisk hårdvaru-mjukvaruintegration, automatiserade tester och projektledning.",
      zh: "电气与电子工程专业优秀毕业生，专注于嵌入式底层固件开发、微控制器应用与航空电子技术。熟练掌握动态软硬件集成、自动化测试流水线构建与跨职能工程管理，致力于为实际电子系统交付高可靠工程方案。",
      fr: "Ingénieure diplômée en génie électrique et électronique, spécialisée dans le développement de firmware embarqué, les microcontrôleurs et l'avionique. Expérience en intégration matérielle-logicielle et tests automatisés.",
      it: "Ingegnere elettrico ed elettronico specializzata nello sviluppo di firmware embedded, microcontrollori e avionica. Esperienza nell'integrazione hardware-software dinamica e nei flussi di collaudo automatici."
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
        it: "Stagista Ingegnere Gestione Progetti R&S"
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
        it: "Stagista Tecnologie dell'Informazione"
      },
      location: "Çankaya, Ankara",
      period: "Jul 2025 – Aug 2025",
      category: "it",
      points: {
        en: [
          "Contributed to the web design, frontend interface testing, optimization for an institution-specific government web portal.",
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
        it: "Stagista Sistemi Embedded e Ingegneria del Software"
      },
      location: "Remote",
      period: "Jun 2024 – Jun 2024",
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
        ]
      }
    },
    {
      company: "Cisco Networking Academy",
      role: {
        en: "Python & Software Development Trainee",
        tr: "Python & Yazılım Geliştirme Stajyeri",
        de: "Praktikantin Python & Softwareentwicklung",
        ru: "Стажер по Python и разработке ПО",
        sv: "Praktikant inom Python & mjukvaruutveckling",
        zh: "Python 与软件开发实习生",
        fr: "Stagiaire Python & Développement Logiciel",
        it: "Stagista Python e Sviluppo Software"
      },
      location: "İzmir, Turkey",
      period: "Jan 2024 – Feb 2024",
      category: "it",
      points: {
        en: [
          "Engineered automated data processing pipelines using Python libraries (Pandas, NumPy) to accelerate analytical workflows.",
          "Built algorithm prototypes focusing on data manipulation and object-oriented program design."
        ],
        tr: [
          "Analitik iş akışlarını hızlandırmak için Python kütüphaneleri (Pandas, NumPy) kullanarak otomatik veri işleme hatları geliştirdi.",
          "Veri manipülasyonu ve nesne yönelimli programlama (OOP) tasarımına odaklanan algoritma prototipleri oluşturdu."
        ],
        de: [
          "Entwicklung automatisierter Datenverarbeitungspipelines mit Python-Bibliotheken (Pandas, NumPy) zur Beschleunigung analytischer Arbeitsabläufe.",
          "Entwicklung von Algorithmen-Prototypen mit Fokus auf Datenmanipulation und objektorientiertem Programmentwurf."
        ],
        ru: [
          "Создание автоматизированных конвейеров обработки данных с использованием библиотек Python (Pandas, NumPy) для ускорения аналитики.",
          "Разработка прототипов алгоритмов с акцентом на обработку данных и объектно-ориентированное программирование."
        ],
        sv: [
          "Utvecklade automatiserade databehandlingspipeliner med Python-bibliotek (Pandas, NumPy) för snabbare analysflöden.",
          "Byggde algoritmprototyper med fokus på datamanipulering och objektorienterad programdesign."
        ],
        zh: [
          "基于 Python 核心科学计算库 (Pandas, NumPy) 构建自动化高并发数据预处理流水线，大幅提升分析效率。",
          "基于面向对象程序设计原则 (OOP) 构思并实现多项核心算法原型，保障数据操作高效与稳定。"
        ],
        fr: [
          "Conception de pipelines de traitement automatisé des données à l'aide de Pandas et NumPy pour accélérer les flux analytiques.",
          "Création de prototypes d'algorithmes axés sur la manipulation de données et la conception orientée objet."
        ],
        it: [
          "Progettazione di pipeline di elaborazione automatica dei dati con librerie Python (Pandas, NumPy) per velocizzare i flussi di lavoro analitici.",
          "Creazione di prototipi algoritmici incentrati sulla manipolazione dei dati e programmazione orientata agli oggetti (OOP)."
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
        it: "Stagista Sistemi Elettrici e di Rete"
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
        it: "Laurea Triennale in Ingegneria Elettrica ed Elettronica (Inglese)"
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
        it: "Focalizzato su Sistemi Embedded, Elettronica di Potenza e Tecnologie Avioniche."
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
      it: "Robot Quadrupede Educativo a Basso Costo"
    },
    summary: {
      en: "Designed and implemented Dogduino, a quadruped robot built around the ESP32 microcontroller and PCA9685 PWM driver for accessible robotics education.",
      tr: "Erişilebilir robotik eğitimi amacıyla ESP32 mikrodenetleyici ve PCA9685 PWM sürücüsü etrafında tasarlanan ve üretilen dört bacaklı Dogduino robotu.",
      de: "Entwicklung und Bau von Dogduino, einem vierbeinigen Roboter auf Basis des ESP32-Mikrocontrollers und PCA9685-PWM-Treibers für praxisnahe Robotikausbildung.",
      ru: "Проектирование и создание Dogduino — четвероногого робота на базе микроконтроллера ESP32 и ШИМ-драйвера PCA9685 для доступного обучения робототехнике.",
      sv: "Konstruerade och implementerade Dogduino, en fyrbent robot byggd kring mikrokontrollern ESP32 och PCA9685 PWM-drivrutin för tillgänglig robotikutbildning.",
      zh: "自主设计并研制 Dogduino 仿生四足机器人，基于 ESP32 双核微控制器与 PCA9685 PWM 驱动板，面向普惠型机器人工程教学。",
      fr: "Conception et réalisation de Dogduino, un robot quadrupède basé sur le microcontrôleur ESP32 et le pilote PWM PCA9685.",
      it: "Progettazione e realizzazione di Dogduino, un robot quadrupede basato su microcontrollore ESP32 e driver PWM PCA9685 per la didattica robotica."
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
      ]
    },
    specs: [
      { 
        label: { 
          en: "Microcontroller", tr: "Mikrodenetleyici", de: "Mikrocontroller", 
          ru: "Микроконтроллер", sv: "Mikrokontroller", zh: "核心微控制器", 
          fr: "Microcontrôleur", it: "Microcontrollore" 
        }, 
        value: "ESP-32 Dual-Core Tensilica" 
      },
      { 
        label: { 
          en: "PWM Controller", tr: "PWM Sürücü", de: "PWM-Treiber", 
          ru: "ШИМ-драйвер", sv: "PWM-kontroller", zh: "PWM 舵机驱动板", 
          fr: "Pilote PWM", it: "Driver PWM" 
        }, 
        value: "PCA9685 16-Channel 12-bit I2C" 
      },
      { 
        label: { 
          en: "Actuation", tr: "Eyleyici Sistemi", de: "Aktuatoren", 
          ru: "Сервоприводы", sv: "Aktuatorer", zh: "执行机构", 
          fr: "Actionneurs", it: "Attuatori" 
        }, 
        value: "8x Metal-Gear Servos (2-DOF / Leg)" 
      },
      { 
        label: { 
          en: "Control Protocol", tr: "Haberleşme", de: "Kommunikationsprotokoll", 
          ru: "Протокол связи", sv: "Styrprotokoll", zh: "通信控制协议", 
          fr: "Protocole de Commande", it: "Protocollo di Controllo" 
        }, 
        value: "Bluetooth BLE & Serial UART" 
      },
      { 
        label: { 
          en: "Kinematics", tr: "Kinematik Çözüm", de: "Kinematik-Modell", 
          ru: "Кинематика", sv: "Kinematik", zh: "运动学求解模型", 
          fr: "Cinématique", it: "Cinematica" 
        }, 
        value: "Closed-Form Inverse Kinematics" 
      },
      { 
        label: { 
          en: "Interactive Display", tr: "Karakter Ekranı", de: "Interaktives Display", 
          ru: "Интерактивный экран", sv: "Interaktiv display", zh: "表情交互屏幕", 
          fr: "Écran Interactif", it: "Schermo Interattivo" 
        }, 
        value: "Front-Mounted Animated LCD Screen" 
      },
      { 
        label: { 
          en: "Chassis Fabrication", tr: "Gövde İmalatı", de: "Chassis-Fertigung", 
          ru: "Корпус", sv: "Chassitillverkning", zh: "机身结构制造", 
          fr: "Châssis", it: "Telaio" 
        }, 
        value: "Custom Modular 3D Printed PETG/PLA" 
      },
      { 
        label: { 
          en: "Power Optimization", tr: "Güç Mimarisi", de: "Stromversorgung", 
          ru: "Система питания", sv: "Effektoptimering", zh: "供电拓扑架构", 
          fr: "Alimentation", it: "Alimentazione" 
        }, 
        value: "Dual-rail isolated regulator circuitry" 
      }
    ],
    video: {
      src: "/assets/aistudio/dogduino-video_0fa1ed27.mp4",
      caption: {
        en: "Dogduino dynamic walking gait execution demonstration in test bench environment.",
        tr: "Dogduino dinamik yürüme ve adım kontrol algoritmasının test ortamında canlı demonstrasyonu.",
        de: "Demonstration der dynamischen Gangausführung von Dogduino auf dem Prüfstand.",
        ru: "Демонстрация динамической походки робота Dogduino на испытательном стенде.",
        sv: "Demonstration av dynamisk gångkontroll för Dogduino i testmiljö.",
        zh: "Dogduino 机器狗动态小跑步态与连续步幅控制台架实时运行演示。",
        fr: "Démonstration de la démarche dynamique de Dogduino en environnement de test.",
        it: "Dimostrazione dell'andatura dinamica di Dogduino sul banco di prova."
      }
    },
    images: [
      {
        src: "/assets/aistudio/dogduino-1_e6123476.png",
        title: {
          en: "Frontal View & Active Face Display",
          tr: "Ön Görünüş & Canlı Karakter Ekranı",
          de: "Frontansicht & Interaktives LCD-Display",
          ru: "Вид спереди и активный LCD-дисплей",
          sv: "Frontvy och aktiv LCD-skärm",
          zh: "正视姿态与动态 LCD 表情屏",
          fr: "Vue frontale et écran LCD dynamique",
          it: "Vista frontale e display LCD dinamico"
        },
        description: {
          en: "Front profile highlighting the integrated interactive LCD screen rendering dynamic facial expressions, flanked by 2-DOF articulated front legs.",
          tr: "Dinamik yüz ifadelerini gösteren entegre LCD ekranı ve 2 serbestlik dereceli ön mafsallı bacak mimarisini gösteren ön profil.",
          de: "Frontales Profil mit integriertem LCD-Display für animierte Gesichtsausdrücke und 2-DOF-Vorderbeinen.",
          ru: "Фронтальный вид: встроенный LCD-экран с динамической анимацией эмоций и 2-DOF шарнирные передние конечности.",
          sv: "Frontprofil med integrerad LCD-skärm för dynamiska ansiktsuttryck och 2-DOF ledade framben.",
          zh: "机器狗正面视角：集成微型彩色 LCD 屏幕呈现灵动小狗表情，前肢各配置 2 自由度连杆舵机驱动关节。",
          fr: "Profil avant montrant l'écran LCD interactif avec expressions faciales et pattes avant à 2 DDL.",
          it: "Profilo anteriore con display LCD interattivo ed espressioni animate, affiancato da zampe anteriori a 2 DOF."
        }
      },
      {
        src: "/assets/aistudio/dogduino-2_a5659b87.png",
        title: {
          en: "Chassis & Mechanical Linkage Geometry",
          tr: "Gövde ve Mekanik Bacak Geometrisi",
          de: "Chassis & Mechanische Gelenkgeometrie",
          ru: "Шасси и механика рычажных сочленений",
          sv: "Chassi och mekanisk länkagegeometri",
          zh: "机械躯干与四肢连杆受力构型",
          fr: "Châssis et géométrie des liaisons mécaniques",
          it: "Telaio e cinematica dei collegamenti meccanici"
        },
        description: {
          en: "Side view detailing the 4-leg linkage mechanics, dual servo mounting brackets, and rigid lightweight enclosure housing the power and logic boards.",
          tr: "Dört bacak mafsal mekaniğini, servo montaj yuvalarını ve mantık/güç devrelerini barındıran hafif gövde tasarımını gösteren yan görünüm.",
          de: "Seitenansicht mit Details zur Beinmechanik, den Servohalterungen und dem leichten Gehäuse für Steuerung und Akku.",
          ru: "Вид сбоку: кинематика сочленений, кронштейны крепления сервоприводов и легкий корпус для электроники.",
          sv: "Sidovy som visar mekaniken med 4 länkade ben, servofästen och det lätta chassit för styrkort och batteri.",
          zh: "侧视结构图：清晰呈现 4 组四连杆受力支撑骨架、双舵机独立锁紧卡座及容纳主控板与电芯的超轻量化 3D 打印座舱。",
          fr: "Vue latérale détaillant les tringleries des pattes, les supports de servos et le boîtier abritant l'électronique.",
          it: "Vista laterale che illustra la cinematica delle zampe, i supporti dei servi e l'alloggiamento leggero per le schede."
        }
      },
      {
        src: "/assets/aistudio/dogduino-3_d55573d5.png",
        title: {
          en: "Electronics Bench Testing & Calibration",
          tr: "Elektronik Test Tezgahı & Kalibrasyon",
          de: "Elektronik-Prüfstand & Kalibrierung",
          ru: "Стендовые испытания и калибровка",
          sv: "Elektronikprovbänk & Kalibrering",
          zh: "电子系统台架精密测量与零点标定",
          fr: "Banc de test électronique et étalonnage",
          it: "Banco di prova elettronico e calibrazione"
        },
        description: {
          en: "Hardware bench validation setup showing multi-meter voltage verification, servo zero-angle calibration, and real-time firmware debugging.",
          tr: "Multimetre voltaj doğrulaması, servo sıfır açısı kalibrasyonu ve gerçek zamanlı gömülü yazılım hata ayıklama laboratuvar kurulumu.",
          de: "Prüfstandsaufbau zur Spannungsüberprüfung mit Multimeter, Servonullpunkt-Kalibrierung und Firmware-Debugging.",
          ru: "Лабораторная валидация: замеры напряжений мультиметром, калибровка нулевых углов сервоприводов и отладка прошивки.",
          sv: "Laboratoriemiljö med multimetermätningar, nollpunktskalibrering av servon och realtidsfelsökning av firmware.",
          zh: "台架硬件联调现场：使用数字万用表对各母线纹波实施精测，核定舵机硬件机械绝对零位偏角，进行嵌入式固件在线断点排障。",
          fr: "Validation sur banc d'essai : vérification des tensions au multimètre, étalonnage du zéro des servos et débogage firmware.",
          it: "Setup di validazione a banco con multimetro, azzeramento degli angoli dei servomotori e debug firmware in tempo reale."
        }
      }
    ]
  } as ProjectData,

  certifications: [
    {
      title: "TEI Aviation Engines School",
      issuer: "TUSAŞ Engine Industries",
      date: "Mar 2025",
      category: "Avionics & Aerospace",
      description: {
        en: "Comprehensive aerospace powertrain and gas turbine training program conducted by TEI. Explores aircraft propulsion mechanics, thermal boundary dynamics, and engine electronic control unit (FADEC) architecture.",
        tr: "TUSAŞ Motor Sanayii (TEI) tarafından yürütülen kapsamlı havacılık güç sistemleri ve gaz türbinleri eğitim programı. Uçak itki mekaniği, termal sınır dinamikleri ve motor elektronik kontrol ünitesi (FADEC) mimarisini kapsar.",
        de: "Umfassendes Schulungsprogramm für Flugzeugantriebe und Gasturbinen der TEI. Behandelt Triebwerksdynamik, Thermik und elektronische FADEC-Steuergeräte.",
        ru: "Программа обучения по авиационным двигателям и газовым турбинам от TEI. Охватывает механику реактивной тяги, тепловые режимы и системы управления FADEC.",
        sv: "Omfattande utbildningsprogram inom flygmotorer och gasturbiner från TEI. Behandlar framdrivningsmekanik, termodynamik och elektroniska motorstyrsystem (FADEC).",
        zh: "土耳其发动机工业公司 (TEI) 航空动力与燃气涡轮发动机高阶工程项目。深入研讨航空发动机热力学边界、推力矢量控制及全权限数字式发动机控制 (FADEC) 架构。",
        fr: "Formation approfondie sur les turboréacteurs et turbines à gaz par TEI. Aborde la propulsion aéronautique, la thermique et l'architecture FADEC.",
        it: "Programma di formazione avanzato sui motori aeronautici e turbine a gas di TEI. Tratta la termodinamica della propulsione e l'architettura delle centraline FADEC."
      }
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
        it: "Formazione interattiva sulla sintesi dei loop di retroazione, analisi del luogo delle radici e taratura di controllori PID in ambiente MATLAB."
      }
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
        it: "Ingegneria di sistema model-based con architettura a blocchi e simulazione nel dominio del tempo per prototipazione Hardware-in-the-Loop (HIL)."
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
        it: "Corso approfondito di Python su strutture dati, algoritmi e pipeline con NumPy e Pandas per collaudo hardware automatico e acquisizione dati."
      }
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
        it: "Metodologie fondamentali di machine learning e architetture neurali, con valutazione dei vincoli di implementazione su microcontrollori edge."
      }
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
        it: "Modellazione analitica su fogli di calcolo per riconciliazione costi operativi, previsioni e gestione del budget per prototipi industriali."
      }
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
        it: "Formazione sui flussi ERP focalizzata sulla gestione materiali, ordini di produzione e tracciabilità delle distinte base (BOM)."
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
          it: "Pensiero analitico"
        },
        desc: {
          en: "Systematic root-cause analysis for electrical transients and firmware edge cases.",
          tr: "Elektriksel geçiş durumları ve yazılım sınır koşulları için sistematik kök-neden analizi.",
          de: "Systematische Ursachenanalyse elektrischer Transienten und Firmware-Grenzfälle.",
          ru: "Системный анализ первопричин переходных процессов и граничных условий прошивки.",
          sv: "Systematisk rotorsaksanalys för elektriska transienter och gränsfall i firmware.",
          zh: "针对电气瞬态与固件极值边缘工况建立系统化根因排查机制。",
          fr: "Analyse méthodique des causes racines des transitoires électriques et cas limites.",
          it: "Analisi sistematica delle cause alla radice di transitori e casi limite nel firmware."
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
          it: "Risoluzione dei problemi"
        },
        desc: {
          en: "Translating complex kinematics and motor load specifications into robust algorithms.",
          tr: "Karmaşık kinematik ve motor yük spesifikasyonlarını sağlam algoritmalara dönüştürme.",
          de: "Umsetzung komplexer kinematischer Anforderungen und Lastprofile in robuste Algorithmen.",
          ru: "Преобразование сложной кинематики и нагрузочных спецификаций в надежные алгоритмы.",
          sv: "Översätta komplex kinematik och motorbelastningsprofiler till robusta algoritmer.",
          zh: "将高阶空间机构动力学模型与电机重载指标解耦转化为高鲁棒控制算法。",
          fr: "Traduction de cinématiques complexes et de profils de charge en algorithmes robustes.",
          it: "Conversione di cinematica complessa e specifiche di carico in algoritmi affidabili."
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
          it: "Desiderio di apprendere"
        },
        desc: {
          en: "Rapidly mastering emerging avionics protocols, flight systems, and embedded frameworks.",
          tr: "Yeni nesil aviyonik protokolleri, uçuş sistemleri ve gömülü kütüphaneleri hızla kavrama.",
          de: "Schnelle Einarbeitung in moderne Avionikprotokolle, Flugsysteme und Embedded-Frameworks.",
          ru: "Быстрое освоение новых протоколов авионики, полетных систем и встраиваемых библиотек.",
          sv: "Snabb inlärning av nya avionikprotokoll, styrsystem och inbyggda ramverk.",
          zh: "对前沿航空电子通信标准、飞控机载系统与新锐微处理器框架保持极速掌握力。",
          fr: "Assimilation rapide des nouveaux protocoles avioniques et bibliothèques embarquées.",
          it: "Rapida acquisizione di protocolli avionici emergenti e framework embedded."
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
          it: "Adattabilità"
        },
        desc: {
          en: "Seamless transitions between hardware prototyping, firmware coding, and R&D compliance.",
          tr: "Donanım prototipleme, yazılım geliştirme ve Ar-Ge regülasyonları arasında akıcı geçiş.",
          de: "Nahtloser Wechsel zwischen Hardware-Prototypen, Firmware-Entwicklung und F&E-Regularien.",
          ru: "Свободное переключение между прототипированием, разработкой ПО и стандартами НИОКР.",
          sv: "Smidiga övergångar mellan hårdvaruprototyper, mjukvarukod och FoU-standarder.",
          zh: "在硬件台架搭设焊接、低层 C 固件编写与严谨标准化合规审核之间敏捷自如切换。",
          fr: "Passage fluide entre prototypage matériel, développement firmware et conformité R&D.",
          it: "Flessibilità tra prototipazione hardware, scrittura di firmware e conformità R&S."
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
          it: "Documentazione tecnica"
        },
        desc: {
          en: "Structured IEC compliance reports, user guides, schematics, and clean engineering notes.",
          tr: "IEC uyumluluk raporları, kullanıcı rehberleri, şematikler ve düzenli mühendislik notları.",
          de: "Strukturierte IEC-Prüfberichte, Benutzerhandbücher, Schaltpläne und saubere Notizen.",
          ru: "Составление отчетов соответствия IEC, руководств, схем и инженерных протоколов.",
          sv: "Strukturerade IEC-efterlevnadsrapporter, användarguider, kretsscheman och ingenjörsanteckningar.",
          zh: "具备编撰严谨 IEC 认证合规测试报告、设备操作手册、原理图与可维护工程日志的规范水准。",
          fr: "Rapports de conformité CEI structurés, schémas fonctionnels et notes d'ingénierie.",
          it: "Redazione di report di conformità IEC, manuali utente, schemi e note ingegneristiche."
        }
      }
    ]
  },

  languages: [
    {
      name: { 
        en: "English", tr: "İngilizce", de: "Englisch", ru: "Английский", 
        sv: "Engelska", zh: "英语", fr: "Anglais", it: "Inglese" 
      },
      level: "B2",
      badge: { 
        en: "Upper-Intermediate / Technical Proficiency", 
        tr: "Üst-Orta Seviye / Mesleki Yetkinlik",
        de: "Gute Mittelstufe / Technische Fachkompetenz",
        ru: "Выше среднего / Профессиональный уровень",
        sv: "Övre medelnivå / Teknisk kompetens",
        zh: "中高级 / 技术专业工作语言",
        fr: "Intermédiaire supérieur / Compétence technique",
        it: "Intermedio superiore / Competenza tecnica"
      },
      details: {
        en: "Full technical literacy in English engineering literature, documentation, and international teams.",
        tr: "İngilizce mühendislik literatürü, teknik dokümantasyon ve uluslararası ekiplerde tam mesleki yetkinlik.",
        de: "Sichere Verständigung in englischer Fachliteratur, Dokumentation und internationalen Teams.",
        ru: "Свободное чтение технической документации и взаимодействие в международных командах.",
        sv: "Fullgod förmåga i engelsk ingenjörslitteratur, dokumentation och internationella team.",
        zh: "能流畅阅读英文航空航天及嵌入式学术文献，自主编写技术白皮书并适应全英文跨国工程协作。",
        fr: "Maîtrise technique complète de la documentation en anglais et des échanges internationaux.",
        it: "Piena competenza nella letteratura ingegneristica in inglese, documentazione e team internazionali."
      }
    },
    {
      name: { 
        en: "Russian", tr: "Rusça", de: "Russisch", ru: "Русский", 
        sv: "Ryska", zh: "俄语", fr: "Russe", it: "Russo" 
      },
      level: "A1",
      badge: { 
        en: "Elementary", 
        tr: "Başlangıç Seviyesi",
        de: "Grundkenntnisse",
        ru: "Начальный уровень",
        sv: "Nybörjarnivå",
        zh: "基础入门",
        fr: "Niveau élémentaire",
        it: "Elementare"
      },
      details: {
        en: "Basic conversational and foundational language understanding.",
        tr: "Temel iletişim ve temel gramer anlama seviyesi.",
        de: "Grundlegende Kommunikations- und Lesefähigkeiten.",
        ru: "Базовые разговорные навыки и понимание основ грамматики.",
        sv: "Grundläggande konversation och språkförståelse.",
        zh: "掌握常用日常短语与基础语法架构认知。",
        fr: "Compréhension élémentaire et conversations simples.",
        it: "Competenze di conversazione di base e comprensione elementare."
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
        it: "Direttore del Dipartimento di Ingegneria Elettrica ed Elettronica"
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
        it: "Direttore Generale & Fondatore"
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
        it: "Ex Responsabile dei Sistemi Elettronici"
      },
      organization: "BMC Power",
      email: "senol.gulgonul@ostimteknik.edu.tr"
    }
  ] as ReferenceItem[]
};
