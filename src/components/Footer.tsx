import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-heading font-bold text-lg gradient-text">MWN.</span>
        <p className="flex items-center gap-1">
          © {new Date().getFullYear()} Md. Wahiduzzaman Nayem. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-destructive" /> & dedication
        </p>
      </div>
    </footer>
  );
};

export default Footer;
