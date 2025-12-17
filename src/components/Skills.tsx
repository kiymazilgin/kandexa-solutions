import { 
  Cpu, 
  Code2, 
  Globe, 
  Brain, 
  Settings, 
  Database,
  Layers,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Endüstriyel Otomasyon",
    icon: Cpu,
    description: "PLC programlama, sensör entegrasyonu ve üretim hatları otomasyonu",
    skills: ["PLC Programlama", "Sensör Sistemleri", "SCADA", "Üretim Otomasyonu", "Motor Kontrol"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Yazılım Geliştirme",
    icon: Code2,
    description: "Modern programlama dilleri ve yazılım mimarileri ile uygulama geliştirme",
    skills: ["Python", "JavaScript/TypeScript", "C/C++", "API Geliştirme", "Veritabanı Yönetimi"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Web Teknolojileri",
    icon: Globe,
    description: "Responsive, modern ve kullanıcı odaklı web arayüzleri tasarımı",
    skills: ["React", "HTML5/CSS3", "Tailwind CSS", "UI/UX Design", "Responsive Design"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Yapay Zekâ & Otomasyon",
    icon: Brain,
    description: "AI araçları entegrasyonu ve akıllı sistem geliştirme",
    skills: ["AI Entegrasyonu", "Makine Öğrenmesi", "Prompt Engineering", "Otomasyon Scriptleri", "Veri Analizi"],
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const additionalSkills = [
  { icon: Settings, label: "Sistem Entegrasyonu" },
  { icon: Database, label: "Veritabanı Yönetimi" },
  { icon: Layers, label: "Mikroservis Mimarisi" },
  { icon: Zap, label: "Performans Optimizasyonu" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gradient-to-b from-background via-card/20 to-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6 font-body">
            Yetkinlikler
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
            Teknik{" "}
            <span className="text-gradient">Uzmanlık</span>
            {" "}Alanlarımız
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Donanım ve yazılım dünyasını birleştiren multidisipliner bir yaklaşımla 
            kapsamlı çözümler sunuyoruz.
          </p>
        </div>

        {/* Main skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold font-heading mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-body">{category.description}</p>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-background/50 border border-border/50 rounded-lg text-muted-foreground font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {additionalSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 px-4 py-2 bg-card/30 border border-border/30 rounded-full text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all font-body"
            >
              <skill.icon className="w-4 h-4 text-primary" />
              {skill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
