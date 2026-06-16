import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 122, height: 18 },
  md: { width: 149, height: 22 },
  lg: { width: 244, height: 36 },
};

export function Logo({ className, showTagline = false, size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <div className={cn("flex flex-col items-start gap-[3px]", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 488 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="zed-forge"
        role="img"
      >
        {/* Z */}
        <path
          d="M8 8 L52 8 L52 16 L20 56 L52 56 L52 64 L8 64 L8 56 L40 16 L8 16 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
        />
        {/* E */}
        <path
          d="M62 8 L62 64 L106 64 L106 56 L70 56 L70 40 L102 40 L102 32 L70 32 L70 16 L106 16 L106 8 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
        />
        {/* D */}
        <path
          d="M116 8 L116 64 L138 64 C158 64 172 52 172 36 C172 20 158 8 138 8 Z M124 16 L138 16 C153 16 164 24 164 36 C164 48 153 56 138 56 L124 56 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
          fillRule="evenodd"
        />
        {/* Blue separator */}
        <line
          x1="182" y1="12" x2="182" y2="60"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* F */}
        <path
          d="M194 8 L194 64 L202 64 L202 40 L234 40 L234 32 L202 32 L202 16 L238 16 L238 8 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
        />
        {/* O */}
        <path
          d="M248 36 C248 20 260 8 276 8 C292 8 304 20 304 36 C304 52 292 64 276 64 C260 64 248 52 248 36 Z M256 36 C256 48 265 56 276 56 C287 56 296 48 296 36 C296 24 287 16 276 16 C265 16 256 24 256 36 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
          fillRule="evenodd"
        />
        {/* R */}
        <path
          d="M314 8 L314 64 L322 64 L322 40 L336 40 L352 64 L362 64 L344 38 C352 35 358 28 358 20 C358 13 352 8 342 8 Z M322 16 L342 16 C347 16 350 18 350 22 C350 28 346 32 338 32 L322 32 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
          fillRule="evenodd"
        />
        {/* G */}
        <path
          d="M372 36 C372 20 384 8 400 8 C412 8 422 15 427 25 L419 29 C416 22 409 16 400 16 C389 16 380 24 380 36 C380 48 389 56 400 56 C408 56 415 51 418 44 L406 44 L406 36 L426 36 L426 44 C422 55 412 64 400 64 C384 64 372 52 372 36 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
        />
        {/* E (second) */}
        <path
          d="M436 8 L436 64 L480 64 L480 56 L444 56 L444 40 L476 40 L476 32 L444 32 L444 16 L480 16 L480 8 Z"
          className="fill-[#111827] dark:fill-[#F0F0F5]"
        />
      </svg>

      {showTagline && (
        <span className="pl-[2px] font-mono text-[9px] uppercase tracking-[0.2em] text-ff-muted">
          web development studio
        </span>
      )}
    </div>
  );
}
