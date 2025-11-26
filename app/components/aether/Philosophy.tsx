// app/components/aether/Philosophy.tsx
'use client';

const items = [
  {
    title: 'Immersion',
    desc: 'Design isn’t just visual; it’s temporal. We build worlds that invite users to stay, explore, and get lost.',
  },
  {
    title: 'Performance',
    desc: 'Beauty without speed is merely decoration. Our code is as refined as our visuals, ensuring fluid 60fps experiences.',
  },
  {
    title: 'Innovation',
    desc: 'We don’t follow trends. We deconstruct them to find new ways of interacting with the digital medium.',
  },
];

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="py-20 border-t border-gray-900 relative z-10 bg-[#050505]"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row">
        {/* Left column */}
        <div className="md:w-1/3 mb-10 md:mb-0 md:sticky md:top-32 h-fit">
          {/* ^ sticky only on md+, no sticky on mobile */}
          <h2 className="serif text-5xl mb-6">
            Our Core <br />
            <span className="italic text-gray-500">Philosophy</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            We strip away the unnecessary to reveal the essential. Every pixel
            serves a purpose; every motion tells a story.
          </p>
        </div>

        {/* Right column */}
        <div className="md:w-2/3 md:pl-20">
          {/* Desktop / tablet: vertical list */}
          <div className="hidden md:flex flex-col gap-16">
            {items.map((item) => (
              <div
                key={item.title}
                className="border-l border-gray-800 pl-8 py-2 hover:border-white transition-colors duration-500"
              >
                <h3 className="text-2xl mb-2 font-light uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-lg serif italic">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: horizontal slider */}
          <div className="md:hidden -mx-6 px-6">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="
                    min-w-[80%]
                    snap-start
                    border border-gray-800/70
                    rounded-2xl
                    px-6 py-6
                    bg-black/40
                    backdrop-blur-sm
                    shadow-[0_18px_50px_rgba(0,0,0,0.8)]
                  "
                >
                  <h3 className="text-xl mb-3 font-light uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed serif italic">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              Swipe left / right to explore our principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
