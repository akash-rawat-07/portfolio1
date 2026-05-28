export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 noise-overlay z-[2] pointer-events-none opacity-50" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.12), transparent)",
        }}
      />
    </>
  );
}
