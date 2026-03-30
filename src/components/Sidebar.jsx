import { useState } from "react";
import {
  ExternalLink,
  Inbox,
  Menu,
  NotebookPen,
  PencilLine,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    href: "/dashboard/inbox",
    label: "Inbox",
    icon: Inbox,
    iconClass: "text-[#3a96dd]",
  },
  {
    href: "/dashboard/sent",
    label: "Sent",
    icon: ExternalLink,
    iconClass: "text-[#b3dbf2]",
  },
  {
    href: "/dashboard/drafts",
    label: "Drafts",
    icon: NotebookPen,
    iconClass: "text-[#ffffff]",
  },
  {
    href: "/dashboard/compose",
    label: "Compose",
    icon: PencilLine,
    iconClass: "text-[#ffb900]",
  },
];

const Sidebar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <aside className="bg-[#12112a] text-[#d9d9f1] h-auto md:min-h-screen w-full md:w-72 xl:w-80 flex flex-col shadow-xl md:shadow-none">
      <div className="flex items-center justify-between px-5 py-5 border-b border-[#2a2a3d]">
        <div className="flex items-center gap-3">
          <NotebookPen className="text-[#c7a787]" size={28} />
          <div>
            <h1 className="text-lg font-bold text-[#f5f3ff]">
              Memo<span className="text-[#a78bfa]">App</span>
            </h1>
           
          </div>
        </div>

        <button
          type="button"
          onClick={() => setNavOpen((current) => !current)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#2a2660]/90 hover:bg-[#3d34a3]/90 transition"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
        >
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`${navOpen ? "block" : "hidden"} md:block px-4 py-5`}>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-[#d4d4f7] hover:bg-purple-900/20 transition"
                  onClick={() => setNavOpen(false)}
                >
                  <Icon className={`${item.iconClass}`} size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-4 pb-6 md:pb-8">
        <Link
          to="/dashboard/profile"
          className="flex items-center gap-3 rounded-3xl bg-[#1f1c48] p-4 transition hover:bg-[#2b286b]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8f7bfc] text-sm font-bold text-white">
            JD
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f3f2ff] truncate">
              John Doe
            </p>
            <p className="text-[11px] text-[#9a8bdb] truncate">
              john.doe@example.com
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
