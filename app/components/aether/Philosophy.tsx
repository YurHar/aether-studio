// app/components/aether/Philosophy.tsx
'use client';

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="py-20 border-t border-gray-900 relative z-10 bg-[#050505]"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-10 md:mb-0 sticky top-32 h-fit">
          <h2 className="serif text-5xl mb-6">
            Our Core <br />
            <span className="italic text-gray-500">Philosophy</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            We strip away the unnecessary to reveal the essential. Every pixel
            serves a purpose; every motion tells a story.
          </p>
        </div>
        <div className="md:w-2/3 flex flex-col gap-16 md:pl-20">
          {[
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
          ].map((item) => (
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
      </div>
    </section>
  );
};

export default Philosophy;
