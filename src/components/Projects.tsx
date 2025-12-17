import { Github, ExternalLink, Star, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Kandexa.Agrisense",
    description: "AI-Ready Smart Agriculture Platform — Node.js API + MongoDB Atlas + Real-time Dashboard. Sensör verilerini toplayan, depolayan ve görselleştiren IoT destekli akıllı tarım sistemi.",
    tech: ["Node.js", "MongoDB", "IoT", "Dashboard"],
    github: "https://github.com/Kandexa/Kandexa.Agrisense",
    stars: 0,
    featured: true,
  },
  {
    name: "AI Log Analyzer",
    description: "Sunucu log dosyalarını analiz etmek için geliştirilmiş full-stack uygulama. Log dosyasını yükleyip satır satır işler, seviyelere göre filtreler.",
    tech: ["HTML", "JavaScript", "AI", "Full-Stack"],
    github: "https://github.com/Kandexa/ai-log-analyzer",
    stars: 1,
    featured: true,
  },
  {
    name: "Kandexa AI Assistant",
    description: "Node.js, Express ve OpenAI API kullanılarak geliştirilmiş yapay zeka destekli asistan uygulaması.",
    tech: ["Node.js", "Express", "OpenAI", "API"],
    github: "https://github.com/Kandexa/kandexa-ai-assistant-v1",
    stars: 1,
    featured: true,
  },
  {
    name: "Stok Takip",
    description: "İşletmeler için envanter ve stok yönetim sistemi.",
    tech: ["JavaScript", "Web App"],
    github: "https://github.com/Kandexa/stok-takip",
    stars: 1,
    featured: false,
  },
  {
    name: "Kandexa Learn",
    description: "Şirketler için güvenli not kaydetme ve paylaşma aracı.",
    tech: ["HTML", "Security", "Enterprise"],
    github: "https://github.com/Kandexa/kandexa-learn",
    stars: 0,
    featured: false,
  },
  {
    name: "Kandexa Site",
    description: "Kandexa resmi web sitesi kaynak kodları.",
    tech: ["HTML", "CSS", "Web"],
    github: "https://github.com/Kandexa/kandexa-site",
    stars: 0,
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6 font-body">
            Projelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
            Geliştirdiğimiz{" "}
            <span className="text-gradient">Çözümler</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Otomasyon, yapay zeka ve web teknolojilerini kullanarak geliştirdiğimiz 
            açık kaynak projeler.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      {project.stars}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 font-body line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded-md text-muted-foreground font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub'da Görüntüle
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-card/30 border border-border/30 rounded-xl hover:border-primary/30 hover:bg-card/50 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold font-heading text-sm group-hover:text-primary transition-colors truncate">
                  {project.name}
                </h4>
                <p className="text-xs text-muted-foreground truncate font-body">
                  {project.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com/Kandexa?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Tüm Projeleri Görüntüle
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
