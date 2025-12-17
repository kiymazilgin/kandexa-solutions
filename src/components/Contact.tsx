import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import celilImg from "@/assets/celil.jpg";
import ilginImg from "@/assets/ilgin.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6 font-body">
              İletişim
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
              Projenizi{" "}
              <span className="text-gradient">Hayata Geçirelim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
              Otomasyon, yazılım veya web projeleriniz için bizimle iletişime geçin. 
              Fikirlerinizi gerçeğe dönüştürmek için buradayız.
            </p>
          </div>

          {/* Team contact cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Celil */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src={celilImg} 
                    alt="Mehmet Celil Kandemir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-heading">Mehmet Celil Kandemir</h3>
                  <p className="text-sm text-muted-foreground font-body">Otomasyon & Yazılım</p>
                </div>
              </div>
              
              {/* Email */}
              <a 
                href="mailto:mckandemir20@gmail.com" 
                className="flex items-center gap-2 mb-4 text-sm text-primary hover:underline font-body"
              >
                <Mail className="w-4 h-4" />
                mckandemir20@gmail.com
              </a>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://github.com/Kandexa" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://www.linkedin.com/in/mehmet-celil-kandemir-82678a397/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Ilgın */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src={ilginImg} 
                    alt="Ilgın Kıymaz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-heading">Ilgın Kıymaz</h3>
                  <p className="text-sm text-muted-foreground font-body">Web & UI/UX</p>
                </div>
              </div>
              
              {/* Email */}
              <a 
                href="mailto:kiymazilgin@gmail.com" 
                className="flex items-center gap-2 mb-4 text-sm text-primary hover:underline font-body"
              >
                <Mail className="w-4 h-4" />
                kiymazilgin@gmail.com
              </a>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://github.com/kiymazilgin" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://www.linkedin.com/in/ilg%C4%B1n-k%C4%B1ymaz-207708397/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
