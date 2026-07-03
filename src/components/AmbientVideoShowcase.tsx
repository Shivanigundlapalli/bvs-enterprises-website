import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Sofa, 
  ShieldCheck, 
  Award, 
  Layers, 
  Clock,
  Info
} from 'lucide-react';

export default function AmbientVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Source URL of a beautiful cozy luxury living room matching the precise warm cream-beige aesthetic
  const videoSourceUrl = "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-with-cozy-furniture-41804-large.mp4";

  // Double check play state on changes to ensure stability
  const handlePlayState = async (play: boolean) => {
    if (!videoRef.current) return;
    try {
      if (play) {
        // Unmute checks browser rules, keeping it muted makes autoplay work 100% of times
        videoRef.current.muted = isMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Autoplay play was prevented or paused:", error);
            });
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (e) {
      console.error("Error managing video playstate:", e);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    handlePlayState(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    handlePlayState(false);
  };

  const togglePlayPauseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent duplicate trigger from hovering container clicks
    handlePlayState(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuteState = !isMuted;
    videoRef.current.muted = nextMuteState;
    setIsMuted(nextMuteState);
  };

  // Sync scrubber progress bar with actual video timeline
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);

    // Format minutes/seconds
    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTimeFormatted(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  // Reset progress when video loops
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="bg-[#FAF8F5] py-20 border-y border-[#D8B58A]/20">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="bg-[#A86A33]/10 border border-[#A86A33]/25 text-[#A86A33] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] py-2 px-5 rounded-full w-fit mx-auto backdrop-blur-md flex items-center gap-1.5 animate-pulse">
            <Sparkles className="h-3.5 w-3.5 text-[#A86A33]" />
            <span>EXQUISITE LIVING SPACES: PHYSICAL INTERIOR DESIGN PREVIEW</span>
          </div>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#2E2A27] tracking-tight leading-tight">
            Immerse Yourself in <br className="hidden sm:block" /> Masterfully-Coordinated Warmth
          </h2>
          <p className="text-xs md:text-sm text-[#6E6A66] max-w-2xl mx-auto font-sans leading-relaxed font-medium">
            Hover your mouse or tap on the video box below to activate the live cinematic rendering. Move your cursor away to pause at any frame of our hand-finished living lounge set.
          </p>
        </div>

        {/* Dual Column Layout: Video Player + Professional Content details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Hover Video (lg:col-span-12 xl:col-span-7) */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center">
            <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`group relative rounded-3xl overflow-hidden border bg-[#2E2A27] shadow-xl transition-all duration-700 ease-out cursor-pointer ${
                isHovered 
                  ? 'border-[#A86A33] shadow-2xl scale-[1.01] ring-4 ring-[#A86A33]/15' 
                  : 'border-[#E3DDD5] hover:border-[#D8B58A]'
              }`}
            >
              
              {/* Aspect Ratio box */}
              <div className="relative aspect-video w-full bg-[#181514] overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoSourceUrl}
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-[3000ms] ease-out brightness-[0.82] group-hover:brightness-[0.98] scale-100 group-hover:scale-[1.07]"
                />

                {/* Layer 1: Cinematic top and bottom linear gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-transparent to-stone-950/90 mix-blend-multiply opacity-90 transition-all duration-[1500ms] group-hover:opacity-80 pointer-events-none z-10"></div>

                {/* Layer 2: Ambient radial vignette gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.65)_100%)] opacity-85 transition-all duration-[1500ms] group-hover:opacity-55 pointer-events-none z-10"></div>

                {/* Floating "LIVE HOVER EXPERIENCE" glowing status pill */}
                <div className="absolute top-4 left-4 z-25 flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9.5px] uppercase font-mono font-bold tracking-widest text-[#FAF8F5] bg-stone-950/60 border border-emerald-500/20 px-3 py-1 rounded-full backdrop-blur-md shadow-xs">
                    {isPlaying ? 'AMBIENCE ENGAGED' : 'HOVER TO SENSE COMFORT'}
                  </span>
                </div>

                {/* Warm watermark seal info on top-right */}
                <div className="absolute top-4 right-4 z-20 hidden sm:block">
                  <span className="text-[8px] font-mono text-stone-300/80 uppercase tracking-widest bg-stone-950/40 px-2.5 py-1 rounded-md border border-white/5">
                    © BVS Direct
                  </span>
                </div>

                {/* Centered Large Play/Pause Ring */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <button
                    onClick={togglePlayPauseClick}
                    className={`h-16 w-16 bg-[#A86A33] text-white hover:bg-[#925B28] rounded-full p-4 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer pointer-events-auto border-none ${
                      isPlaying && isHovered ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-pulse'
                    }`}
                    aria-label="Toggle Playback"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-white fill-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Beautiful custom interaction prompts fading on hover */}
                {!isHovered && !isPlaying && (
                  <div className="absolute bottom-16 inset-x-0 text-center z-20 pointer-events-none animate-bounce">
                    <span className="text-white font-sans text-xs px-4 py-2 bg-[#2E2A27]/90 rounded-full border border-[#D8B58A]/30 shadow-md inline-flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#D8B58A]" /> Hover here to play!
                    </span>
                  </div>
                )}

                {/* Bottom interactive overlay drawer */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col gap-3">
                  
                  {/* Real-time slider metrics/scrubber */}
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-[10px] text-stone-300 font-mono font-bold">{currentTimeFormatted}</span>
                    <div className="relative flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#D8B58A] transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono font-semibold">Live Loop</span>
                  </div>

                  {/* Audio Controls row */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-left">
                      <h4 className="text-xs font-serif font-black text-[#FAF8F5] uppercase tracking-wide">
                        BVS Ambiance Lounge
                      </h4>
                      <p className="text-[10px] text-stone-300 font-sans tracking-wide">
                        Warm Walnut finishes paired with Alipiri custom modular cushioning.
                      </p>
                    </div>

                    <div className="flex gap-2.5">
                      {/* Audio unmuter */}
                      <button
                        onClick={toggleMute}
                        className="bg-white/10 hover:bg-[#A86A33] text-white hover:text-white rounded-full p-2.5 transition-all cursor-pointer border border-white/10"
                        title={isMuted ? "Unmute Ambient Theme" : "Mute Sound"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>

                      {/* Manual lock play button for touch screens */}
                      <button
                        onClick={togglePlayPauseClick}
                        className="bg-white/10 hover:bg-[#A86A33] text-white rounded-full p-2.5 transition-all cursor-pointer border border-white/10 block sm:hidden"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            
            {/* Visual indicator caption */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono text-[#6E6A66] px-2">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-[#A86A33]" />
                <span>Buffering: Seasoned Burma Wood Showroom</span>
              </span>
              <span className="font-bold text-[#A86A33]">
                ★ 100% Seasoned Moisture Resistance
              </span>
            </div>
          </div>

          {/* Right Column: High-End Curated Copywriting (lg:col-span-12 xl:col-span-5) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#A86A33] bg-[#A86A33]/15 py-1.5 px-3.5 rounded-full w-fit block">
                CREATING STATELY CENTERS
              </span>
              <h3 className="font-serif font-normal text-2xl sm:text-3xl text-[#2E2A27] tracking-tight leading-tight">
                Curating the Ultimate Warm & Cozy Lounges
              </h3>
              <p className="text-xs md:text-sm text-[#6E6A66] leading-relaxed font-sans">
                Representing the crowning jewel of BVS Enterprises' bespoke residential range, our deep-cushion sectional sofa suites incorporate architectural ergonomics. Hand-paired with seasoned Burma timber coffee frames and layered with termite-proof sealants.
              </p>
              <p className="text-xs md:text-sm text-[#6E6A66] leading-relaxed font-sans">
                We believe a truly comfortable sofa is an investment that transcends simple decor. In our Tirupati workshops since 2008, we formulate the inner framework utilizing dense, seasoned neem logs, pocketed steel spring webs, and premium washable velvet/micro-suede cloths that survive hot Andhra summers flawlessly.
              </p>
            </div>

            {/* Customizer specs bullet matrix card */}
            <div className="bg-white p-5 rounded-3xl border border-[#E3DDD5] space-y-4 shadow-2xs">
              <h4 className="font-serif font-bold text-[#2E2A27] text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-[#E3DDD5]/80 pb-2.5">
                <Info className="h-4 w-4 text-[#A86A33]" />
                Technical Carpentry Blueprint
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-xs">
                  <div className="bg-[#A86A33]/15 text-[#A86A33] p-1 rounded-full shrink-0">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2E2A27] font-serif text-[11.5px]">40-HR Density Foam</strong>
                    <span className="text-[#6E6A66] text-[10.5px]">Deep contoured orthopedic posture relief.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <div className="bg-[#A86A33]/15 text-[#A86A33] p-1 rounded-full shrink-0">
                    <Sofa className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2E2A27] font-serif text-[11.5px]">Solid Neem Core</strong>
                    <span className="text-[#6E6A66] text-[10.5px]">Sturdy pesticide-baked logs inside.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <div className="bg-[#A86A33]/15 text-[#A86A33] p-1 rounded-full shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2E2A27] font-serif text-[11.5px]">Splash Protective</strong>
                    <span className="text-[#6E6A66] text-[10.5px]">Stain-resistant performance textiles.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <div className="bg-[#A86A33]/15 text-[#A86A33] p-1 rounded-full shrink-0">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2E2A27] font-serif text-[11.5px]">Direct Workshop Price</strong>
                    <span className="text-[#6E6A66] text-[10.5px]">Saved up to 35% without middle brokers.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
