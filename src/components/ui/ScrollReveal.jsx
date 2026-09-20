import React from 'react';
import { motion } from 'framer-motion';

const defaultEasing = [0.16, 1, 0.3, 1];

const getDirectionVariants = (direction, distance = 30) => {
  switch (direction) {
    case 'up':
      return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
    case 'down':
      return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
    case 'left':
      return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
    case 'right':
      return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
    case 'scale':
      return { hidden: { opacity: 0, scale: 0.95, y: 15 }, visible: { opacity: 1, scale: 1, y: 0 } };
    case 'none':
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

export function RevealItem({ 
  children, 
  direction = 'up', 
  distance = 25, 
  className = '',
  duration = 0.7,
  ...props 
}) {
  const variants = getDirectionVariants(direction, distance);
  return (
    <motion.div
      className={className}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration, ease: defaultEasing }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function DeployCard({ 
  children, 
  className = '', 
  direction = 'up',
  distance = 30,
  duration = 0.75,
  hover = true,
  ...props 
}) {
  const variants = getDirectionVariants(direction, distance);
  return (
    <motion.div
      className={className}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration, ease: defaultEasing }
        }
      }}
      whileHover={hover ? { y: -5, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  distance = 35,
  duration = 0.8,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
  once = true,
  viewportMargin = '-40px',
  ...props
}) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay
            }
          },
          hidden: {}
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  const variants = getDirectionVariants(direction, distance);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration, delay, ease: defaultEasing }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
