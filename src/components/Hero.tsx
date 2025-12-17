import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-body">Teknoloji Stüdyosu</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight">
            Geleceği{" "}
            <span className="text-gradient">Kodluyoruz</span>
            <br />
            <span className="text-muted-foreground">Sistemleri Otomatikleştiriyoruz</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
            Otomasyon bilgisi ile modern yazılım ve yapay zekâ araçlarını birleştiren bir teknoloji yaklaşımı. 
            Global standartlarda, ölçeklenebilir çözümler üretiyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#about">
                <Cpu className="w-5 h-5" />
                Bizi Tanıyın
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#skills">
                <Code2 className="w-5 h-5" />
                Yetkinliklerimiz
              </a>
            </Button>
          </div>

          {/* Tech icons */}
          <div className="animate-fade-up-delay-3 flex items-center gap-6 pt-8 opacity-60">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">Odak Alanları</span>
            <div className="h-px w-12 bg-border" />
            <div className="flex gap-4 text-muted-foreground">
              <span className="text-sm">Otomasyon</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Yazılım</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Yapay Zekâ</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-wider font-body">Keşfet</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
