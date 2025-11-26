import { SOCIAL_LINKS } from "./footerConfig";

const FooterBottom = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gray-700 mt-10 mb-6" />
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Aether Studio</div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
