'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCardProps } from './type';

const ProjectCard = ({ title, category, img, description, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? -50 : 50]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="w-full md:w-[45%] mb-20 md:mb-0">
      <motion.div style={{ y, scale }} className="group cursor-pointer">
        <div className="overflow-hidden rounded-sm relative aspect-[3/4] md:aspect-[4/5] bg-gray-900">
          <motion.img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

          <div className="absolute inset-x-0 bottom-0 pointer-events-none">
            <div
              className="
                pointer-events-auto
                bg-gradient-to-t from-black/30 via-black/20 to-transparent
                px-6 pb-6 pt-10
                translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                transition-transform duration-500
              "
            >
              <p className="text-sm md:text-base text-gray-300 max-w-md">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Meta under image */}
        <div className="mt-6 flex justify-between items-end border-b border-gray-800 pb-4">
          <div>
            <h3 className="serif text-3xl md:text-4xl italic group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
              {category}
            </p>
          </div>
          <span className="text-2xl font-light text-gray-600 group-hover:text-white transition-colors">
            0{index + 1}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
