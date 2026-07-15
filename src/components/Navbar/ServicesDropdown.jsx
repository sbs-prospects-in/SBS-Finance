import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { SERVICES } from '../../constants/services';

function ServicesDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px] z-50 animate-fade-in">
      <div className="bg-[#FAF6EB]/85 backdrop-blur-md border border-gold-400/30 rounded-card shadow-navbar p-6 transition-all duration-200">
      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((service) => {
          const IconComponent = Icons[service.icon];
          return (
            <Link
              key={service.id}
              to={service.href}
              onClick={(e) => {
                onClose();
                const [path, hash] = service.href.split('#');
                if (window.location.pathname === path && hash) {
                  const el = document.getElementById(hash);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-100 group transition-all duration-250"
            >
              <div className="p-2 bg-green-700/10 rounded-md text-gold-400 group-hover:bg-green-700 group-hover:text-green-100 transition-colors duration-250 mt-0.5">
                {IconComponent ? <IconComponent size={18} /> : <Icons.HelpCircle size={18} />}
              </div>
              <div>
                <h4 className="text-ink-dark font-semibold text-sm group-hover:text-green-700 transition-colors duration-250">
                  {service.title}
                </h4>
                <p className="text-ink-muted text-xs mt-1 line-clamp-1 leading-normal">
                  {service.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
