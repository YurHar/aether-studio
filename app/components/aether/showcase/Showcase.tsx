'use client';

import { projects } from './CaseData';
import ProjectCard from './ProjectCard';

const Showcase = () => {
  return (
    <section
      id="works"
      className="py-32 px-6 md:px-20 relative z-10"
    >
      <div className="mb-24">
        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">
          Selected Works
        </h2>
      </div>
      <div className="flex flex-wrap justify-between gap-y-32">
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className={`w-full md:w-[45%] ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <ProjectCard key={proj.id} {...proj} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
