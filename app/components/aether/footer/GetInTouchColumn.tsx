import { CAPABILITIES, CONTACT_INFO } from "./footerConfig";

interface GetInTouchColumnProps {
  className?: string;
}

const GetInTouchColumn = ({ className = "" }: GetInTouchColumnProps) => {
  return (
    <div className={`flex flex-col justify-center max-w-xl ${className}`}>
      <h2 className="serif text-4xl md:text-5xl mb-6">
        Quiet interfaces <br />
        for bold ideas.
      </h2>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">
        We build calm, atmospheric digital products for teams who care
        about detail. Fewer distractions, more intention—and motion that
        feels more like cinema than UI.
      </p>

      <div className="mt-1 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-gray-500">
        {CAPABILITIES.map((capability) => (
          <span
            key={capability}
            className="px-3 py-1 rounded-full border border-gray-700/60 bg-black/40"
          >
            {capability}
          </span>
        ))}
      </div>
      
      <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mt-6">
        Get in touch
      </p>

      <div className="mt-3 space-y-3 text-sm text-gray-400">
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
            Email
          </div>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
            Availability
          </div>
          <p>{CONTACT_INFO.availability}</p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-1">
            Timezones
          </div>
          <p>{CONTACT_INFO.timezones}</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchColumn;
