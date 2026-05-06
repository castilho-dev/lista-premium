import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Users, Calculator, Instagram, LogOut } from 'lucide-react';
import { ReactNode } from 'react';
import Logo from '../Logo';
import WhatsAppButton from '../WhatsAppButton';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { clearMemberSession, getMemberSession, firstName } from '../../auth';

const navItems = [
  { to: '/fornecedores', label: 'Fornecedores', icon: Users },
  { to: '/calculadora', label: 'Calculadora', icon: Calculator },
  { to: '/instagram10k', label: 'Instagram 10K', icon: Instagram },
  { to: '/whatsapplucrativo', label: 'WhatsApp Lucrativo', icon: WhatsAppIcon },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const session = getMemberSession();

  const handleLogout = () => {
    clearMemberSession();
    navigate('/app', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/85 backdrop-blur-xl border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/inicio" className="flex items-center gap-3 shrink-0">
            <Logo size={40} />
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 font-medium">
              Lista Premium
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-neutral-900 bg-neutral-900/5'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {session?.name && (
              <span className="hidden lg:block text-sm text-neutral-600">
                Olá, <span className="font-medium text-neutral-900">{firstName(session.name)}</span>
              </span>
            )}
            <button
              onClick={handleLogout}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-900/5 transition-colors"
              aria-label="Sair"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12 pb-28 md:pb-16">
        {children}
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-xl border-t border-neutral-200">
        <div className="grid grid-cols-4">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium leading-tight transition-colors ${
                  isActive ? 'text-neutral-900' : 'text-neutral-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex items-center justify-center h-9 w-9 rounded-full transition-all ${
                      isActive ? 'bg-neutral-900 text-white shadow-md' : 'bg-transparent'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate max-w-full px-1">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <WhatsAppButton />
    </div>
  );
}
