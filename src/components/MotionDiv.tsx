"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";

type MotionDivProps = HTMLMotionProps<"div">;

export default function MotionDiv(props: MotionDivProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(mediaQuery.matches);

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
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

    return <div {...(rest as React.HTMLAttributes<HTMLDivElement>)} />;
  }

  return <motion.div {...props} />;
}
