import { useEffect, useState } from 'react';

type LoadingScreenProps = {
  onComplete: () => void;
  durationMs?: number;
};

export default function LoadingScreen({ onComplete, durationMs = 2000 }: LoadingScreenProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setExiting(true), durationMs - 400);
    const doneTimer = window.setTimeout(onComplete, durationMs);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [durationMs, onComplete]);

  return (
    <div
      className={`expertlance-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-surface ${
        exiting ? 'expertlance-loader-exit' : ''
      }`}
      aria-label="Loading ExpertLance"
      role="status"
    >
      <div className="absolute inset-0 bg-grid-light opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200/50 rounded-full blur-[100px] expertlance-loader-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-200/40 rounded-full blur-[100px] expertlance-loader-glow" style={{ animationDelay: '0.5s' }} />

      <div className="relative flex flex-col items-center gap-8">
        <div className="expertlance-loader-logo-wrap">
          <img
            src="/logo.png"
            alt="ExpertLance"
            className="w-40 h-32 object-contain expertlance-loader-logo"
          />
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink expertlance-loader-title">
            Expert<span className="text-gradient-light">Lance</span>
          </h1>
          <p className="text-sm text-brand-muted tracking-wide">Computer Science & Programming</p>
        </div>

        <div className="w-56 space-y-2">
          <div className="expertlance-loader-bar-track h-1.5 rounded-full bg-brand-line overflow-hidden">
            <div className="expertlance-loader-bar h-full rounded-full" />
          </div>
          <div className="flex justify-center gap-1.5 pt-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="expertlance-loader-dot w-2 h-2 rounded-full bg-brand-yellow"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
