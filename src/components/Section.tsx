import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Section({ id, title, eyebrow, children, className = "" }: Props) {
  return (
    <section id={id} className={`section-scroll ${className}`}>
      <div className="container" style={{ maxWidth: "64rem" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <p className="font-mono text-uppercase small text-accent mb-2 letter-spacing-wide">
              {eyebrow}
            </p>
          )}
          <h2 className="fs-2 fw-semibold text-white mb-4 mb-md-5 pb-1">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
