import React, { useRef, useState } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { getAssetUrl, handleImageFallback } from '../utils/assetHelper';
import { 
  Bot, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Layers, 
  Cpu, 
  Activity, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Gauge,
  ArrowRight,
  FolderGit2,
  Waves,
  ExternalLink,
  Code2,
  Monitor
} from 'lucide-react';

interface DogduinoProjectProps {
  lang: SupportedLang;
}

export const DogduinoProject: React.FC<DogduinoProjectProps> = ({ lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'gallery'>('video');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeAquaShot, setActiveAquaShot] = useState<number>(0);
  const [aquaLightboxIndex, setAquaLightboxIndex] = useState<number | null>(null);

  const t = uiText[lang] || uiText.en;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const changeSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  const openFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % cvData.project.images.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + cvData.project.images.length) % cvData.project.images.length);
    }
  };

  const nextAquaLightbox = () => {
    if (aquaLightboxIndex !== null) {
      setAquaLightboxIndex((aquaLightboxIndex + 1) % cvData.aquaTrace.images.length);
    }
  };

  const prevAquaLightbox = () => {
    if (aquaLightboxIndex !== null) {
      setAquaLightboxIndex(
        (aquaLightboxIndex - 1 + cvData.aquaTrace.images.length) % cvData.aquaTrace.images.length
      );
    }
  };

  const projectType = cvData.project.type[lang] || cvData.project.type.en;
  const projectSummary = cvData.project.summary[lang] || cvData.project.summary.en;
  const projectPoints = cvData.project.points[lang] || cvData.project.points.en;
  const graduationLabel =
    cvData.project.graduationLabel[lang] || cvData.project.graduationLabel.en;

  const aquaType = cvData.aquaTrace.type[lang] || cvData.aquaTrace.type.en;
  const aquaCardSummary = cvData.aquaTrace.cardSummary[lang] || cvData.aquaTrace.cardSummary.en;
  const aquaPoints = cvData.aquaTrace.points[lang] || cvData.aquaTrace.points.en;
  const aquaRemote = cvData.aquaTrace.remoteLabel[lang] || cvData.aquaTrace.remoteLabel.en;
  const aquaInstitution = cvData.aquaTrace.institution[lang] || cvData.aquaTrace.institution.en;

  return (
    <section id="projects" className="scroll-mt-16 py-16 md:py-24 relative">
      {/* Background ambient accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Projects Section Header & Overview */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span>{t.projectsSection.kicker}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {t.projectsSection.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                {t.projectsSection.desc}
              </p>
            </div>
          </div>

          {/* Project Index Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="#dogduino"
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-cyan-500 dark:hover:border-cyan-400 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
                  <img
                    src={getAssetUrl(cvData.project.images[0].src)}
                    alt={cvData.project.title}
                    onError={(e) => handleImageFallback(e, 'dogduino-1_e6123476.png')}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                    {cvData.project.period} · {graduationLabel}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cvData.project.title}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {projectType}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {projectSummary}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">ESP32 · PCA9685 · BLE</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{t.projectsSection.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            <a
              href="#aquatrace"
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-cyan-500 dark:hover:border-cyan-400 transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shrink-0">
                  <img
                    src={getAssetUrl(cvData.aquaTrace.images[0].src)}
                    alt={cvData.aquaTrace.title}
                    onError={(e) => handleImageFallback(e, cvData.aquaTrace.images[0].fallbackName)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                    {cvData.aquaTrace.period}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cvData.aquaTrace.title}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {aquaType}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                {aquaCardSummary}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Python · PySide6 · NumPy · Matplotlib</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{t.projectsSection.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Dogduino Featured Project Detailed Showcase */}
        <div id="dogduino" className="scroll-mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
              <Bot className="w-4 h-4" />
              <span>{t.dogduino.badge}</span>
              <span aria-hidden="true">·</span>
              <span>{cvData.project.institution}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {cvData.project.title}: {projectType}
            </h3>
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
              <span>{cvData.project.institution}</span>
              <span aria-hidden="true">·</span>
              <span>{graduationLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{cvData.project.period}</span>
              <span aria-hidden="true">·</span>
              <span>ESP32 & PCA9685</span>
            </div>
          </div>

          {/* Media Switcher Tab Controls */}
          <div className="flex items-center p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveMediaTab('video')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeMediaTab === 'video'
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{t.dogduino.videoTab}</span>
            </button>
            <button
              onClick={() => setActiveMediaTab('gallery')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeMediaTab === 'gallery'
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.dogduino.galleryTab}</span>
            </button>
          </div>
        </div>

        {/* Media Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Media Player / Active View */}
          <div className="lg:col-span-7">
            {activeMediaTab === 'video' ? (
              <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                {/* Video Element */}
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    loop
                    muted={isMuted}
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={togglePlay}
                  >
                    <source src={getAssetUrl('assets/aistudio/dogduino-video_0fa1ed27.mp4')} type="video/mp4" />
                    <source src="./assets/aistudio/dogduino-video_0fa1ed27.mp4" type="video/mp4" />
                    <source src="./dogduino-video_0fa1ed27.mp4" type="video/mp4" />
                    <source src="dogduino-video_0fa1ed27.mp4" type="video/mp4" />
                  </video>

                  {/* Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="w-7 h-7 fill-slate-900 ml-1" />
                    </button>
                  )}
                </div>

                {/* Video Controls Bar */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                    </button>
                    <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
                      Dogduino Gait Test Loop
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Playback speed buttons */}
                    <div className="flex items-center gap-1 bg-slate-800 rounded-md p-0.5">
                      {[0.5, 1, 1.5].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => changeSpeed(speed)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium transition-colors ${
                            playbackRate === speed
                              ? 'bg-cyan-500 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={openFullscreen}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Video Footnote Caption */}
                <div className="p-3 bg-slate-900/60 border-t border-slate-800/60 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">
                    {t.dogduino.loopCaption}{' '}
                  </span>
                  {cvData.project.video.caption[lang] || cvData.project.video.caption.en}
                </div>
              </div>
            ) : (
              /* Photo Grid in Gallery Mode */
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cvData.project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[3/4] sm:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer shadow-sm hover:shadow-lg transition-all"
                  >
                    <img
                      src={getAssetUrl(img.src)}
                      alt={img.title[lang] || img.title.en}
                      onError={(e) => handleImageFallback(e, `dogduino-${idx + 1}_${idx === 0 ? 'e6123476' : idx === 1 ? 'a5659b87' : 'd55573d5'}.png`)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold line-clamp-1">{img.title[lang] || img.title.en}</span>
                        <ZoomIn className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-300 line-clamp-1">{img.description[lang] || img.description.en}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Thumbnail Strip */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              <button
                onClick={() => setActiveMediaTab('video')}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  activeMediaTab === 'video'
                    ? 'border-cyan-500 shadow-md ring-2 ring-cyan-500/30'
                    : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <div className="absolute bottom-1 left-1 text-[9px] font-mono text-white bg-black/60 px-1 rounded">
                  MP4
                </div>
              </button>

              {cvData.project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveMediaTab('gallery');
                    setLightboxIndex(idx);
                  }}
                  className="group relative aspect-video rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all opacity-85 hover:opacity-100"
                >
                  <img
                    src={getAssetUrl(img.src)}
                    alt={img.title[lang] || img.title.en}
                    onError={(e) => handleImageFallback(e, `dogduino-${idx + 1}_${idx === 0 ? 'e6123476' : idx === 1 ? 'a5659b87' : 'd55573d5'}.png`)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 text-[9px] font-mono text-white bg-black/70 px-1 rounded">
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details & CV Bullets */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.dogduino.scopeHeading}</span>
              </h3>
              
              <ul className="space-y-3">
                {projectPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[11px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Technical Highlights Callout */}
            <div className="p-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/70 dark:border-cyan-900/50 space-y-2">
              <div className="text-xs font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>{t.dogduino.challengesHeading}</span>
              </div>
              <p className="text-xs text-cyan-950/80 dark:text-cyan-200/80 leading-relaxed">
                {t.dogduino.challengesText}
              </p>
            </div>

          </div>

        </div>

        {/* Technical Specification Bento Matrix */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.dogduino.specsHeading}</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Dogduino Rev. 1.0</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cvData.project.specs.map((spec, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1"
              >
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {spec.label[lang] || spec.label.en}
                </div>
                <div className="text-xs sm:text-sm font-semibold font-mono text-slate-900 dark:text-white">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* AquaTrace Featured Project Detailed Showcase */}
        <div id="aquatrace" className="scroll-mt-20 mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                <Waves className="w-4 h-4 shrink-0" />
                <span>{t.aquaTrace.badge}</span>
                <span aria-hidden="true">·</span>
                <span>{aquaInstitution}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {cvData.aquaTrace.title}: {aquaType}
              </h3>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                <span>{cvData.aquaTrace.location}</span>
                <span aria-hidden="true">·</span>
                <span>{aquaRemote}</span>
                <span aria-hidden="true">·</span>
                <span>{cvData.aquaTrace.period}</span>
                <span aria-hidden="true">·</span>
                <span>{cvData.aquaTrace.techLine}</span>
              </div>
            </div>

            {/* Source Code GitHub Button */}
            <a
              href={cvData.aquaTrace.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 self-start md:self-auto shrink-0"
            >
              <Code2 className="w-4 h-4 text-cyan-400 dark:text-slate-950" />
              <span>{t.aquaTrace.sourceCodeButton}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Media Showcase & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left: Interactive Desktop UI Screenshot Showcase */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <div
                  onClick={() => setAquaLightboxIndex(activeAquaShot)}
                  className="relative aspect-video bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <img
                    src={getAssetUrl(cvData.aquaTrace.images[activeAquaShot].src)}
                    alt={
                      cvData.aquaTrace.images[activeAquaShot].title[lang] ||
                      cvData.aquaTrace.images[activeAquaShot].title.en
                    }
                    onError={(e) =>
                      handleImageFallback(e, cvData.aquaTrace.images[activeAquaShot].fallbackName)
                    }
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAquaLightboxIndex(activeAquaShot);
                    }}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-cyan-500 text-white hover:text-slate-950 text-[11px] font-semibold border border-slate-700/80 shadow-lg transition-all"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{t.aquaTrace.clickToEnlarge}</span>
                  </button>
                </div>

                {/* Active Screenshot Caption Bar */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Monitor className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>
                        {cvData.aquaTrace.images[activeAquaShot].title[lang] ||
                          cvData.aquaTrace.images[activeAquaShot].title.en}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      0{activeAquaShot + 1} / 0{cvData.aquaTrace.images.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cvData.aquaTrace.images[activeAquaShot].description[lang] ||
                      cvData.aquaTrace.images[activeAquaShot].description.en}
                  </p>
                </div>
              </div>

              {/* 6-Screenshot Thumbnail Strip */}
              <div className="mt-4">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2">
                  {t.aquaTrace.galleryLabel}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {cvData.aquaTrace.images.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActiveAquaShot(idx)}
                      onDoubleClick={() => setAquaLightboxIndex(idx)}
                      className={`group relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                        activeAquaShot === idx
                          ? 'border-cyan-500 shadow-md ring-2 ring-cyan-500/30 opacity-100'
                          : 'border-slate-200 dark:border-slate-800 opacity-75 hover:opacity-100 hover:border-cyan-400'
                      }`}
                      title={img.title[lang] || img.title.en}
                    >
                      <img
                        src={getAssetUrl(img.src)}
                        alt={img.title[lang] || img.title.en}
                        onError={(e) => handleImageFallback(e, img.fallbackName)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 text-[9px] font-mono text-white bg-black/75 px-1 rounded">
                        0{idx + 1}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Project Scope & Features + Engineering Focus Highlights */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Waves className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.aquaTrace.scopeHeading}</span>
                </h4>

                <ul className="space-y-3">
                  {aquaPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[11px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Focus Highlights Callout */}
              <div className="p-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/70 dark:border-cyan-900/50 space-y-2">
                <div className="text-xs font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{t.aquaTrace.challengesHeading}</span>
                </div>
                <p className="text-xs text-cyan-950/80 dark:text-cyan-200/80 leading-relaxed">
                  {t.aquaTrace.challengesText}
                </p>
              </div>
            </div>
          </div>

          {/* Software & System Specifications Bento Matrix */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.aquaTrace.specsHeading}</span>
              </h4>
              <a
                href={cvData.aquaTrace.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>github.com/regexlord/AquaTrace</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cvData.aquaTrace.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1"
                >
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {spec.label[lang] || spec.label.en}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-slate-900 dark:text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Dogduino Photos */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800 text-white">
              <div>
                <h4 className="text-sm font-bold">
                  {cvData.project.images[lightboxIndex].title[lang] || cvData.project.images[lightboxIndex].title.en}
                </h4>
                <div className="text-xs text-slate-400 font-mono">
                  {lightboxIndex + 1} {t.dogduino.lightboxOf} {cvData.project.images.length} · Dogduino Showcase
                </div>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Viewport */}
            <div className="relative aspect-auto max-h-[65vh] flex items-center justify-center p-4 bg-black">
              <img
                src={getAssetUrl(cvData.project.images[lightboxIndex].src)}
                alt={cvData.project.images[lightboxIndex].title[lang] || cvData.project.images[lightboxIndex].title.en}
                onError={(e) => handleImageFallback(e, `dogduino-${lightboxIndex + 1}_${lightboxIndex === 0 ? 'e6123476' : lightboxIndex === 1 ? 'a5659b87' : 'd55573d5'}.png`)}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] w-auto object-contain rounded-lg shadow-lg"
              />

              <button
                onClick={prevLightbox}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all shadow-md"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Description Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
              {cvData.project.images[lightboxIndex].description[lang] || cvData.project.images[lightboxIndex].description.en}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for AquaTrace Screenshots */}
      {aquaLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setAquaLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800 text-white">
              <div>
                <h4 className="text-sm font-bold">
                  {cvData.aquaTrace.images[aquaLightboxIndex].title[lang] ||
                    cvData.aquaTrace.images[aquaLightboxIndex].title.en}
                </h4>
                <div className="text-xs text-slate-400 font-mono">
                  {aquaLightboxIndex + 1} {t.aquaTrace.lightboxOf} {cvData.aquaTrace.images.length} · AquaTrace
                </div>
              </div>
              <button
                onClick={() => setAquaLightboxIndex(null)}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Viewport */}
            <div className="relative aspect-auto max-h-[70vh] flex items-center justify-center p-4 bg-black">
              <img
                src={getAssetUrl(cvData.aquaTrace.images[aquaLightboxIndex].src)}
                alt={
                  cvData.aquaTrace.images[aquaLightboxIndex].title[lang] ||
                  cvData.aquaTrace.images[aquaLightboxIndex].title.en
                }
                onError={(e) =>
                  handleImageFallback(e, cvData.aquaTrace.images[aquaLightboxIndex].fallbackName)
                }
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
              />

              <button
                onClick={prevAquaLightbox}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextAquaLightbox}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all shadow-md"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Description Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
              {cvData.aquaTrace.images[aquaLightboxIndex].description[lang] ||
                cvData.aquaTrace.images[aquaLightboxIndex].description.en}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
