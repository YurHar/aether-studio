// app/components/aether/Navbar.tsx
'use client';

const SECTIONS = ['Manifesto', 'Works', 'Philosophy', 'Contact'] as const;

const Navbar = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 mix-blend-difference text-white">
      <div className="text-xl font-bold tracking-widest uppercase">Aether</div>

      <div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
        {SECTIONS.map((item) => {
          const id = item.toLowerCase();

          return (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(id);
              }}
              className="hover:opacity-50 transition-opacity duration-300 cursor-pointer"
            >
              {item}
            </a>
          );
        })}
      </div>

      <div className="md:hidden text-sm">Menu</div>
    </nav>
  );
};

export default Navbar;
