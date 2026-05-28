import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
          left: x - 250,
          top: y - 250,
        }}
        animate={{ left: x - 250, top: y - 250 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </motion.div>
  );
}
