const MistBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[80px] [animation:mist1_18s_ease-in-out_infinite]"
        style={{ background: `radial-gradient(circle, hsl(var(--color-purple-500) / 0.25) 0%, hsl(var(--color-purple-500) / 0) 70%)` }}
      />
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[60px] [animation:mist2_15s_ease-in-out_infinite]"
        style={{ background: `radial-gradient(circle, hsl(var(--color-aqua-400) / 0.30) 0%, hsl(var(--color-aqua-400) / 0) 70%)` }}
      />
      <div
        className="absolute w-[1400px] h-[1400px] rounded-full blur-[70px] [animation:mist3_12s_ease-in-out_infinite]"
        style={{ background: `radial-gradient(circle, hsl(var(--color-pink-500) / 0.18) 0%, hsl(var(--color-pink-500) / 0) 70%)` }}
      />
    </div>
  );
};

export default MistBackground;
