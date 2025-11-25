import React, { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Rocket, LayoutGrid, Settings, ExternalLink, ShieldCheck, Menu, X, CheckCircle, AlertCircle } from "lucide-react";

export default function WebsiteLiveStarter() {
  const [logoUrl] = useState("/logo.png");
  const [playNowColor, setPlayNowColor] = useState("#dc2626"); // Default red
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple hash router so each section is its own 'page'
  const [route, setRoute] = useState("home");
  useEffect(() => {
    const sync = () => {
      const newRoute = window.location.hash.replace('#','') || 'home';
      console.log('Route changing to:', newRoute);
      setRoute(newRoute);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  // Controls
  const [tagline, setTagline] = useState("BE A BIG WINNER WITH OUR HOT JACKPOT");
  const [heroDesc, setHeroDesc] = useState("Experience unmatched quality in gameplay and customer service.");
  const [dark, setDark] = useState(true);
  const [featureCount, setFeatureCount] = useState(3);
  const [accentHue, setAccentHue] = useState(226);
  const [footerNote, setFooterNote] = useState("© " + new Date().getFullYear() + " All rights reserved.");

  const accent = useMemo(() => `hsl(${accentHue} 84% 56%)`, [accentHue]);

  // ================= PAGES =================
  const HomePage = () => (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-10 py-16 md:py-24">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Gradient overlays */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30 z-20" style={{ background: accent }} />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-20 z-20" style={{ background: accent }} />
        
        <div className="relative max-w-4xl z-30">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">{tagline}</h1>
          <p className="mt-4 text-neutral-300 text-base md:text-lg">{heroDesc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>
              <Sparkles className="h-4 w-4 mr-2" /> Play Now
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => window.open('https://dl.juwa777.com/', '_blank')}>Download Juwa Now</Button>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 bg-neutral-950">
        <div className="hidden md:grid grid-cols-3">
          {/* Welcome Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-red-500 to-red-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#dc2626")} // red-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">1st Deposit Offer</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}} dangerouslySetInnerHTML={{ __html: '100% Welcome<br/>Bonus' }}></div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>Join Now</Button>
            </div>
          </div>

          {/* Reload Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-orange-500 to-orange-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#ea580c")} // orange-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">2nd Deposit Offer</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}}>50% Reload Bonus</div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>Join Now</Button>
            </div>
          </div>

          {/* Referral Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#2563eb")} // blue-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">Play together and enjoy</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}}>$5 Referral Bonus</div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>Join Now</Button>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden">
          {(() => {
            const banners = [
              {
                bg: "from-red-500 to-red-900",
                subtitle: "1st Deposit Offer",
                title: "100% Welcome<br/>Bonus",
                desc: ""
              },
              {
                bg: "from-orange-500 to-orange-900", 
                subtitle: "2nd Deposit Offer",
                title: "50% Reload Bonus",
                desc: ""
              },
              {
                bg: "from-blue-500 to-blue-900",
                subtitle: "Play together and enjoy", 
                title: "$5 Referral Bonus",
                desc: ""
              }
            ];
            
            const [currentIndex, setCurrentIndex] = React.useState(0);
            const [startX, setStartX] = React.useState(0);
            const [isDragging, setIsDragging] = React.useState(false);
            
            const handleTouchStart = (e) => {
              setStartX(e.touches[0].clientX);
              setIsDragging(true);
            };
            
            const handleTouchEnd = (e) => {
              if (!isDragging) return;
              setIsDragging(false);
              
              const endX = e.changedTouches[0].clientX;
              const diff = startX - endX;
              
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  // Swipe left - next banner
                  setCurrentIndex((prev) => (prev + 1) % banners.length);
                } else {
                  // Swipe right - previous banner
                  setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
                }
              }
            };
            
            return (
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {banners.map((banner, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className={`relative h-64 overflow-hidden bg-gradient-to-b ${banner.bg} flex flex-col items-center justify-center text-center text-white`}>
                        <div className="text-base opacity-90">{banner.subtitle}</div>
                        <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}} dangerouslySetInnerHTML={{ __html: banner.title }}></div>
                        {banner.desc && <div className="mt-3 text-sm opacity-90">{banner.desc}</div>}
                        <div className="mt-6">
                          <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>Join Now</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="px-6 md:px-10 py-10 bg-neutral-950">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-6">Our Official Facebook Partners</h2>
        {(() => {
          const slides = [
            { img: "/partner1.png", blocks: [
              { title: "Dig your daily bonus", desc: "Collect your daily bonus and start spinning!", cta: "JOIN THE FUN" }
            ]},
            { img: "/partner2.png", blocks: [
              { title: "First-time player?", desc: "Dive in and claim your juicy welcome offer!", cta: "JOIN NOW" }
            ]},
            { img: "/partner3.png", blocks: [
              { title: "Big wins spotlight", desc: "Follow for highlights, tips and massive wins.", cta: "FOLLOW NOW" }
            ]},
          ];
          const [i, setI] = React.useState(0);
          const go = (d) => setI((prev) => (prev + d + slides.length) % slides.length);
          const startX = React.useRef(0);
          const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
          const onTouchEnd = (e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          };
          const current = slides[i];
          return (
            <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <button aria-label="Previous" onClick={() => go(-1)} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center z-10">‹</button>
              <button aria-label="Next" onClick={() => go(1)} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center z-10">›</button>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-neutral-900 grid md:grid-cols-2">
                <div className="flex items-center justify-center bg-black/20">
                  <img src={current.img} alt="" className="h-full w-full object-cover max-h-[450px] p-2" onError={(e)=>{e.currentTarget.src='/placeholder.jpg';}} />
                </div>
                <div className={`p-6 md:p-10 text-white flex flex-col justify-center items-start gap-5 min-h-[280px] relative ${
                  i === 0 ? 'bg-gradient-to-br from-green-400 to-green-800' : 
                  i === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-800' : 
                  'bg-gradient-to-br from-amber-700 to-amber-900'
                }`}>
                  {/* Decorative images in bottom right */}
                  <div className={`absolute bottom-4 ${
                    i === 0 ? 'right-4 w-32 h-32 md:w-40 md:h-40' : 
                    i === 1 ? 'right-4 w-40 h-40 md:w-48 md:h-48' : 
                    '-right-2 w-48 h-48 md:w-56 md:h-56'
                  }`}>
                    <img 
                      src={i === 0 ? "/coins.png" : i === 1 ? "/cup.png" : "/joker.png"} 
                      alt="" 
                      className="w-full h-full object-contain opacity-80" 
                      onError={(e)=>{e.currentTarget.style.display='none'}} 
                    />
                  </div>
                  {current.blocks.map((b, idx) => (
                    <div key={idx} className={`${idx > 0 ? 'mt-8' : ''} relative z-10`}>
                      <div className="font-extrabold tracking-tight text-white text-5xl md:text-6xl lg:text-7xl" style={{lineHeight:1.1}}>{b.title}</div>
                      <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-md">{b.desc}</p>
                      <div className="mt-6">
                        <Button 
                          variant="secondary" 
                          className="bg-white text-neutral-900 hover:opacity-90 text-sm md:text-base px-4 py-2"
                          onClick={() => {
                            if (b.cta === "JOIN THE FUN") {
                              window.open('https://www.facebook.com/juwabros', '_blank');
                            } else if (b.cta === "JOIN NOW") {
                              window.open('https://www.facebook.com/juwaloot', '_blank');
                            } else if (b.cta === "FOLLOW NOW") {
                              window.open('https://www.facebook.com/JuwaJackpots/', '_blank');
                            }
                          }}
                        >
                          {b.cta}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} className={`h-2.5 w-2.5 rounded-full ${idx===i ? 'bg-white' : 'bg-white/40'}`} />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Our Games Section */}
      <section className="px-6 md:px-10 py-12 bg-neutral-950">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8">Our Games</h2>
        <div className="max-w-7xl mx-auto relative">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-4">
            {[
              "7 Burning HOT.png",
              "777 Jackpot Inferno.png", 
              "Big Bass Bonzana.png",
              "Buffalo Keno.png",
              "Cash Cow.png",
              "Deep Sea Predator.png",
              "Diamond Riches.png",
              "Epic Summer.png"
            ].map((game, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-neutral-800/50 hover:bg-neutral-700/70 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-square p-2">
                  <img 
                    src={`/Games/${game}`} 
                    alt={game.replace('.png', '')}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white text-xs font-medium truncate">{game.replace('.png', '')}</p>
                </div>
              </div>
            ))}
          </div>
          
          
          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Fortune Lion.png",
              "Happy Fishing.png",
              "Huge Cash.png",
              "King Kong's Rampage.png",
              "Mega Money Machine.png",
              "Perfect Purple Jackpots.png",
              "Rainbow Riches.png",
              "Wild Royale Gold.png"
            ].map((game, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-neutral-800/50 hover:bg-neutral-700/70 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-square p-2">
                  <img 
                    src={`/Games/${game}`} 
                    alt={game.replace('.png', '')}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white text-xs font-medium truncate">{game.replace('.png', '')}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Games Button */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => setRoute('games')}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 text-lg transition-all duration-300"
            >
              View All Games
            </Button>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section id="categories" className="px-6 md:px-10 py-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Free social slots and casino-style games</h2>
            <p className="text-neutral-300 text-base md:text-lg">With over 200 social casino games to choose from, there is always something new to play.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-pink-500 to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/slots.png" alt="Slots" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">SLOTS</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/instantwin.png" alt="Instant Win" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">INSTANT WIN</div>
          </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/keno.png" alt="Keno" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">KENO</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-emerald-600 to-lime-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/fish.png" alt="Fish Games" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">FISH GAMES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety (circle illustrations) */}
      <section id="safety" className="px-6 md:px-10 py-14 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Safe. Fast. Fair.</h2>
            <p className="text-neutral-300 text-lg md:text-xl">Play with Confidence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.35)] overflow-hidden">
                <img src="/secure.png" alt="Secure Play" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">SECURE PLAY</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Bank‑grade encryption and account protection keep your play safe.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.35)] overflow-hidden">
                <img src="/payouts.png" alt="Fast Payouts" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">FAST PAYOUTS</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Lightning‑quick redemptions with trusted, transparent processing.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-[0_10px_30px_rgba(99,102,241,0.35)] overflow-hidden">
                <img src="/rng.png" alt="Fair RNG" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">FAIR RNG</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Independently tested randomness for fair outcomes every spin.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const GamesPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    
    const filters = ['All', 'Slots', 'Fish', 'Keno', 'Hot', 'New'];
    
    // Game images from public/games/ folder
    const allGames = [
      '45 President.png',
      '7 Burning HOT.png',
      '7 Crystal Clovers.png',
      '777 Jackpot Inferno.png',
      '777 Lucky.png',
      'Big Bass Bonzana.png',
      'Black & White Double.png',
      'Bonus Hot 7\'s.png',
      'Buffalo Keno.png',
      'Cash Cow.png',
      'Cash Zone.png',
      'Cherry Valentine.png',
      'Deep Sea Predator.png',
      'Deep Sea.png',
      'Diamond Riches.png',
      'Dragon Treasure.png',
      'Epic Summer.png',
      'Epic Vault.png',
      'Farm Life.png',
      'Fortune Lion.png',
      'Fruit Mary.png',
      'Glitz.png',
      'Happy Fishing.png',
      'Hex Gems.png',
      'Hexa Keno.png',
      'Huge Cash.png',
      'King Kong\'s Rampage.png',
      'Life of Luxury.png',
      'Loteria Don.png',
      'Mega Money Machine.png',
      'Megaball Deluxe.png',
      'Megs 10x Pay.png',
      'Moolah Bingo.png',
      'Oh my Girls.png',
      'Perfect Purple Jackpots.png',
      'Rainbow Riches.png',
      'Simple Triple.png',
      'Spin Golden Wheel.png',
      'Super Stars.png',
      'Superball Keno.png',
      'Wild Royale Gold.png',
      'Wild West.png'
    ];

    // Filter games based on selected category
    const getFilteredGames = () => {
      switch (selectedFilter) {
        case 'Keno':
          return allGames.filter(game => 
            game.includes('Buffalo Keno') || 
            game.includes('Hexa Keno') || 
            game.includes('Superball Keno')
          );
        case 'Hot':
          return allGames.filter(game => 
            game.includes('Wild West') || 
            game.includes('Oh my Girls') || 
            game.includes('King Kong\'s Rampage') || 
            game.includes('Cash Cow') || 
            game.includes('Buffalo Keno') || 
            game.includes('Moolah Bingo')
          );
        case 'Fish':
          return allGames.filter(game => 
            game.includes('Cash Cow') || 
            game.includes('Big Bass Bonzana') || 
            game.includes('Deep Sea') || 
            game.includes('Deep Sea Predator') || 
            game.includes('Dragon Treasure') || 
            game.includes('Happy Fishing')
          );
        case 'New':
          return allGames.filter(game => 
            game.includes('Simple Triple') || 
            game.includes('Loteria Don') || 
            game.includes('Spin Golden Wheel') || 
            game.includes('Megaball Deluxe')
          );
        case 'Slots':
          // All games except Fish and Keno games
          const fishGames = ['Cash Cow', 'Big Bass Bonzana', 'Deep Sea', 'Deep Sea Predator', 'Dragon Treasure', 'Happy Fishing'];
          const kenoGames = ['Buffalo Keno', 'Hexa Keno', 'Superball Keno'];
          return allGames.filter(game => 
            !fishGames.some(fish => game.includes(fish)) && 
            !kenoGames.some(keno => game.includes(keno))
          );
        default:
          return allGames;
      }
    };

    const gameImages = getFilteredGames();
    
    return (
    <section className="px-6 md:px-10 py-12">
        <div className="w-full">
          {/* Filter Buttons */}
          <div className="flex gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'font-bold text-red-600'
                    : 'text-neutral-600 dark:text-neutral-300 hover:underline'
                }`}
              >
                {filter}
              </button>
        ))}
      </div>
          
          {/* Games Grid */}
          {gameImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {gameImages.map((image, index) => {
                const gameName = image.replace('.png', '');
                const rtp = Math.floor(Math.random() * 7) + 91; // Random RTP between 91-97%
                
                return (
                  <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
                    {/* Game Image */}
                    <div className="aspect-square relative">
                      <img
                        src={`/Games/${image}`}
                        alt={gameName}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.log('Failed to load image:', `/Games/${image}`);
                          e.target.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log('Successfully loaded image:', `/Games/${image}`);
                        }}
                      />
                    </div>
                    
                    {/* Game Info */}
                    <div className="px-2 py-1 flex items-center justify-between">
                      <div className="text-white text-sm font-medium truncate flex-1">
                        {gameName}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-500 ml-2 flex-shrink-0">
                        RTP {rtp}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  };

  const AboutPage = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Safe, Fair & Rewarding</h2>
        </div>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-center">Juwa777 is a mobile gaming platform offering over 100 exciting games—including slots, fish shooting, and keno—designed to bring players nonstop entertainment and rewards. We offer fun, skill-based games with sweepstakes entries—play for entertainment and a chance to win prizes. With features like Spin Wheel bonuses, cashback, and hourly lucky draws, Juwa777 delivers a fun and rewarding experience every time you play. Our mission is to provide safe, accessible, and engaging gameplay with unmatched customer service, backed by fast performance, fair RNG, and secure payments.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-green-500 to-green-700 border-green-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Safe</div>
                <p className="text-sm text-white/90 mt-3">Register through our official Facebook account, install the app, fund your account, and start winning.</p>
              </div>
              <img src="/how it works.png" alt="Safe" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Fair</div>
                <p className="text-sm text-white/90 mt-3">Designed to comply with sweepstakes laws; no purchase necessary offers available.</p>
              </div>
              <img src="/fair.png" alt="Fair" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-700 border-orange-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Rewarding</div>
                <p className="text-sm text-white/90 mt-3">Fast verification and multiple withdrawal options for eligible prize wins.</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/pouts.png" alt="Payouts" className="w-36 h-36 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Community Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">Join the Juwa community!</h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg">Be part of a friendly community, discover exclusive offers, and enjoy competitions with fellow players.</p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
              <div className="text-white/80 text-sm mb-2">OVER</div>
              <div className="text-white text-5xl md:text-6xl font-bold">1,000,000</div>
              <div className="text-white/90 text-lg">Fans on Facebook</div>
            </div>
            
            <div>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors" onClick={() => window.open('https://www.facebook.com/JuwaJackpots/', '_blank')}>
                JOIN OUR COMMUNITY
              </button>
            </div>
            
            <div className="flex gap-6">
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </div>
      </div>
          
          <div className="flex justify-center">
            <img src="/community.png" alt="Juwa Community" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );

  const BlogPage = () => (
    <section className="px-6 md:px-10 py-12">
      <div className="max-w-6xl">
        <div className="text-center mb-8">
          <div className="bg-neutral-900 dark:bg-black rounded-2xl p-8 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-300 dark:text-neutral-400 italic tracking-wider">
              COMING SOON
            </h1>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">Latest from the Blog</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {['Choosing high-volatility slots','Beginner\'s guide to fish games','How sweepstakes casinos work'].map((title, i)=> (
            <Card key={i} className="overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="h-36 bg-gradient-to-br from-neutral-800 to-neutral-700" />
              <CardContent className="p-5">
                <div className="text-xs text-neutral-500">Casino Tips</div>
                <CardTitle className="mt-1 text-lg">{title}</CardTitle>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Quick tips and strategies to improve your experience and understand the odds.</p>
                <div className="mt-4 text-sm text-blue-500">Read more →</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactPage = () => {
    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validation
      if (!name || name.trim().length < 2) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }

      if (!userEmail || !userEmail.includes("@")) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }
      
      if (!message || message.trim().length < 10) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Call the serverless function API endpoint
        // This will use Namecheap SMTP to send the email
        const response = await fetch('https://v0-email-sending-function.vercel.app/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            userEmail: userEmail,
            phoneNumber: phoneNumber,
            message: message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send email');
        }
        
        setSubmitStatus("success");
        setName("");
        setUserEmail("");
        setPhoneNumber("");
        setMessage("");
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        console.error("Email sending failed:", error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Contact & Support</h2>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6 space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Name *</label>
                    <Input 
                      type="text"
                      placeholder="Your full name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Email *</label>
                    <Input 
                      type="email"
                      placeholder="you@example.com" 
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Phone Number</label>
                    <Input 
                      type="tel"
                      placeholder="(555) 123-4567" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Message *</label>
                    <Textarea 
                      rows={4} 
                      placeholder="How can we help?" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <p className="text-sm text-green-700 dark:text-green-300">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-sm text-red-700 dark:text-red-300">
                        {!name || name.trim().length < 2
                          ? "Please enter your name (at least 2 characters)."
                          : !userEmail || !userEmail.includes("@") 
                          ? "Please enter a valid email address."
                          : !message || message.trim().length < 10
                          ? "Please enter a message (at least 10 characters)."
                          : "Failed to send message. Please try again or email us directly."}
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white border-red-600 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60"><CardContent className="p-5"><div className="font-semibold">Live chat</div><p className="text-sm text-neutral-600 dark:text-neutral-300">Chat with an agent 24/7.</p></CardContent></Card>
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60"><CardContent className="p-5"><div className="font-semibold">Email support</div><p className="text-sm text-neutral-600 dark:text-neutral-300">support@juwagame.com</p></CardContent></Card>
              <a href="#faq" className="block group">
                <Card className="border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-red-500 dark:hover:border-red-500 active:bg-red-50 dark:active:bg-red-900/20 active:border-red-500 transition-all duration-200 hover:shadow-md active:shadow-lg">
                  <CardContent className="p-5">
                    <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 group-active:text-red-600 transition-colors duration-200">FAQ</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Payouts, verification, and responsible play.</p>
                    <div className="mt-2 text-xs text-red-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">Tap to view FAQ →</div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FAQPage = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
      setOpenItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    const faqData = [
      {
        question: "What is Juwa777?",
        answer: "Juwa777 is a mobile casino-style gaming application for Android (with guidance for iOS), offering a wide range of interactive games that combine chance, skill, and excitement."
      },
      {
        question: "How many games are available in Juwa777?",
        answer: "Juwa777 offers over 100 games to choose from, including: 🎰 Slot games with multiple themes and paylines, 🐟 Fish shooting games, 🎲 Keno games and other varieties. This diversity ensures there's something for every type of player."
      },
      {
        question: "Is Juwa777 free to use?",
        answer: "Yes, the app is free to download and play. Some content or features may require in-app purchases or virtual credits."
      },
      {
        question: "Is it safe to install Juwa777?",
        answer: "The APK provided on the official site is checked, but downloading apps outside of Google Play or App Store always carries some risk. Users are advised to: Keep antivirus software active, Review app permissions before installing."
      },
      {
        question: "How do I download and install the app on Android?",
        answer: "1. Visit the official website and download the latest APK file. 2. Enable 'Install Unknown Apps' in your Android settings. 3. Locate and open the APK file to install. 4. Follow on-screen prompts."
      },
      {
        question: "What about iOS users?",
        answer: "iOS users can refer to the iOS installation guide available on the official Juwa777 site for step-by-step instructions."
      },
      {
        question: "Can I play Juwa777 games outside the app?",
        answer: "Currently, Juwa777 is primarily available through the mobile app. Future updates may expand play options."
      },
      {
        question: "What rewards and bonuses does Juwa777 offer?",
        answer: "Players can enjoy multiple reward features, including: 🎡 Spin Wheel bonuses, 💵 Cashback rewards, ⏰ Hourly Lucky Draws every few hours. These add excitement and extra chances to win beyond regular gameplay."
      },
      {
        question: "How do I get support if I have an issue?",
        answer: "You can reach out through the Contact Us section on the official website for help with downloads, account issues, or game questions."
      },
      {
        question: "Are there risks involved in playing Juwa777?",
        answer: "Yes. As with any game of chance, there are both potential wins and losses. Play responsibly, understand the odds of each game, and make sure gaming is permitted under your local laws."
      }
    ];

  return (
      <section className="px-6 md:px-10 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <a href="#contact" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">Contact</a>
            <span className="mx-2">&gt;</span>
            <span className="text-neutral-600 dark:text-neutral-300">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Frequently Asked Questions</h2>
              </div>
              <div>
            {faqData.map((item, index) => (
              <div key={index} className={`py-4 ${index < faqData.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}`}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {index + 1}. {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <span className={`text-lg font-normal transition-colors duration-200 ${
                      openItems[index] ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300'
                    }`}>
                      {openItems[index] ? '−' : '+'}
                    </span>
              </div>
                </button>
                {openItems[index] && (
                  <div className="pt-3">
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.answer}
                    </p>
              </div>
                )}
              </div>
            ))}
              </div>
              </div>
      </section>
    );
  };

  return (
    <div className={"min-h-screen w-full " + (dark ? "dark" : "")}> 
      <div className="bg-gray-50 dark:bg-neutral-950 transition-colors">
        <main className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900">
            <nav className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
                <a href="#home" className={route==='home' ? 'font-bold text-red-600' : 'hover:underline'}>Home</a>
                <a href="#games" className={route==='games' ? 'font-bold text-red-600' : 'hover:underline'}>Games</a>
                <a href="#about" className={route==='about' ? 'font-bold text-red-600' : 'hover:underline'}>About</a>
                <a href="#blog" className={route==='blog' ? 'font-bold text-red-600' : 'hover:underline'}>Blog</a>
                <a href="#contact" className={route==='contact' ? 'font-bold text-red-600' : 'hover:underline'}>Contact</a>
              </div>
              
              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Button variant="outline" className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50" onClick={() => window.location.hash = '#faq'}>
                  FAQ
                </Button>
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Play now
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-3">
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90 px-4 py-2" onClick={() => window.open('https://www.facebook.com/juwabros', '_blank')}>
                <Sparkles className="h-4 w-4 mr-2" />
                Play now
              </Button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </nav>
            
            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="px-5 py-4 space-y-3">
                  <a href="#home" className={`block py-2 text-sm ${route==='home' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
                  <a href="#games" className={`block py-2 text-sm ${route==='games' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Games</a>
                  <a href="#about" className={`block py-2 text-sm ${route==='about' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>About</a>
                  <a href="#blog" className={`block py-2 text-sm ${route==='blog' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Blog</a>
                  <a href="#contact" className={`block py-2 text-sm ${route==='contact' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
                  <a href="#faq" className={`block py-2 text-sm ${route==='faq' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                </div>
              </div>
            )}

            {route === 'home' && <HomePage />}
            {route === 'games' && <GamesPage />}
            {route === 'about' && <AboutPage />}
            {route === 'blog' && <BlogPage />}
            {route === 'contact' && <ContactPage />}
            {route === 'faq' && <FAQPage />}

            <section className="px-6 md:px-10 pt-6 pb-6">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative z-10 flex items-center justify-between gap-4 p-6 md:p-8 bg-gradient-to-r from-red-800 to-red-600 text-white">
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10"><ShieldCheck className="h-7 w-7" /></span>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold tracking-wide">MADE TO PLAY SAFELY</div>
                      <div className="text-white/90 italic">Playing responsibly within limits.</div>
                    </div>
                  </div>
                  <img src={logoUrl} alt="Logo" className="h-10 md:h-12 w-auto" />
                </div>
              </div>
            </section>

            <footer className="px-6 md:px-10 pb-8">
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 flex flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src={logoUrl} alt="Logo" className="h-7 w-auto" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">© 2025 All rights reserved.</span>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">
                  Copyright 2023, the Juwa777. All rights reserved. Gambling should be entertaining. Remember that you always risk losing the money you bet, so do not spend more than you can afford to lose. If you think you may have a problem, click here.
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>

      <style>{` :root { --accent: hsl(${accentHue} 84% 56%); } `}</style>
    </div>
  );
}
