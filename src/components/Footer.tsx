import { Github, Heart, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50">
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-indigo-500/30"></div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span>Сделано с любовью</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/hschool.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden md:inline">@hschool.official</span>
            </a>
            <a 
              href="https://t.me/hannapazdzeyeva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.49.8-.75 3.12-1.36 5.2-2.26 6.24-2.7 2.97-1.24 3.58-1.45 3.98-1.45.09 0 .28.02.4.09.11.06.18.14.21.23.02.1.02.2.01.3z"/>
              </svg>
              <span className="hidden md:inline">@hannapazdzeyeva</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 