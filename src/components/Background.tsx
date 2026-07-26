// components/Background.tsx

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size[64px_64px]" />

      <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
    </div>
  );
}
