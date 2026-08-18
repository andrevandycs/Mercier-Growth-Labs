"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";

type MotionSectionProps = HTMLMotionProps<"section">;

export default function MotionSection(props: MotionSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(mediaQuery.matches);

    update();

    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (isMobile) {
    const {
      initial,
      animate,
      exit,
      whileHover,
      whileTap,
      whileInView,
      viewport,
      transition,
      variants,
      style,
      ...rest
    } = props;

    return <section {...(rest as React.HTMLAttributes<HTMLElement>)} />;
  }

  return <motion.section {...props} />;
}
