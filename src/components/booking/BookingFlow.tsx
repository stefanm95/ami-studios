import { useMemo, useState } from "react";
import { cn } from "../../lib/cn";
import { BookingStep } from "./BookingStep";

export type BookingMode = "book" | "gift";

type FlowStep = {
  label: string;
  title: string;
  description: string;
  field: string;
  options?: string[];
  input?: {
    label: string;
    name: string;
    type?: "text" | "tel" | "email" | "date" | "textarea";
    placeholder?: string;
  }[];
};

type BookingFlowProps = {
  mode: BookingMode;
  onComplete: () => void;
};

const bookSteps: FlowStep[] = [
  {
    label: "Setting",
    title: "Where should the appointment happen?",
    description: "Choose the private setting that fits the request.",
    field: "setting",
    options: ["Home", "Hotel", "Office", "Yacht"],
  },
  {
    label: "Service",
    title: "Select a preferred service.",
    description: "You can choose now or leave the recommendation open.",
    field: "service",
    options: ["Classic Stillness", "Deep Focus", "Warm Stone", "Scented Room", "Not sure yet"],
  },
  {
    label: "Time",
    title: "Share a preferred day and time window.",
    description: "Exact availability is confirmed privately.",
    field: "timing",
    input: [
      { label: "Preferred day", name: "preferredDay", type: "date" },
      { label: "Time window", name: "timeWindow", placeholder: "Evening, afternoon, after 20:00" },
    ],
  },
  {
    label: "Details",
    title: "Your contact details.",
    description: "We use these only to coordinate the request.",
    field: "details",
    input: [
      { label: "Name", name: "name", placeholder: "Your name" },
      { label: "Phone", name: "phone", type: "tel", placeholder: "+40..." },
      { label: "Optional note", name: "note", type: "textarea", placeholder: "Location notes or preferences" },
    ],
  },
  {
    label: "Review",
    title: "Review the appointment request.",
    description: "Submit the request and we will confirm the details discreetly.",
    field: "review",
  },
];

const giftSteps: FlowStep[] = [
  {
    label: "Gift type",
    title: "Choose the gift format.",
    description: "Keep it specific or leave the final details open.",
    field: "giftType",
    options: ["Single appointment", "Custom amount", "Not sure yet"],
  },
  {
    label: "Recipient",
    title: "Who is the gift for?",
    description: "A name or short note is enough for now.",
    field: "recipient",
    input: [
      { label: "Recipient name", name: "recipientName", placeholder: "Recipient name" },
      { label: "Optional note", name: "recipientNote", type: "textarea", placeholder: "Message or preference" },
    ],
  },
  {
    label: "Delivery",
    title: "Select delivery style.",
    description: "We can send it digitally or coordinate privately.",
    field: "delivery",
    options: ["Digital gift", "Coordinate privately"],
  },
  {
    label: "Your details",
    title: "Your contact details.",
    description: "We will confirm the gift request before anything is arranged.",
    field: "yourDetails",
    input: [
      { label: "Name", name: "name", placeholder: "Your name" },
      { label: "Phone", name: "phone", type: "tel", placeholder: "+40..." },
      { label: "Email", name: "email", type: "email", placeholder: "name@example.com" },
    ],
  },
  {
    label: "Review",
    title: "Review the gift request.",
    description: "Submit the request and we will follow up with private coordination.",
    field: "review",
  },
];

export function BookingFlow({ mode, onComplete }: BookingFlowProps) {
  const steps = mode === "book" ? bookSteps : giftSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const step = steps[currentStep];

  const reviewItems = useMemo(
    () => Object.entries(values).filter(([, value]) => value.trim().length > 0),
    [values],
  );

  const updateValue = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = () => {
    const payload = {
      mode,
      values,
      submittedAt: new Date().toISOString(),
    };

    console.log("AMI Studios request", payload);
    onComplete();
  };

  return (
    <div className="mt-9 flex min-h-0 flex-1 flex-col sm:mt-10">
      <BookingStep
        current={currentStep + 1}
        total={steps.length}
        label={step.label}
      />

      <div className="booking-modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain py-8 pr-1 sm:py-10">
        <h3 className="font-display text-4xl leading-tight text-white sm:text-5xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-xl leading-7 text-stone-200/70">
          {step.description}
        </p>

        {step.options ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {step.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => updateValue(step.field, option)}
                className={cn(
                  "min-h-16 border px-5 py-5 text-left text-sm uppercase tracking-[0.14em] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300",
                  values[step.field] === option
                    ? "border-[rgba(212,196,168,0.78)] bg-[rgba(212,196,168,0.10)] text-white"
                    : "border-white/14 bg-white/[0.045] text-stone-100/82 hover:border-white/28 hover:bg-white/[0.07] hover:text-white",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        {step.input ? (
          <div className="mt-8 grid gap-5">
            {step.input.map((input) => (
              <label key={input.name} className="grid gap-2.5 text-sm text-stone-200/74">
                <span className="text-[0.66rem] uppercase tracking-[0.18em] text-champagne">
                  {input.label}
                </span>
                {input.type === "textarea" ? (
                  <textarea
                    value={values[input.name] ?? ""}
                    onChange={(event) => updateValue(input.name, event.target.value)}
                    placeholder={input.placeholder}
                    className="min-h-28 resize-none border border-white/14 bg-white/[0.045] px-5 py-4 text-white outline-none transition placeholder:text-stone-200/42 focus:border-champagne/70"
                  />
                ) : (
                  <input
                    value={values[input.name] ?? ""}
                    onChange={(event) => updateValue(input.name, event.target.value)}
                    type={input.type ?? "text"}
                    placeholder={input.placeholder}
                    className="min-h-13 border border-white/14 bg-white/[0.045] px-5 py-4 text-white outline-none transition placeholder:text-stone-200/42 focus:border-champagne/70"
                  />
                )}
              </label>
            ))}
          </div>
        ) : null}

        {step.field === "review" ? (
          <div className="mt-8 border border-white/12 bg-white/[0.045]">
            {reviewItems.length > 0 ? (
              reviewItems.map(([key, value]) => (
                <div key={key} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[12rem_1fr]">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-stone-200/45">
                    {key}
                  </p>
                  <p className="text-stone-100/82">{value}</p>
                </div>
              ))
            ) : (
              <p className="px-5 py-5 text-stone-200/62">No details added yet.</p>
            )}
          </div>
        ) : null}
      </div>

      <div className="shrink-0 flex flex-col-reverse gap-3 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep((stepIndex) => Math.max(stepIndex - 1, 0))}
          disabled={currentStep === 0}
          className="min-h-12 border border-white/16 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-200/70 transition disabled:cursor-not-allowed disabled:opacity-35 enabled:hover:border-white/30 enabled:hover:bg-white/[0.045] enabled:hover:text-white"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            if (currentStep === steps.length - 1) {
              submit();
              return;
            }
            setCurrentStep((stepIndex) => Math.min(stepIndex + 1, steps.length - 1));
          }}
          className="min-h-12 border border-[rgba(212,196,168,0.85)] bg-[#d4c4a8] px-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#14110f] transition hover:border-[rgba(242,234,220,0.95)] hover:bg-[#f2eadc] hover:text-[#14110f] disabled:border-white/10 disabled:bg-white/[0.08] disabled:text-white/35"
        >
          {currentStep === steps.length - 1
            ? mode === "book"
              ? "Submit request"
              : "Submit gift request"
            : "Next"}
        </button>
      </div>
    </div>
  );
}
