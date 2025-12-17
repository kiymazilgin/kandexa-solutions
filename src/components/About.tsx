import { Github, Linkedin, GraduationCap, Target, Lightbulb, Mail, Globe, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import celilImg from "@/assets/celil.jpg";
import ilginImg from "@/assets/ilgin.jpeg";

const teamMembers = [
  {
    name: "Mehmet Celil Kandemir",
    role: "Otomasyon & Yazılım Mühendisi",
    education: [
      "Pamukkale Üniversitesi - Kontrol ve Otomasyon",
      "Anadolu Üniversitesi - Bilgisayar Programcılığı"
    ],
    focus: "Endüstriyel otomasyon, PLC, sensörler, üretim hatları ve yazılım entegrasyonu",
    vision: "Otomasyon ile yazılımı birleştiren, sahada çalışan gerçek sistemler üretmek",
    github: "https://github.com/Kandexa",
    linkedin: "https://www.linkedin.com/in/mehmet-celil-kandemir-82678a397/",
    email: "mckandemir20@gmail.com",
    image: celilImg,
  },
  {
    name: "Ilgın Kıymaz",
    role: "Web Geliştirici & UI/UX Tasarımcı",
    education: [
      "İstanbul Üniversitesi - Web Tasarım ve Kodlama"
    ],
    focus: "Front-end geliştirme, modern web arayüzleri, yapay zekâ araçları entegrasyonu",
    vision: "Yazılım ve yapay zekâyı birleştiren yenilikçi, global projeler üretmek",
    github: "https://github.com/kiymazilgin",
    linkedin: "https://www.linkedin.com/in/ilg%C4%B1n-k%C4%B1ymaz-207708397/",
    email: "kiymazilgin@gmail.com",
    image: ilginImg,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6 font-body">
            Ekibimiz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
            İki Farklı Disiplin,{" "}
            <span className="text-gradient">Tek Vizyon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Otomasyon mühendisliği ile modern web teknolojilerini birleştirerek 
            geleceğin çözümlerini bugünden inşa ediyoruz.
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-glow group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30"
            >
              {/* Avatar */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/20 shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium font-body">{member.role}</p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-body">Eğitim</span>
                </div>
                <ul className="space-y-1">
                  {member.education.map((edu) => (
                    <li key={edu} className="text-sm text-foreground/80 font-body">{edu}</li>
                  ))}
                </ul>
              </div>

              {/* Focus */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Target className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-body">Odak Alanı</span>
                </div>
                <p className="text-sm text-foreground/80 font-body">{member.focus}</p>
              </div>

              {/* Vision */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-body">Vizyon</span>
                </div>
                <p className="text-sm text-foreground/80 italic font-body">"{member.vision}"</p>
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-body">E-posta</span>
                </div>
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-sm text-primary hover:underline font-body"
                >
                  {member.email}
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shared vision */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-center">
                Ortak <span className="text-gradient">Vizyonumuz</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 font-heading">Yazılım Çözümleri</h4>
                  <p className="text-sm text-muted-foreground font-body">
                    Şirketlerin işini kolaylaştıran yazılım tabanlı sistemler
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 font-heading">Otomasyon</h4>
                  <p className="text-sm text-muted-foreground font-body">
                    Endüstriyel ve tarımsal alanlarda uygulanabilir çözümler
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 font-heading">Global Standart</h4>
                  <p className="text-sm text-muted-foreground font-body">
                    Güven veren, profesyonel bir marka algısı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
