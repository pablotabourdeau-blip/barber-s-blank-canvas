import { BUSINESS } from "@/lib/business";

export function Wordmark({
  size = "sm",
  withTagline = true,
  className = "",
}: {
  size?: "sm" | "lg";
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={
          size === "lg"
            ? "font-display text-[5.5rem] font-medium tracking-[-0.04em] sm:text-[8rem]"
            : "font-display text-[1.9rem] font-medium tracking-[-0.03em]"
        }
      >
        {BUSINESS.shortName}
      </span>
      {withTagline && (
        <span
          className={
            size === "lg"
              ? "eyebrow mt-3 !text-[0.7rem]"
              : "eyebrow mt-1 !text-[0.5rem] !tracking-[0.32em]"
          }
        >
          {BUSINESS.tagline}
        </span>
      )}
    </span>
  );
}
