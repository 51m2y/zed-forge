"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  ["4", "Projects", "Shipped"],
  ["3", "Industries", "Served"],
  ["100%", "On Time", "Delivery"]
];

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
      const isPercent = value.includes("%");
      const node = ref.current;
      if (!node) return;

      const controls = animate(0, numeric, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = Math.floor(latest).toString() + (isPercent ? "%" : "");
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, hasAnimated]);

  return <span ref={ref}>{value}</span>;
}

export function SocialProof() {
  return (
    <section className="border-y border-ff-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-ff-border text-center">
        {stats.map(([value, label, sub]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3"
          >
            <div className="font-heading text-3xl font-bold text-ff-text">
              <CountUp value={value} />
            </div>
            <div className="mt-2 text-sm text-ff-muted">{label}</div>
            <div className="text-sm text-ff-muted">{sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

