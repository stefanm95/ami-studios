type BookingStepProps = {
  current: number;
  total: number;
  label: string;
};

export function BookingStep({ current, total, label }: BookingStepProps) {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
          <span className="mx-2 text-stone-200/30">-</span>
          <span className="text-stone-100/82">{label}</span>
        </p>
      </div>
      <div className="h-px w-full bg-white/12">
        <div
          className="h-px bg-champagne transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
