import { motion } from "framer-motion";

export const Motion = motion.div;

export const FadeIn = (props = {}) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: props.duration || 1.5,
    delay: props.delay || 0,
  },
});

export const LeftIn = (props = {}) => ({
  initial: { opacity: 0, x: 250 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: props.duration || 1,
    delay: props.delay || 0,
  },
});

export const RightIn = (props = {}) => ({
  initial: { opacity: 0, x: -250 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: props.duration || 1,
    delay: props.delay || 0,
  },
});
