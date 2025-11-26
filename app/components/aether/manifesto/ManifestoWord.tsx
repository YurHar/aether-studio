import { motion, useTransform, type MotionValue } from 'framer-motion';

interface ManifestoWordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const ManifestoWord = ({
  word,
  index,
  total,
  scrollYProgress,
}: ManifestoWordProps) => {
  const base = index / total;
  const start = Math.max(0, base - 0.1);
  const end = Math.min(1, base + 0.15);

  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(148,163,184,0.7)', 'rgba(249,250,251,1)']
  );
  const y = useTransform(scrollYProgress, [start, end], [6, 0]);

  return (
    <motion.span
      style={{ opacity, color, y }}
      className="relative will-change-transform"
    >
      {word}{' '}
    </motion.span>
  );
};

export default ManifestoWord;
