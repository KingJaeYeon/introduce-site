import { cn } from "@/lib/utils";

export function IconLinearStar({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.51 0.5L10.99 5.52L16.53 6.33L12.52 10.23L13.47 15.74L8.52 13.14L3.57 15.74L4.52 10.23L0.5 6.32L6.04 5.51L8.51 0.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSolidStar({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-icon")}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.51 0.5L10.99 5.52L16.53 6.33L12.52 10.23L13.47 15.74L8.52 13.14L3.57 15.74L4.52 10.23L0.5 6.32L6.04 5.51L8.51 0.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
