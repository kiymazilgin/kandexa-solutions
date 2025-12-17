import { Github, Linkedin } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md overflow-hidden">
                <img src={logoImg} alt="Kandexa Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold font-heading">Kandexa</span>
            </a>
            <span className="text-sm text-muted-foreground font-body">
              © {currentYear} Tüm hakları saklıdır.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kandexa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mehmet-celil-kandemir-82678a397/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
